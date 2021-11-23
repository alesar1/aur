# Maintainer: uint2048_t

pkgname=cannonball
pkgver=0.34
pkgrel=1
pkgdesc='CannonBall: The Enhanced OutRun Engine'
arch=('i686' 'x86_64')
url="https://reassembler.blogspot.com"
license=('custom')
depends=('sdl' 'gcc-libs' 'sh')
makedepends=('cmake' 'boost')
install=$pkgname.install
source=($pkgname-$pkgver.tar.gz::"https://github.com/djyt/cannonball/archive/v$pkgver.tar.gz"
       "$pkgname.desktop"
       "$pkgname.sh")
sha256sums=('e2cf8e21619b183a9fd835ae34ce65fb3d014c2fea37723fc8ba05681ed317ce'
            '3ebe54dc6840439dcf4ed4fdc561e0bcb2f6089d57dc8559a0d9cead8b4e0639'
            '582b6dd0ec05ba132ac0084002d6181ce80c7bc550ed57057d884e312009c196')

prepare() {
  cd $pkgname-$pkgver

  rm -rf build
  mkdir build
}

build() {
  cd $pkgname-$pkgver/build

  cmake ../cmake -Wno-dev -DTARGET=linux.cmake -B .
  make
}

package() {
  cd $pkgname-$pkgver

  # xdg desktop, launcher, binary
  install -Dm755 ../$pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
  install -Dm755 ../$pkgname.sh "$pkgdir"/usr/bin/$pkgname
  install -Dm755 build/$pkgname "$pkgdir"/usr/lib/$pkgname/$pkgname
  
  # configuration file
  install -Dm644 build/config.xml "$pkgdir"/usr/share/$pkgname/config.xml
  
  # doc + license
  install -Dm644 roms/roms.txt "$pkgdir"/usr/share/doc/$pkgname/roms.txt
  install -Dm644 docs/license.txt "$pkgdir"/usr/share/licenses/$pkgname/license.txt

  # icon
  install -Dm644 res/icon.png "$pkgdir"/usr/share/icons/hicolor/256x256/apps/$pkgname.png
}
