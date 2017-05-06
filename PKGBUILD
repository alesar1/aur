# Maintainer: Aurélien Bertron <aurelienbertron at gmail dot com>
pkgname=plasma5-runners-duckduckgo-bangs
pkgver=1.0.0
pkgrel=1
pkgdesc="A little krunner plugin (Plasma 5) to execute DuckDuckGo bangs in default browser"
arch=('any')
url="https://framagit.org/Nautigsam/krunner-duckduckgo-bangs"
license=('GPL')
depends=('krunner' 'qt5-base' 'ki18n')
makedepends=('cmake' 'extra-cmake-modules')
source=("${pkgname}-${pkgver}.tar.gz::https://framagit.org/Nautigsam/krunner-duckduckgo-bangs/repository/archive.tar.gz?ref=v${pkgver}")
noextract=("${source[@]%%::*}")

prepare() {
  mkdir -p build
  mkdir -p ${pkgname}-${pkgver}
  tar xzf ${noextract} -C ${pkgname}-${pkgver} --strip-components 1
}

build() {
  cd build
  cmake ../${pkgname}-${pkgver} -DCMAKE_INSTALL_PREFIX=`kf5-config --prefix` -DQT_PLUGIN_INSTALL_DIR=`kf5-config --qt-plugins` -DCMAKE_BUILD_TYPE=Release
  make
}

package() {
  cd build
  make install DESTDIR="${pkgdir}"
}

md5sums=('3402919b55722e4709aa3c17742baaa3')
