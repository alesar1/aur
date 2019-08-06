# Maintainer: Guilhem Saurel <saurel@laas.fr>

pkgorg=coin-or
_pkgname=CppAD
pkgname=cppad
pkgver=20190200.3
pkgrel=1
pkgdesc="A C++ Algorithmic Differentiation Package"
arch=('any')
url="https://github.com/$pkgorg/$_pkgname"
license=('GPL2')
depends=()
optdepends=()
makedepends=('cmake')
source=("$url/archive/$pkgver.tar.gz")
sha256sums=('5e074ddfe1e022347c32dddfdf72f2d14bff25ab29448c65c15c5ed1b459dbcc')

build() {
    cd "$_pkgname-$pkgver"
    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr .
    make
}

package() {
    cd "$_pkgname-$pkgver"
    make DESTDIR="$pkgdir/" install
}
