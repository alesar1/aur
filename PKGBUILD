# Maintainer : CoiledSpring
# Original maintainer: Julien Savard <juju@juju2143.ca>
# Based on msp430-elf-binutils

_target=sh3eb-elf
pkgname=${_target}-binutils
pkgver=2.30
pkgrel=1
pkgdesc="GNU binary utilities for the ${_target} target."
arch=(i686 x86_64)
options=('!libtool' '!buildflags') 
url='http://www.gnu.org/software/binutils/'
license=(GPL)
depends=('zlib' 'flex')
source=(ftp://ftp.gnu.org/gnu/binutils/binutils-${pkgver}.tar.bz2)
sha256sums=('efeade848067e9a03f1918b1da0d37aaffa0b0127a06b5e9236229851d9d0c09')

prepare() {
  cd "${srcdir}/binutils-${pkgver}"
 
  # ensure a clean build
  [[ -d binutils-build ]] && rm -rf binutils-build
  mkdir binutils-build
}

build() {
  export CFLAGS="-O2 -pipe -s -fomit-frame-pointer -ffunction-sections -fdata-sections"
  export CXXFLAGS=$CFLAGS
  export LDFLAGS="-Wl,--gc-sections"

  cd "${srcdir}/binutils-${pkgver}/binutils-build"
  ../configure --target=${_target} \
    --prefix=/usr \
    --disable-nls \
    --disable-tls \
    --disable-libssp \
    --program-prefix=${_target}- \
    --enable-multilib \
    --disable-werror \
    --with-sysroot=/usr/${_target} \
    --host=$CHOST \
    --build=$CHOST

  make configure-host
  make
}

check() {
  cd "${srcdir}/binutils-${pkgver}/binutils-build"
  
  # unset LDFLAGS as testsuite makes assumptions about which ones are active
  # do not abort on errors - manually check log files
  make LDFLAGS="" -k check
}

package() {
  cd "${srcdir}/binutils-${pkgver}/binutils-build"

  make DESTDIR="${pkgdir}" install

  rm -f "${pkgdir}"/usr/bin/{ar,as,ld,nm,objdump,ranlib,strip,objcopy}
  rm -f "${pkgdir}"/usr/lib/libiberty.a
  rm -rf "${pkgdir}/usr/share/info"
  # rm -rf "${pkgdir}/usr/share/gdb"
  # rm -rf "${pkgdir}/usr/include/gdb"
}
