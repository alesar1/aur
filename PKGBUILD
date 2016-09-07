# Maintainer: Carsten Feuls <archlinux@carstenfeuls.de>

pkgname=python2-vobject
pkgver=0.9.3
pkgrel=2
pkgdesc='Module for parsing and generating vCard and vCalendar files'
url='https://eventable.github.io/vobject/'
license=('Apache')
arch=('any')
depends=('python2-dateutil' 'python2-pyicu')
makedepends=('python2-distribute')
source=("https://github.com/eventable/vobject/archive/${pkgver}.tar.gz")
sha256sums=('cb79bd61cb54e222496278a90d9f6fe6fc0640ab2c4163f3fbc2942372d09d21')

package() {
  cd "vobject-$pkgver"
  python2 setup.py install --root="$pkgdir" --optimize=1
}

# vim:set ts=2 sw=2 et:
