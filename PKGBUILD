# Maintainer: Doug Newgard <scimmia at archlinux dot info>

pkgbase=python-owslib
pkgname=('python-owslib' 'python2-owslib')
pkgver=0.10.3
pkgrel=1
arch=('any')
url='http://geopython.github.io/OWSLib'
license=('BSD')
makedepends=('python-setuptools' 'python2-setuptools')
source=("$pkgbase-$pkgver.tar.gz::https://github.com/geopython/OWSLib/archive/$pkgver.tar.gz")
sha256sums=('3c52356af438e8a3d3e72278ae44271ef1d669abe9e63d1c45c7a9718c99c30d')

package_python-owslib() {
  pkgdesc='Python package for client programming with Open Geospatial Consortium (OGC) web service interface standards, and their related content models'
  depends=('python-dateutil' 'python-pytz' 'python-requests' 'python-pyproj')

  cd OWSLib-$pkgver

  python setup.py install --root="$pkgdir" --optimize=1

  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}

package_python2-owslib() {
  pkgdesc='Python2 package for client programming with Open Geospatial Consortium (OGC) web service interface standards, and their related content models'
  depends=('python2-dateutil' 'python2-pytz' 'python2-requests' 'python2-pyproj')

  cd OWSLib-$pkgver

  python2 setup.py install --root="$pkgdir" --optimize=1

  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
