# Maintainer: Tyler Veness <calcmogul at gmail dot com>

pkgname=arm-frc-linux-gnueabi-wpilib-git
pkgver=1175.97a7716
pkgrel=1
pkgdesc="The WPI FIRST Robotics Competition C/C++ library for the arm-frc-linux-gnueabi toolchain"
arch=(i686 x86_64)
provides=('arm-frc-linux-gnueabi-wpilib')
url="https://usfirst.collab.net/sf/projects/wpilib/"
license=('custom=FRC-BSD')
groups=('frc-2015')
depends=('arm-frc-linux-gnueabi-gcc')
makedepends=('git' 'java-environment' 'doxygen')
options=('!strip' 'libtool' 'staticlibs' '!emptydirs')
source=("git+https://usfirst.collab.net/gerrit/allwpilib"
        "git+git://github.com/PeterJohnson/ntcore")
sha512sums=('SKIP'
            'SKIP')

pkgver() {
  cd allwpilib
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

prepare() {
  cd "$srcdir/allwpilib"
  git submodule update --init --recursive
}

build() {
  cd "$srcdir/allwpilib"
  ./gradlew wpilibcZip
}

package() {
  cd "$srcdir/allwpilib/wpilibc/build"
  mkdir -p $pkgdir/usr/arm-frc-linux-gnueabi/share

  yes A | unzip -d $pkgdir/usr/arm-frc-linux-gnueabi wpilibc.zip
  mv $pkgdir/usr/arm-frc-linux-gnueabi/docs $pkgdir/usr/arm-frc-linux-gnueabi/share/doc

  install -Dm644 ../../wpilibj/BSD_License_for_WPILib_code.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
# vim:set ts=2 sw=2 et:
