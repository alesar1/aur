# Maintainer: Faustino Aguilar <faustinoaq.github.io>
pkgname=amber
pkgver=0.6.4
pkgrel=1
pkgdesc="An open source efficient, cohesive and fun web framework for the Crystal language"
arch=(i686 x86_64)
url='https://github.com/amberframework/amber'
license=(MIT)
depends=('crystal' 'shards' 'sqlite')
source=("https://github.com/amberframework/amber/archive/v$pkgver.tar.gz")
sha256sums=('4b7489d16afc26e2847d4dc74dad54d2f5dc20d1a148a5e0da6bea991bcac68f')

build() {
  cd "amber-$pkgver"
  shards --production
  make build
}

package() {
  cd "amber-$pkgver"
  install -Dm755 bin/amber "$pkgdir/usr/bin/amber"
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/amber/LICENSE
}
