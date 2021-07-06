# Maintainer: suliman altassan <suliman.p2019@gmail.com>

pkgname=alif
pkgver=3.0.32
pkgrel=0
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
    git reset 95baa639c47522426521f22d611d649106a9d695
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
