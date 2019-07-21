# Maintainer: mrxx <mrxx at cyberhome dot at>

pkgname=securefs
pkgver=0.8.3
pkgrel=2
pkgdesc="A better transparent encryption filesystem"
arch=('i686' 'x86_64')
url=https://github.com/netheril96/securefs
license=('MIT')
depends=('fuse' 'gcc-libs')
makedepends=('cmake')
source=("https://github.com/netheril96/securefs/archive/${pkgver}.tar.gz")
sha1sums=('b8c645d9ce210ed729be572c0b4b71bead05de76')

build() {
    cd "$pkgname-${pkgver}"
    mkdir -p build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr -Dlibdir=/usr/lib ..
    make
}

package() {
    cd "$pkgname-${pkgver}"
    install -Dm755 build/securefs "$pkgdir"/usr/bin/securefs
    install -Dm755 build/securefs_test "$pkgdir"/usr/bin/securefs_test
    install -Dm644 LICENSE.md ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    install -Dm644 README.md ${pkgdir}/usr/share/doc/${pkgname}/README
}
