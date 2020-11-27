# Maintainer: Emil Sayahi <limesayahi@gmail.com>
pkgname=dokkoo-bin
pkgver=0.2.0
pkgrel=1
pkgdesc="Mokk (Macro Output Key Kit) implementation written in Rust."
url="https://github.com/MadeByEmil/dokkoo"
license=("AGPL-3.0-or-later")
arch=("x86_64")
provides=("dokkoo")
options=("strip")
source=("https://github.com/MadeByEmil/dokkoo/releases/download/v$pkgver/dokkoo-$pkgver-x86_64.tar.gz")
sha256sums=("2205bfe766677617546f03e944f37e21015d74b0717f2b48a1ae5a6fc3bd4818")

package() {
    install -Dm755 dokkoo -t "$pkgdir/usr/bin/"
}
