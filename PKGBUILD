# Maintainer: jD91mZM2 <me@krake.one>
pkgname="hyperfine"
pkgver=0.3.0
pkgrel=1
pkgdesc="A command-line benchmarking tool"
url="https://github.com/sharkdp/hyperfine"
arch=("x86_64")
license=("APACHE" "MIT")
makedepends=("rust")
optdepends=()
depends=()
source=("https://github.com/sharkdp/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('75a5282d024dafc68537fbf9251e36710b6450ccaaec31a85f9459d3c82e5267')

build() {
    cd "$srcdir/$pkgname-$pkgver"
    cargo build --release
}
package() {
    cd "$srcdir/$pkgname-$pkgver"
    # Apache isn't needed to be installed, but because of the dual license,
    # it makes more sense to show the license like this.
    install -Dm 644 "LICENSE-APACHE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE-APACHE"
    install -Dm 644 "LICENSE-MIT" "$pkgdir/usr/share/licenses/$pkgname/LICENSE-MIT"
    install -Dm 755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
