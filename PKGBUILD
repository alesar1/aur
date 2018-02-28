# Maintainer:
# Contributor: Vlad M. <vlad@archlinux.net>
# Contributor: Ankit R Gadiya <arch@argp.in>

pkgname=alert-after
pkgver=1.4.3
pkgrel=1
pkgdesc="Get a desktop notification after a command finishes executing"
arch=('i686' 'x86_64')
url="https://github.com/frewsxcv/alert-after"
license=('MIT' 'Apache')
depends=('dbus')
makedepends=('cargo')
source=("$url/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('e0d80e1b4c9cb78f4759a78495f197fa3865eacf9658653ec14ddb010e117b3d')

build() {
  cd "${pkgname}-${pkgver}"
  cargo build --release
}

package() {
  install -Dm755 "${pkgname}-${pkgver}/target/release/aa" "$pkgdir/usr/bin/aa"
}
