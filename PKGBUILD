# Maintainer: Ariel AxionL <axionl@aosc.io>
pkgname=gcsf
pkgver=0.1.21
pkgrel=1
pkgdesc="a FUSE file system based on Google Drive (Written by Rust)"
arch=('x86_64')
depends=('fuse2' 'openssl')
makedepends=('git' 'rust')
optdepends=("ranger: A simple, vim-like file manager")
conflicts=("gcsf")
provides=("gcsf")
url="https://github.com/harababurel/gcsf"
license=('MIT')
install="gcsf.install"
source=("$pkgname-$pkgver.tar.gz::https://github.com/harababurel/gcsf/archive/$pkgver.tar.gz"
        "gcsf.install")
sha256sums=('fe2b5c1e0777f489ab793a3b772f1b6f8105ae7a104bf29ba3f5986a5b7f2dc5'
            '379c996c9cf50bfffdd381d1f9f99695b1af5bab17b0ccd14006999d6e0351c1')
build() {
    cd $pkgname-$pkgver
    cargo fmt --all -- --check
    cargo build --release
}

package() {
    cd $srcdir/$pkgname-$pkgver
    # License
    install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
    # Binaries
    install -Dm755 target/release/gcsf $pkgdir/usr/bin/gcsf
}
# vim set: ts=4 sw=4 et
