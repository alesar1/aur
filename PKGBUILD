# Original Maintainer: James Duley <jagduley gmail>
# Previous Maintainer: 2bluesc <2bluesc gmail.com>
# Previous Maintainer: Vadzim Dambrouski <pftbest gmail.com>
# Maintainer: Lorenzo Cappelletti <lorenzo.cappelletti gmail.com>
gccver=73
pkgname=gcc-arm-none-eabi-bin-$gccver
pkgver=7_2018_q2_update
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
source=("https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-linux.tar.bz2")
license=('custom')
options=(!strip staticlibs)
sha256sums=('bb17109f0ee697254a5d4ae6e5e01440e3ea8f0277f2e8169bf95d07c7d5fe69')
md5sums=('299ebd3f1c2c90930d28ab82e5d8d6c0')

package() {
  mkdir -p $pkgdir/opt
  cd $srcdir/
  cp -a gcc-*/ $pkgdir/opt
  rm -f $pkgdir/opt/gcc-*/bin/arm-none-eabi-gdb*
}
