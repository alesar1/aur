# Maintainer: Nick Boughton (nicholasboughton@gmail.com)

pkgname=quasar-cli
pkgver=1.0.7
pkgrel=2
pkgdesc='CLI management tool for development with the Quasar framework'
arch=(i686 x86_64)
url=https://quasar.dev
license=(MIT)
depends=('nodejs>=10.0.0')
makedepends=('npm>=5.0.0')
optdepends=('npm: JS package management support')
conflicts=()
options=(!strip)

package() {
  npm install -g --prefix="$pkgdir"/usr @quasar/cli@$pkgver
  find "$pkgdir"/usr -type d -exec chmod 755 {} +
}
