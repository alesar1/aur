# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=bdsup2subpp-git
pkgver=1.0.3.13.g38dddf9
pkgrel=1
pkgdesc="Subtitle conversion tool for image based stream formats with scaling capabilities and some other nice features. (GIT version)"
arch=('x86_64')
license=('Apache')
url='http://forum.doom9.org/showthread.php?t=167051'
depends=('qt5-base')
makedepends=('git')
provides=('bdsup2subpp')
conflicts=('bdsup2subpp')
source=('bdsup2subpp::git+https://github.com/amichaeltm/BDSup2SubPlusPlus.git')
sha256sums=('SKIP')

pkgver() {
  cd bdsup2subpp
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build

  cd build
  qmake-qt5 "${srcdir}/bdsup2subpp/src"
}

build() {
  make -C build
}

package() {
  install -Dm755 build/bdsup2sub++ "${pkgdir}/usr/bin/bdsup2subpp"

  install -Dm644 bdsup2subpp/bundle/linux/bdsup2sub++.desktop "${pkgdir}/usr/share/applications/bdsup2subpp.desktop"
  install -Dm644 bdsup2subpp/bundle/linux/bdsup2subpp.png "${pkgdir}/usr/share/pixmaps/bdsup2subpp.png"
}
