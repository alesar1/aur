# Maintainer: Christopher A. Williamson <home@chrisaw.com>

pkgname='python-dbus-signature-pyparsing'
_srcname='dbus-signature-pyparsing'
pkgver=0.03
pkgrel=2
pkgdesc='A Parser for a D-Bus Signature'
arch=('any')
license=('apache2')
url='stratis-storage.github.io'
makedepends=('git' 'python-pylint' 'python-tox')
provides=("${pkgname}")
conflicts=("${pkgname}")
source=(
  "${_srcname}-${pkgver}.tar.gz::https://github.com/stratis-storage/${_srcname}/archive/v${pkgver}.tar.gz"
)
sha256sums=(
  '263a41161304f239213c0e1234f4afdbe28b7103e60129f0448ae14fb0e9c52b'
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
