# Maintainer: Daniel Milde <daniel@milde.cz>
# Co-Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Modified from extra/python; original contributors:
# Contributor: Angel Velasquez <angvp@archlinux.org>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Stéphane Gaudreault <stephane@archlinux.org>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: Jason Chu <jason@archlinux.org>

pkgname=python-git
pkgver=3.8.0a0.r102398.81574b80e9
pkgrel=1
_pybasever=3.8
pkgdesc="Next generation of the python high-level scripting language"
arch=('i686' 'x86_64')
license=('custom')
url="https://www.python.org/"
depends=('expat' 'bzip2' 'gdbm' 'openssl' 'libffi' 'zlib' 'libnsl')
makedepends=('tk' 'sqlite' 'valgrind' 'bluez-libs' 'mpdecimal' 'xz' 'git' 'llvm' 'gdb' 'xorg-server-xvfb')
optdepends=('sqlite'
            'mpdecimal: for decimal'
            'xz: for lzma'
            'tk: for tkinter')
source=("git+https://github.com/python/cpython#branch=master"
        dont-make-libpython-readonly.patch
        0001-compileall-Fix-ddir-when-recursing.patch)
sha512sums=('SKIP'
            '2ef96708d5b13ae2a3d2cc62c87b4780e60ecfce914e190564492def3a11d5e56977659f41c7f9d12266e58050c766bce4e2b5d50b708eb792794fa8357920c4'
            'ebd04c3b6d41321b1f0d439d356e0ce463760db55dc64109854c70d017cf56608aa19de9fc4a21bf840795ff202b4703444f9af8074b661780798c17e03089ff')

pkgver() {
  cd cpython
  printf "%s.r%s.%s" \
      "$_pybasever.0a0" \
      "$(git rev-list --count HEAD)" \
      "$(git rev-parse --short HEAD)"
}

prepare() {
  cd cpython

  # FS#45809
  patch -p1 -i ../dont-make-libpython-readonly.patch

  # FS#59997
  patch -p1 -i ../0001-compileall-Fix-ddir-when-recursing.patch

  # FS#23997
  sed -i -e "s|^#.* /usr/local/bin/python|#!/usr/bin/python|" Lib/cgi.py

  # https://bugs.python.org/issue34871
  # Disable a failing test
  sed -i -e 's|def test_abs_paths_cached_None|def _test_abs_paths_cached_None|' Lib/test/test_site.py

  # Speed up LTO
  sed -i -e "s|-flto |-flto=4 |g" configure configure.ac

  # Ensure that we are using the system copy of various libraries (expat, libffi, and libmpdec),
  # rather than copies shipped in the tarball
  rm -r Modules/expat
  rm -r Modules/_ctypes/{darwin,libffi}*
  rm -r Modules/_decimal/libmpdec
}

build() {
  cd cpython

  # PGO should be done with -O3
  CFLAGS="${CFLAGS/-O2/-O3}"

  ./configure --prefix=/usr \
              --enable-shared \
              --with-threads \
              --with-computed-gotos \
              --enable-optimizations \
              --with-lto \
              --enable-ipv6 \
              --with-system-expat \
              --with-dbmliborder=gdbm:ndbm \
              --with-system-ffi \
              --with-system-libmpdec \
              --enable-loadable-sqlite-extensions

  # Obtain next free server number for xvfb-run; this even works in a chroot environment.
  export servernum=99
  while ! xvfb-run -a -n "$servernum" /bin/true 2>/dev/null; do servernum=$((servernum+1)); done

  LC_CTYPE=en_US.UTF-8 xvfb-run -s "-screen 0 1280x720x24 -ac +extension GLX" -a -n "$servernum" make EXTRA_CFLAGS="$CFLAGS"
}

check() {
  # test_gdb is expected to fail with LTO
  # test_idle, test_tk, test_ttk_guionly segfaults since 3.6.5

  # https://bugs.python.org/issue34022
  # test_cmd_line_script, test_compileall, test_importlib,
  # test_multiprocessing_main_handling, test_py_compile, test_runpy

  cd cpython

  # Obtain next free server number for xvfb-run; this even works in a chroot environment.
  export servernum=99
  while ! xvfb-run -a -n "$servernum" /bin/true 2>/dev/null; do servernum=$((servernum+1)); done

  LD_LIBRARY_PATH="${srcdir}/cpython":${LD_LIBRARY_PATH} \
  LC_CTYPE=en_US.UTF-8 xvfb-run -s "-screen 0 1280x720x24 -ac +extension GLX" -a -n "$servernum" \
    "${srcdir}/cpython/python" -m test.regrtest -v -uall -x test_gdb -x test_idle -x test_tk -x test_ttk_guionly \
    -x test_cmd_line_script -x test_compileall -x test_importlib -x test_multiprocessing_main_handling -x test_py_compile -x test_runpy
}

package() {
  cd cpython

  # Hack to avoid building again
  sed -i 's/^all:.*$/all: build_all/' Makefile

  # PGO should be done with -O3
  CFLAGS="${CFLAGS/-O2/-O3}"

  make DESTDIR="${pkgdir}" EXTRA_CFLAGS="$CFLAGS" ENSUREPIP=install altinstall maninstall

  # Work around a conflict with the 'python' package.
  rm "${pkgdir}/usr/lib/libpython3.so"
  rm "${pkgdir}/usr/share/man/man1/python3.1"

  # some useful "stuff" FS#46146
  install -dm755 "${pkgdir}"/usr/lib/python${_pybasever}/Tools/{i18n,scripts}
  install -m755 Tools/i18n/{msgfmt,pygettext}.py "${pkgdir}"/usr/lib/python${_pybasever}/Tools/i18n/
  install -m755 Tools/scripts/{README,*py} "${pkgdir}"/usr/lib/python${_pybasever}/Tools/scripts/

  # License
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
