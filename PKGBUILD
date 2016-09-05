# Maintainer: Emanuele 'Lele aka eldios' Calo' <lele@sshadm.in>
# Contributor: Emanuele 'Lele aka eldios' Calo' <lele@sshadm.in>

pkgname='python-ampy-git'
pkgver=0
pkgrel=3
pkgdesc="ESP8266 FS management tool provided by Adafruit"
url="https://github.com/adafruit/ampy"
arch=('any')
license=('GPL')
depends=('python' 'python-click')
makedepends=('python-setuptools')
provides=('python-ampy','ampy')
source=("${pkgname}::https://github.com/adafruit/ampy")
sha512sums=('SKIP')

package() {
  cd "${srcdir}/${pkgname}"
  python setup.py install --root="$pkgdir/"
}

# vim:set ts=2 sw=2 et:

