# Maintainer: Guilhem Saurel <saurel@laas.fr>

pkgorg='loco-3d'
pkgname=('crocoddyl' 'crocoddyl-docs')
pkgver=1.2.0
pkgrel=2
pkgdesc="optimal control library for robot control under contact sequence"
arch=('i686' 'x86_64')
url="https://github.com/$pkgorg/$pkgname"
license=('BSD')
depends=('pinocchio' 'eigenpy' 'example-robot-data')
optdepends=('doxygen' 'python-scipy')
makedepends=('cmake' 'eigen')
source=($url/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz{,.sig}
    "https://patch-diff.githubusercontent.com/raw/${pkgorg}/${pkgname}/pull/766.patch")
sha256sums=('SKIP' 'SKIP' 'ec1e1541ea2125a1fa0eb5aa0087721af9d7bc6eba3d3e585861fc5269bd34c6')
validpgpkeys=('9B1A79065D2F2B806C8A5A1C7D2ACDAF4653CF28')

prepare() {
    cd "$pkgbase-$pkgver"
    patch -p1 -i "$srcdir/766.patch"
}

build() {
    mkdir -p "$pkgbase-$pkgver/build"
    cd "$pkgbase-$pkgver/build"

    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib ..
    make
}

check() {
    cd "$pkgbase-$pkgver/build"
    make test
}

package_crocoddyl() {
    cd "$pkgbase-$pkgver/build"
    make DESTDIR="$pkgdir/" install
    rm -rf $pkgdir/usr/share/doc
    install -Dm644 ../LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_crocoddyl-docs() {
    cd "$pkgbase-$pkgver/build"
    make DESTDIR="$pkgdir/" install
    rm -rf $pkgdir/usr/{lib,include}
    install -Dm644 ../LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
