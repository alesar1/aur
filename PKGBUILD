# Maintainer: Marcel H Rød <marcelroed@gmail.com>
pkgname=kattis
pkgver=0.2.1
pkgrel=1
pkgdesc="Competitive programming checker for open.kattis.com"
url="https://github.com/marcelroed/"
license=("MIT")
arch=("x86_64")
provides=("kattis")
options=("strip")
source=("https://github.com/marcelroed/kattis-rs/releases/download/v$pkgver/kattis-rs-$pkgver-x86_64.tar.gz")
sha256sums=("b2c67554cb3589eb374e49bcbc5efb371b2e7a9fe9a95b30d7c0a915c663bdde")

package() {
    install -Dm755 kattis-rs -t "$pkgdir/usr/bin/kattis"
}
