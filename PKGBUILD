pkgname=ghdl
pkgver=0.33
pkgrel=2
arch=('i686' 'x86_64')
pkgdesc='VHDL simulator'
url='http://sourceforge.net/projects/ghdl-updates/'
license=('GPLv2')

makedepends=('gcc-ada' 'git')
install=ghdl.install
options=(!emptydirs staticlibs)

_gccver=4.9.3
_islver=0.12.2
_cloogver=0.18.1

source=(
  "git://github.com/tgingold/ghdl#tag=v${pkgver}"
  "ftp://ftp.gnu.org/gnu/gcc/gcc-${_gccver}/gcc-${_gccver}.tar.bz2"
  "http://isl.gforge.inria.fr/isl-${_islver}.tar.bz2"
  "http://www.bastoul.net/cloog/pages/download/cloog-${_cloogver}.tar.gz"
)
md5sums=(
  'SKIP'
  '6f831b4d251872736e8e9cc09746f327'
  'e039bfcfb6c2ab039b8ee69bf883e824'
  'e34fca0540d840e5d0f6427e98c92252'
)

prepare() {
  cd "${srcdir}/ghdl"
  ./configure --prefix=/usr --with-gcc="${srcdir}/gcc-${_gccver}"
  make copy-sources

  cd "${srcdir}/gcc-${_gccver}"

  # link isl/cloog for in-tree builds
  ln -s ../isl-${_islver} isl
  ln -s ../cloog-${_cloogver} cloog

  # Do not run fixincludes
  sed -i 's@\./fixinc\.sh@-c true@' gcc/Makefile.in

  # Arch Linux installs x86_64 libraries /lib
  [[ $CARCH == "x86_64" ]] && sed -i '/m64=/s/lib64/lib/' gcc/config/i386/t-linux64

  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" {libiberty,gcc}/configure

  mkdir ${srcdir}/gcc-build
}

build() {
  cd "${srcdir}/gcc-build"

  # using -pipe causes spurious test-suite failures
  # http://gcc.gnu.org/bugzilla/show_bug.cgi?id=48565
  CFLAGS=${CFLAGS/-pipe/}
  CXXFLAGS=${CXXFLAGS/-pipe/}

  "${srcdir}/gcc-${_gccver}/configure" --prefix=/usr \
    --libdir=/usr/lib --libexecdir=/usr/lib \
    --mandir=/usr/share/man --infodir=/usr/share/info \
    --disable-bootstrap \
    --enable-languages=vhdl \
    --enable-shared --enable-threads=posix \
    --with-system-zlib --enable-__cxa_atexit \
    --disable-libunwind-exceptions --enable-clocale=gnu \
    --disable-libstdcxx-pch --disable-libssp \
    --enable-gnu-unique-object --enable-linker-build-id \
    --enable-cloog-backend=isl \
    --enable-lto --enable-plugin --enable-install-libiberty \
    --with-linker-hash-style=gnu \
    --disable-multilib --disable-werror \
    --enable-checking=release
  make
}

package() {
  cd "${srcdir}/gcc-build"

  # make a full install ...
  make DESTDIR="${pkgdir}" install

  # and remove files which are not specific to ghdl
  rm -rf "${pkgdir}/usr/"{share/{locale,gcc-${_gccver},man/man7},include}
  find "${pkgdir}/usr/lib" \
    -maxdepth 1 -mindepth 1 -not -name 'gcc' \
    -exec rm -rf '{}' +
  find "${pkgdir}/usr/lib/gcc/$(./gcc/xgcc -dumpmachine)/${_gccver}" \
    -maxdepth 1 -mindepth 1 -not -name 'vhdl' -not -name 'ghdl1' \
    -exec rm -rf '{}' +
  find "${pkgdir}/usr/bin" \
    "${pkgdir}/usr/share/man/man1" \
    "${pkgdir}/usr/share/info" \
    -maxdepth 1 -mindepth 1 -not -name 'ghdl*' \
    -exec rm -rf '{}' +
}
