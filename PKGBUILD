# Maintainer: Jose Riha <jose1711 gmail com>

pkgname=sqlcrush-git
_pkgname=sqlcrush
pkgver=r24.b5f6868
pkgrel=1
pkgdesc="console based database editor"
url="https://github.com/coffeeandscripts/sqlcrush"
depends=('python')
makedepends=('git')
conflicts=('sqlcrush')
license=('GPL')
arch=('any')
source=("${pkgname}"::'git+https://github.com/coffeeandscripts/sqlcrush.git')
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd ${srcdir}/${pkgname}
  python setup.py install --root=${pkgdir}
}

# vim:set ts=2 sw=2 et:
