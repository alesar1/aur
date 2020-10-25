# Initial Contribution: Benjamin Chretien <chretien at lirmm dot fr>
# Maintainer: Guilhem Saurel <gsaurel at laas dot fr>

pkgname=urdfdom-headers
_pkgname=urdfdom_headers
pkgver=1.0.5
pkgrel=1
pkgdesc="The URDF (U-Robot Description Format) headers provides core data structure headers for URDF."
arch=('any')
url="https://github.com/ros/$_pkgname"
license=('BSD')
depends=()
makedepends=('cmake')
source=("$pkgname-$pkgver.tar.gz::https://github.com/ros/$_pkgname/archive/$pkgver.tar.gz")
sha256sums=('76a68657c38e54bb45bddc4bd7d823a3b04edcd08064a56d8e7d46b9912035ac')

build() {
    cd "$_pkgname-$pkgver"
    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib .
    make
}

package() {
    cd "$_pkgname-$pkgver"
    make DESTDIR="$pkgdir/" install

    # install licence
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
