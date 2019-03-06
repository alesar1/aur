# Maintainer: Tim Visee <tim@visee.me>

pkgname=ffsend-git
pkgver=0.2.20
pkgrel=1
pkgdesc="Easily and securely share files from the command line. A Firefox Send client."
url="https://gitlab.com/timvisee/ffsend"
license=('GPL3')
provides=('ffsend')
conflicts=('ffsend')
source=("ffsend-v$pkgver.tar.gz::$url/-/archive/v$pkgver/ffsend-v$pkgver.tar.gz")
sha256sums=('SKIP')
arch=('x86_64' 'i686')
depends=('ca-certificates')
makedepends=('openssl>=1.0' 'rust>=1.32' 'cargo' 'cmake')
optdepends=('xclip: clipboard support')

build() {
    cd "ffsend-v$pkgver"
    env CARGO_INCREMENTAL=0 cargo build --release
}

package() {
    install -Dm755 "$srcdir/ffsend-v$pkgver/target/release/ffsend" "$pkgdir/usr/bin/ffsend"
}
