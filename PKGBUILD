# Maintainer: Daniel Milde <daniel@milde.cz>
# Based on python35 PKGBUILD (Samuel Damashek)

pkgname=python-git
pkgver=1.8ec91e9
pkgrel=1
_pybasever=3.6
_gitname=cpython
pkgdesc="Next generation of the python high-level scripting language"
arch=('i686' 'x86_64')
license=('custom')
url="http://www.python.org/"
depends=('expat' 'bzip2' 'gdbm' 'openssl' 'libffi' 'zlib')
makedepends=('tk' 'sqlite' 'valgrind')
optdepends=('tk: for tkinter' 'sqlite')
options=('!makeflags')
source=(hg+https://hg.python.org/cpython)
sha256sums=('SKIP')

build() {
  cd "${srcdir}/cpython"

  # FS#23997
  sed -i -e "s|^#.* /usr/local/bin/python|#!/usr/bin/python|" Lib/cgi.py

  # Ensure that we are using the system copy of various libraries (expat, zlib and libffi),
  # rather than copies shipped in the tarball
  rm -rf Modules/expat
  rm -rf Modules/zlib
  rm -rf Modules/_ctypes/{darwin,libffi}*

  ./configure --prefix=/usr \
              --enable-shared \
              --with-threads \
              --with-computed-gotos \
              --enable-ipv6 \
              --with-valgrind \
              --with-system-expat \
              --with-dbmliborder=gdbm:ndbm \
              --with-system-ffi

  make
}

# XXX disabled
check_DISABLED() {
  cd "${srcdir}/${_gitname}"
  LD_LIBRARY_PATH="${srcdir}/${_gitname}":${LD_LIBRARY_PATH} \
     "${srcdir}/${_gitname}/python" -m test.regrtest -x test_distutils test_site \
     test_urllib test_uuid test_pydoc
}

package() {
  cd "${srcdir}/${_gitname}"
  # altinstall: /usr/bin/pythonX.Y but not /usr/bin/python or /usr/bin/pythonX
  make DESTDIR="${pkgdir}" altinstall maninstall

  # Work around a conflict with 3.4 the 'python' package.
  rm "${pkgdir}/usr/lib/libpython3.so"
  rm "${pkgdir}/usr/share/man/man1/python3.1"

  # Fix FS#22552
  ln -sf ../../libpython${_pybasever}m.so \
    "${pkgdir}/usr/lib/python${_pybasever}/config-${_pybasever}m/libpython${_pybasever}m.so"

  # Fix pycairo build
  ln -sf python3.6m-config "${pkgdir}/usr/bin/python3.6-config"

  # Clean-up reference to build directory
  sed -i "s|$srcdir/${_gitname}:||" "$pkgdir/usr/lib/python${_pybasever}/config-${_pybasever}m/Makefile"

  # License
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

pkgver() {
  cd $_gitname
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}
