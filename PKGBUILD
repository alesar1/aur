# Maintainer: Grzegorz Alibożek <grzegorz.alibozek@gmail.com>
_gitname="weather-widget-2"
pkgname=plasma5-applets-weather-widget-2
pkgver=2.3.2.2
pkgrel=1
pkgdesc="An updated version of the plasma-applet-weather-widget by Kotelnik"
arch=('x86_64')
url="https://github.com/blackadderkate/$_gitname"
license=('GPL')
depends=('plasma-workspace' 'qt5-graphicaleffects' 'qt5-xmlpatterns')
makedepends=('extra-cmake-modules')
source=(${url}/archive/refs/tags/v${pkgver}.tar.gz)
sha256sums=('135c50da4d9d225e0f5b973b10f74c7e8ed9efe44ca5e81c0d57656db4ce2df0')

build() {
    cmake -B ./build -S ./${_gitname}-${pkgver} \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
}

package() {
    make -C ./build DESTDIR="$pkgdir" install
}
