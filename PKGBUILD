# Original Maintainer: James Duley <jagduley gmail>
# Previous Maintainer: 2bluesc <2bluesc gmail.com>
# Previous Maintainer: Vadzim Dambrouski <pftbest gmail.com>
# Maintainer: Lorenzo Cappelletti <lorenzo.cappelletti gmail.com>
_pkgver=10-2020-q4-major
_gccver=102
pkgname=gcc-arm-none-eabi-bin-$_gccver
pkgver=${_pkgver//-/_}
pkgrel=2
pkgdesc="GNU Tools ARM Embedded Processors (binary distribution, includes newlib, does NOT include GDB)"
arch=('x86_64')
depends=('glibc')
optdepends=(
	  'arm-none-eabi-gdb: GNU Debugger for ARM EABI'
    )
provides=("gcc-arm-none-eabi" "gcc-arm-none-eabi-$_gccver"
	  "arm-none-eabi-gcc" "arm-none-eabi-gcc-$_gccver"
	  "arm-none-eabi-binutils" "arm-none-eabi-binutils-$_gccver"
	  "arm-none-eabi-newlib" "arm-none-eabi-newlib-$_gccver"
    )
url="https://developer.arm.com/open-source/gnu-toolchain/gnu-rm"
source=("https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/10-2020q4/gcc-arm-none-eabi-10-2020-q4-major-x86_64-linux.tar.bz2")
license=('custom')
options=(!strip staticlibs)
sha256sums=('21134caa478bbf5352e239fbc6e2da3038f8d2207e089efc96c3b55f1edcd618')
md5sums=('8312c4c91799885f222f663fc81f9a31')

package() {
  mkdir -p $pkgdir/opt
  cd $srcdir/
  cp -a gcc-arm-none-eabi-$_pkgver/ $pkgdir/opt
  rm $pkgdir/opt/gcc-arm-none-eabi-$_pkgver/bin/arm-none-eabi-gdb*
  rm $pkgdir/opt/gcc-arm-none-eabi-$_pkgver/lib/libcc1.so*
}
