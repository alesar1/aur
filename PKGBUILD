# Maintainer: Vlad Zahorodnii <vladzzag@gmail.com>
pkgname=plasma5-wallpapers-dynamic
pkgver=3.3.0
pkgrel=1
pkgdesc="Dynamic wallpaper plugin for KDE Plasma"
arch=(x86_64)
url="https://github.com/zzag/plasma5-wallpapers-dynamic"
license=('GPL')
depends=(libexif libheif plasma-framework qt5-base qt5-declarative qt5-location)
makedepends=(cmake extra-cmake-modules)
optdepends=('geoclue: automatic location detection support')
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/zzag/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('7a2abc0d977a4bb95660a13ed57d1fec4f82fa16e2e8eeb923c95483366d3b38')

build() {
    cmake -B build -S $pkgname-$pkgver
    cmake --build build
}

package() {
    DESTDIR="$pkgdir" cmake --install build
}
