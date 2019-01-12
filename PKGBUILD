# Maintainer: Tim Visee <timvisee@gmail.com>

pkgname=ffsend
pkgver=0.1.2
pkgrel=1
pkgdesc="Easily and securely share files from the command line. A Firefox Send client."
url="https://gitlab.com/timvisee/ffsend"
license=('GPL3')
source=("$pkgname-v$pkgver.tar.gz::$url/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha256sums=('SKIP')
arch=('x86_64' 'i686')
depends=('ca-certificates')
makedepends=('openssl>=1.0' 'rust' 'cargo' 'cmake')
optdepends=('xclip: clipboard support')

pkgver() {
    cd "$pkgname-v$pkgver"
    echo "$(grep '^version =' Cargo.toml|head -n1|cut -d\" -f2)"
    #.$(git rev-list --count HEAD).g$(git rev-parse --short HEAD)
}

build() {
    cd "$pkgname-v$pkgver"
    env CARGO_INCREMENTAL=0 cargo build --release
}

package() {
    install -Dm755 "$srcdir/$pkgname-v$pkgver/target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
