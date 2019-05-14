# Maintainer: Nils Czernia <nils[at]czserver.de>

pkgname=python-bme280
_pkgname=bme280
pkgver=0.5
pkgrel=1
pkgdesc="Python Driver for the BME280 Temperature/Pressure/Humidity Sensor from Bosch "
url="https://github.com/kbrownlees/bme280"
arch=("any")
license=("custom")
depends=("python")
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/kbrownlees/bme280/archive/v${pkgver}.tar.gz)
sha512sums=("4dbfc2571b1079e7d5d1c29e80540f4fba46b9497de4953c67636ff75b20d3eebe0fb29244285e2e0f1e6f42c5f798d1a3105523cbeebcd61c7af9b5493032fc")

build() {
  cd ${_pkgname}-${pkgver}
  python setup.py build
}

package() {
  cd ${_pkgname}-${pkgver}
  python setup.py install --skip-build -O1 --root="${pkgdir}"

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: ts=2 sw=2 et:
