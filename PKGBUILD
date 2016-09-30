# Maintainer: Yamakaky <yamakaky@yamaworld.fr>
pkgname=rust-src
pkgver=1.12.0
pkgrel=1
pkgdesc="Rust source files"
arch=('any')
url="http://rust-lang.org"
license=('MIT' 'Apache')
options=(!strip)
source=("https://static.rust-lang.org/dist/rustc-$pkgver-src.tar.gz")
sha256sums=('ac5907d6fa96c19bd5901d8d99383fb8755127571ead3d4070cce9c1fb5f337a')

prepare() {
    cd "rustc-$pkgver"
    find . -type d -exec chmod 755 {} \;
    find . -type f -exec chmod 644 {} \;
}

package() {
    cd "rustc-$pkgver"
    mkdir -p "$pkgdir/usr/src/rust/"
    cp -r * "$pkgdir/usr/src/rust/"
}
