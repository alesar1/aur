# Maintainer: Thomas Gläßle <t_glaessle@gmx.de>

pkgname=setcapslock
pkgver=0.0.1
pkgrel=1
pkgdesc="Small utility to set the caps lock state."
arch=('i686' 'x86_64')
url="https://github.com/coldfix/setcapslock"
license=('custom:UNLICENSE')
depends=('libx11')
source=("$url/archive/${pkgver}.tar.gz")
md5sums=('810a19eb8b4babc3833bc6877b3bebd4')

build() {
    cd "$srcdir/$pkgname-$pkgver"
    make
}

package() {
    cd "$srcdir/$pkgname-$pkgver"
    install -D -m 644 UNLICENSE "$pkgdir/usr/share/licenses/$pkgname/UNLICENSE"
    install -D -m 755 $pkgname "$pkgdir/usr/bin/$pkgname"
}
