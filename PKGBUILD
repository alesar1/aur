# Contributor: Jonas Lähnemann <jonas at pdi-berlin dot de>
# Maintainer: Jonas Lähnemann <jonas at pdi-berlin dot de>
pkgname=python-lumispy
pkgshort=lumispy
pkgver=0.2
pkgrel=1
pkgdesc="Luminescence spectroscopy data analysis extension for HyperSpy"
arch=('any')
url="http://lumispy.org"
license=('GPL3')

depends=('python'
         'python-scipy'
         'python-numpy>=1.17.0'
         'python-hyperspy>=1.7.0'
         )

makedepends=('python-setuptools' )

provides=('lumispy')

source=(https://github.com/lumispy/lumispy/archive/v$pkgver.tar.gz)

package() {
  cd "$srcdir/$pkgshort-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

md5sums=('b818f080e5a2a006582c37eeba89579c')
