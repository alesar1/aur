# Maintainer: Vlad Zahorodnii <vladzzag@gmail.com>
pkgname=plasma5-wallpapers-dynamic
pkgver=2.6.1
pkgrel=1
pkgdesc="Dynamic wallpaper plugin for KDE Plasma"
arch=(x86_64)
url="https://github.com/zzag/plasma5-wallpapers-dynamic"
license=('GPL')
depends=(plasma-framework qt5-base qt5-declarative qt5-location)
makedepends=(cmake extra-cmake-modules)
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/zzag/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('620dce94dc8cdfa5cdd7f743d7c0ed807b036a22285a69d4dd228e70ffff6067')

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../$pkgname-$pkgver \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DBUILD_TESTING=OFF
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir" install

    cd "$srcdir/$pkgname-$pkgver"
    install -Dm644 metadata.json.solar.sample "$pkgdir/usr/share/doc/${pkgname}/metadata.json.solar.sample"
    install -Dm644 metadata.json.timed.sample "$pkgdir/usr/share/doc/${pkgname}/metadata.json.timed.sample"
}
