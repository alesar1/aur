# Maintainer: Sanpi <sanpi+aur@homecomputing.fr>
pkgname=cargo-spellcheck
pkgver=0.1.4
pkgrel=1
pkgdesc="Checks all your documentation for spelling mistakes"
url="https://github.com/drahnr/$pkgname"
arch=("x86_64")
license=("MIT" "Apache")
depends=("cargo" "hunspell")
source=("$pkgver.tar.gz::https://crates.io/api/v1/crates/$pkgname/$pkgver/download")

build()
{
    cd "$srcdir/$pkgname-$pkgver"

    cargo build --release
}

package()
{
    cd "$srcdir/$pkgname-$pkgver"

    install -Dm 755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
sha256sums=('115afdc87b3e63badfaba20a030ac0b5a1712900542184b5b9ca77fe0faf5607')
