# Maintainer: Prabir Shrestha <mail@prabir.me>
pkgname=rblog-bin
pkgver=0.202.0
pkgrel=1
pkgdesc="Blog app"
url="https://github.com/prabirshrestha/rblog"
license=("MIT")
arch=("x86_64")
provides=("rblog-bin")
conflicts=("rblog")
source=("https://github.com/prabirshrestha/rblog/releases/download/v0.202.0/rblog-v0.202.0-x86_64-unknown-linux-musl.tar.gz")
sha256sums=("4447ea61a0a065f2095b90855abd8e3f20785f402b98435cc4a02280f01d8ff1")

package() {
    install -Dm755 "rblog-v0.202.0-x86_64-unknown-linux-musl/rblog" "$pkgdir/usr/bin/rblog"
}
