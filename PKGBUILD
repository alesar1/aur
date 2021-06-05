# Maintainer: Pig Monkey <pm@pig-monkey.com>

pkgname=firewarden
pkgver=1.1.3
pkgrel=1
pkgdesc="Open a file via the specified application within a private Firejail sandbox."
arch=("any")
depends=("firejail>=0.9.56")
license=("GPL2")
url="https://github.com/pigmonkey/firewarden"
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/pigmonkey/${pkgname}/archive/v${pkgver}.tar.gz)
md5sums=('40385e3d3aabfe3649b47da3e782d44a')

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 firewarden "${pkgdir}/usr/bin/firewarden"
}
