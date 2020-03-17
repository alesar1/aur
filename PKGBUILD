# Maintainer: Sergey A. <murlakatamenka@disroot.org>

pkgname=zenith
pkgver=0.7.5
pkgrel=1
pkgdesc="Terminal system monitor with histograms, written in Rust"
arch=('x86_64')
url="https://github.com/bvaisvil/zenith"
license=('MIT')
makedepends=('cargo')
provides=('zenith')
conflicts=('zenith-bin')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
md5sums=('40ce27b6c484e9029522b41b5b7452df')

build() {
    cd "$pkgname-$pkgver"
    cargo build --release --locked
}

package() {
    cd "$pkgname-$pkgver"

    install -Dm 755 "target/release/zenith"  "$pkgdir/usr/bin/zenith"

    install -Dm 644 "LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}
