pkgname=libyang
_pkgver=1.0-r1
pkgver=${_pkgver/-/}
pkgrel=2
pkgdesc='A YANG data modelling language parser and toolkit written (and providing API) in C.'
url="https://github.com/CESNET/$pkgname"
arch=('x86_64')
license=('BSD')
depends=('pcre')
makedepends=('cmake')
conflicts=('libyang-git' 'libyang-devel-git')
_pkgsrc=$pkgname-$_pkgver
source=("$_pkgsrc.tar.gz::https://github.com/CESNET/$pkgname/archive/v$_pkgver.tar.gz")
sha256sums=('6604ed96ab4fd2d574e504f818f10addf177cd5b4e5bebffda3b9a4e8aa1720f')

prepare() {
    mkdir -p $srcdir/build
}

build() {
    cd $srcdir/build
    cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DCMAKE_BUILD_TYPE=Release \
        -DENABLE_LYD_PRIV=ON \
        $srcdir/$_pkgsrc
    make
}

package() {
    cd $srcdir/build
    make DESTDIR="$pkgdir" install
    install -Dm644 $srcdir/$_pkgsrc/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
