# Maintainer: novenary <streetwalkermc@gmail.com>
# Maintainer: Daniel M. Capella <polyzen@archlinux.org>

pkgname=python-soco
pkgver=0.22.6
pkgrel=1
pkgdesc="A simple Python class that allows you to programmatically control Sonos speakers"
arch=('any')
url="https://github.com/SoCo/SoCo"
license=('MIT')
depends=('python' 'python-requests' 'python-xmltodict' 'python-ifaddr')
makedepends=('python-setuptools')
source=("SoCo-$pkgver.tar.gz::https://github.com/SoCo/SoCo/archive/v$pkgver.tar.gz")
sha256sums=('a01b7d55b17837f365e35647a1ec3313bfb03953d663958a6d1038d2cc678656')

build() {
  cd SoCo-$pkgver
  python setup.py build
}


package() {
  cd SoCo-$pkgver
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dm644 -t "$pkgdir"/usr/share/licenses/$pkgname LICENSE.rst
}

# vim:set ts=2 sw=2 et:
