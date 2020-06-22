# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=lite
pkgver=1.09
pkgrel=1
pkgdesc='A lightweight text editor written in Lua'
arch=('any')
url="https://github.com/rxi/$pkgname"
license=('MIT')
makedepends=('sdl2')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
        "$pkgname-path-fix.patch")
sha256sums=('1fea6af8829220fef884d32c01b881f823051a7ae17b2cd3e01c2d2499e6c6c9'
            'a874de709bf2201816f96807aa50f6b1a15a19aa7989084f01422dd5fe488055')

prepare() {
    cd "$pkgname-$pkgver"
    patch -p1 < "$srcdir/$pkgname-path-fix.patch"
}

build() {
    cd "$pkgname-$pkgver"
    ./build.sh
}

package() {
    cd "$pkgname-$pkgver"
    install -Dm755 -t "$pkgdir/usr/bin/" $pkgname
    install -d "$pkgdir/usr/share/$pkgname"
    cp -a data/* "$pkgdir/usr/share/$pkgname/"
}
