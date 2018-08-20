# Maintainer: Łukasz Pożarlik <lpozarlik@gmail.com>

pkgname=('python-timezonefinder' 'python2-timezonefinder')
pkgdesc="Fast and lightweight project for looking up the timezone for a given lat/lng"
pkgver=3.0.0
pkgrel=1
url="https://github.com/MrMinimal64/timezonefinder"
license=('MIT')
arch=('any')
makedepends=('python' 
  'python-setuptools' 
  'python2' 
  'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/t/timezonefinder/timezonefinder-${pkgver}.tar.gz")
sha256sums=('90f19dc51752e51b5e23742b5cb40763844855096f017a07c361eed1377777dd')

build() {
  cp -r ${srcdir}/timezonefinder-${pkgver} ${srcdir}/timezonefinder-${pkgver}-py2

  cd ${srcdir}/timezonefinder-${pkgver}
  python setup.py build

  cd ${srcdir}/timezonefinder-${pkgver}-py2
  python2 setup.py build
}

package_python-timezonefinder() {
  depends=('python-numpy')
  cd ${srcdir}/timezonefinder-${pkgver}
  python setup.py install --prefix=/usr --root=${pkgdir}
  install -D --mode 644 --target-directory "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}

package_python2-timezonefinder() {
  depends=('python2-numpy')
  cd ${srcdir}/timezonefinder-${pkgver}-py2
  python2 setup.py install --prefix=/usr --root=${pkgdir}
  install -D --mode 644 --target-directory "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}

# vim:set ts=2 sw=2 et:

