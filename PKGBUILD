# Maintainer: Hector Mtz-Seara <hseara__*a*t*__gmail*.*com>

pkgname=python2-scientificpython
pkgver=2.9.1
pkgrel=5
pkgdesc="ScientificPython is a collection of Python modules for scientific computing. It contains support for geometry, mathematical functions, statistics, physical units, IO, visualization, and parallelization."
arch=('i686' 'x86_64')
url="http://dirac.cnrs-orleans.fr/plone/software/scientificpython/"
license=('custom:CeCILL')
depends=('python2-numpy' 'netcdf')
source=(https://sourcesup.renater.fr/frs/download.php/file/3420/ScientificPython-$pkgver.tar.gz)
md5sums=('f27bfb3abda022b73a93cd6ada06338f')

build() {
  cd "$srcdir"/ScientificPython-$pkgver
  python2 setup.py build --numpy
}

package() {
  cd "$srcdir"/ScientificPython-$pkgver
  python2 setup.py install --prefix=/usr --root=${pkgdir}
  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/$pkgname/LICENSE
}

