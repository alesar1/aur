# Maintainer: Martchus <martchus@gmx.net>
pkgname=tagparser
pkgver=2.0.1
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="C++ library for reading and writing MP4 (iTunes), ID3, Vorbis and Matroska tags."
license=('GPL')
depends=('c++utilities')
makedepends=('qt5-base')
url="https://github.com/Martchus/tagparser"
source=("tagparser-${pkgver}.tar.gz::https://github.com/Martchus/tagparser/archive/v${pkgver}.tar.gz")
_reponame=tagparser
sha256sums=('8a3f5000ca0c97d9bd733fd6dbada6054f88ef5aced9937799f6b2e0616f1868')

build() {
    cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
    INSTALL_ROOT=$pkgdir/usr/ qmake-qt5 "$pkgname.pro"
    make -j 4
}

package() {
    cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
    make install
}
