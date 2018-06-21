# Maintainer: twa022 <twa022 at gmail dot com>

pkgname=radiotray-ng
pkgver=0.2.2
pkgrel=2
pkgdesc="An Internet radio player for Linux"
arch=('i686' 'x86_64')
url="https://github.com/ebruck/radiotray-ng"
license=('GPL')
depends=('boost-libs' 'curl' 'gstreamer' 'jsoncpp' 'libappindicator-gtk3'
         'libbsd' 'libnotify' 'libxdg-basedir' 'glibmm' 'wxgtk3')
makedepends=('cmake' 'boost' 'lsb-release')
optdepends=('python2-lxml: Convert radiotray bookmarks to radiotray-ng format')
options=('!libtool')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/ebruck/radiotray-ng/archive/v${pkgver}.tar.gz")
sha256sums=('85de0228b7927add4c143a5bb757ab026041921d640dc0b9b0cdfef519470d88')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  sed -i 's:-Werror::' CMakeLists.txt
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  [ -d build ] && rm -r build
  mkdir build
  cd build

  cmake .. -DCMAKE_BUILD_TYPE=Release \
    -DwxWidgets_CONFIG_EXECUTABLE=/usr/bin/wx-config-gtk3 \
    -DBUILD_TESTS=no
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  make DESTDIR="$pkgdir" install
}
