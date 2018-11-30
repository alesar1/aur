# Maintainer: Streetwalrus <streetwalrus@codewalr.us>
pkgname=shotgun
pkgver=2.0.1
pkgrel=2
pkgdesc="Minimal X screenshot utility"
arch=('x86_64')
url="https://github.com/neXromancers/$pkgname"
license=('MPL2')
depends=('libx11' 'libxrandr')
makedepends=('cargo')
source=("$pkgname-v$pkgver.tar.gz::https://github.com/neXromancers/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('354e424aee7952531df3ebed7d208e42')

build() {
  cd "${srcdir}/$pkgname-$pkgver"
  cargo build --release
}

package() {
  cd "${srcdir}/$pkgname-$pkgver"
  install -Dm755 target/release/$pkgname ${pkgdir}/usr/bin/$pkgname
}

# vim:set ts=2 sw=2 et:
