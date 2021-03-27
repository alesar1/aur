# Maintainer: suliman altassan <suliman.p2019@gmail.com>

pkgname=alif
pkgver=3.0.17
pkgrel=3
pkgdesc="The Alif Arabic Programming Language - لغة البرمجة العربية ألف"
arch=('x86_64')
url="https://www.aliflang.org/"
license=('GPL3')
depends=('boost')
optdepends=('webui: to use web browsers as UI')
source=("$pkgname-$pkgver"::"git+https://github.com/alifcommunity/compiler.git")
md5sums=('SKIP')

prepare() {
    cd $srcdir/$pkgname-$pkgver
    git reset 3f390406c3f7e018f1af968358bd57760c71fb7b
}

build() {
    cd $srcdir/$pkgname-$pkgver
    cmake . . -DCMAKE_INSTALL_PREFIX=$pkgdir/usr/local
    make
}

package() {
    cd $srcdir/$pkgname-$pkgver
    make install
}
