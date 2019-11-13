# Original Maintainer: James Duley <jagduley gmail>
# Previous Maintainer: 2bluesc <2bluesc gmail.com>
# Previous Maintainer: Vadzim Dambrouski <pftbest gmail.com>
# Maintainer: Lorenzo Cappelletti <lorenzo.cappelletti gmail.com>
gccver=82
pkgname=gcc-arm-none-eabi-bin-$gccver
pkgver=8_2018_q4_major
pkgrel=1
pkgdesc="GNU Tools ARM Embedded Processors (binary distribution, includes newlib, does NOT include GDB)"
arch=('x86_64')
depends=('glibc')
optdepends=(
	  'arm-none-eabi-gdb: GNU Debugger for ARM EABI'
    )
provides=("gcc-arm-none-eabi" "gcc-arm-none-eabi-$gccver"
	  "arm-none-eabi-gcc" "arm-none-eabi-gcc-$gccver"
	  "arm-none-eabi-binutils" "arm-none-eabi-binutils-$gccver"
	  "arm-none-eabi-newlib" "arm-none-eabi-newlib-$gccver"
    )
url="https://developer.arm.com/open-source/gnu-toolchain/gnu-rm"
source=("https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/8-2018q4/gcc-arm-none-eabi-8-2018-q4-major-linux.tar.bz2")
license=('custom')
options=(!strip staticlibs)
sha256sums=('fb31fbdfe08406ece43eef5df623c0b2deb8b53e405e2c878300f7a1f303ee52')
md5sums=('f55f90d483ddb3bcf4dae5882c2094cd')

package() {
  mkdir -p $pkgdir/opt
  cd $srcdir/
  cp -a gcc-*/ $pkgdir/opt
  rm -f $pkgdir/opt/gcc-*/bin/arm-none-eabi-gdb*
}
