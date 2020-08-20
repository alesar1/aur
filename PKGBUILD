# Maintainer: ny-a <nyaarch64@gmail..com>
# Contributor: Jean Lucas <jean@4ray.co>
# Contributor: Sam Whited <sam@samwhited.com>

pkgname=stripe-cli
pkgver=1.5.0
pkgrel=2
pkgdesc='CLI for Stripe'
arch=(x86_64)
url=https://stripe.com/docs/stripe-cli
license=(Apache)
depends=(glibc)
makedepends=(go)
source=(
  $pkgname-$pkgver.tar.gz::https://github.com/stripe/stripe-cli/archive/v$pkgver.tar.gz
  reproducible-image-flags.patch
  467.patch
)
sha512sums=('fd41054a4047dff23d16243ffe4b49b774214d37827490f774c7309d8a487a7018c5aa708ff7f36b5d572a1b3ecd1c7538fdd9a982a403da041c8843e9c70c23'
            '4f5ff8662f5e4bce1ded88a055e652c41dd6492cda5aee74795752abf0e97cc269ec1fef84df2247f62809f0c8cc1a88dd12104e07090cc224bbc5ad46b33f37'
            '74561fa2d5e9a6b421ced78b04d426a8e54c7a254b3bde3c61e9c7b67c2f40c298b83211f0fb17ad576ee8cecc67ea2d3138c7178a711a7feb863907a9e4a256')

prepare() {
  cd $pkgname-$pkgver

  # Add reproducible image flags
  patch -Np0 < ../reproducible-image-flags.patch
  # Patch tests for Go 1.15
  patch -Np1 < ../467.patch

  make setup
}

build() {
  cd $pkgname-$pkgver
  make build
}

check() {
  cd $pkgname-$pkgver
  make test
}

package() {
  cd $pkgname-$pkgver
  install -D stripe -t "$pkgdir"/usr/bin
  install -Dm 644 README.md -t "$pkgdir"/usr/share/doc/$pkgname
  cp -a docs "$pkgdir"/usr/share/doc/$pkgname
}
