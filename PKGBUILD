# Maintainer: Guilhem Saurel <saurel@laas.fr>

pkgorg='loco-3d'
pkgname=('crocoddyl' 'crocoddyl-docs')
pkgver=1.1.0
pkgrel=1
pkgdesc="optimal control library for robot control under contact sequence"
arch=('i686' 'x86_64')
url="https://github.com/$pkgorg/$pkgname"
license=('BSD')
depends=('pinocchio' 'eigenpy' 'example-robot-data')
optdepends=('doxygen' 'multicontact-api' 'python-scipy')
makedepends=('cmake' 'eigen')
source=($url/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz{,.sig} fix-link.patch)
sha256sums=('SKIP' 'SKIP' '283176ddd836f6b2b4784cec4c3b8c2ab89d01094be2d417e72ccad092bf81aa')
validpgpkeys=('9B1A79065D2F2B806C8A5A1C7D2ACDAF4653CF28')

prepare() {
    # patch missing links
    cd "$pkgbase-$pkgver"
    patch -p1 -i $srcdir/fix-link.patch
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
