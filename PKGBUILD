# Maintainer: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: Felix Yan <felixonmars@archlinux>

_pkgname=python-gammu
pkgname=python2-gammu
pkgver=2.12
pkgrel=2
pkgdesc="Python bindings for Gammu library"
arch=('x86_64')
url="https://wammu.eu/python-gammu/"
license=('GPL')
makedepends=('python2-setuptools' 'gammu')
checkdepends=('libdbi-drivers')
source=(https://dl.cihar.com/python-gammu/python-gammu-$pkgver.tar.bz2)
sha256sums=('efca72146ef5a5f9c7e7763374f28a3f15c6e80a0b7f07ce4fda52863b0cd4d2')

build() {
  cd "${srcdir}"/python-gammu-$pkgver
  python2 setup.py build
}

check() {
  # tests can be flaky on slower hardware due to timing
  cd "${srcdir}"/python-gammu-$pkgver
  python2 setup.py test
}

package() {
  depends=('python2' 'gammu')

  cd python-gammu-$pkgver
  python2 setup.py install --root="${pkgdir}" --optimize=1
}
