# Maintainer: Christopher A. Williamson <home@chrisaw.com>

pkgname='python-dbus-client-gen'
_srcname='dbus-python-client-gen'
pkgver=0.6
pkgrel=6
pkgdesc='A Python Library for Generating dbus-python Client Code'
arch=('any')
license=('MPL-2.0')
url='stratis-storage.github.io'
depends=('python-dbus')
makedepends=('git' 'python-pylint' 'python-tox' 'yapf')
provides=("${pkgname}")
conflicts=("${pkgname}")
source=(
  "${_srcname}-${pkgver}.tar.gz::https://github.com/stratis-storage/${_srcname}/archive/v${pkgver}.tar.gz"
)
sha256sums=(
  '6fa334ce36c220f018f89cefa560b43ae7ec36a02bba3ab8bec2e4a4103e35e0'
)

check() {
  cd "${_srcname}-${pkgver}"

  tox
}

package() {
  cd "${_srcname}-${pkgver}"

  install -d -m 755 "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}"

  python setup.py install --root="${pkgdir}" --optimize=1
}

# vim: ts=2 sw=2 et:
