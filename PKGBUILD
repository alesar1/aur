# Maintainer: Michael Clayfield <me@michaelclayfield.com>

pkgname=icingaweb2-module-incubator
pkgver=0.14.0
pkgrel=2
pkgdesc="Bleeding edge libraries useful for Icinga Web 2 modules"
license=('GPL')
arch=('any')
depends=('icingaweb2')
url="http://www.icinga.org"
source=("https://github.com/Icinga/${pkgname}/archive/v${pkgver}.tar.gz"
  "querybasedtable.patch")
sha256sums=('ab1085cb53f339b9087657939ef48b467177c8c976e65aa8486458783f8febbe'
            '97985fbea5448293ff7cf64c0721a8a4522d84331a4a9bdb2a39dcafd1cd4583')

prepare() {
  cd "$pkgname-$pkgver"
  patch --forward --strip=2 --input="${srcdir}/querybasedtable.patch"
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  mkdir -p "$pkgdir/etc/icingaweb2/modules/incubator"
  mkdir -p "$pkgdir/usr/share/webapps/icingaweb2/modules/incubator"

  cp -r vendor composer.json composer.lock module.info run.php \
    "$pkgdir/usr/share/webapps/icingaweb2/modules/incubator"
}
