# Maintainer: Sergey A. <murlakatamenka@disroot.org>

pkgname=rust-analyzer-bin
pkgver=20200420
_pkgver='2020-04-20'
pkgrel=1
pkgdesc="An experimental Rust compiler front-end for IDEs. Binary build."
arch=('x86_64')
url="https://github.com/rust-analyzer/rust-analyzer"
license=('MIT' 'Apache')
provides=('rust-analyzer')
conflicts=('rust-analyzer' 'rust-analyzer-git' 'rust-analyzer-vscode-git')
source=("rust-analyzer-$_pkgver::$url/releases/download/$_pkgver/rust-analyzer-linux")
md5sums=('b0ae9fe5ce7c6c673380faa512ef1751')

pkgver() {
    echo ${_pkgver//-}
}

package() {
    cd "$srcdir"
    install -Dm 755 "rust-analyzer-$_pkgver" "$pkgdir/usr/bin/rust-analyzer"
}
