# Contributor: Ishan Arora <ishanarora@gmail.com>

pkbase=python-oct2py
pkgname=('python-oct2py' 'python2-oct2py')
pkgver=3.6.5
pkgrel=1
pkgdesc="Python to GNU Octave bridge."
arch=('any')
url="http://github.com/blink1073/oct2py"
license=('MIT')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://github.com/blink1073/oct2py/archive/v${pkgver}.tar.gz")
md5sums=('51be4ecb5753be557e4b0f666bf4028c')

build() {
  cp -r "${srcdir}"/oct2py-$pkgver "${srcdir}"/oct2py-$pkgver-py2

  cd "${srcdir}"/oct2py-$pkgver
  python setup.py build

  cd "${srcdir}"/oct2py-$pkgver-py2
  python2 setup.py build
} 

package_python-oct2py() {
  depends=('python-scipy' 'octave')

  cd "${srcdir}"/oct2py-$pkgver
  python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-oct2py() {
  depends=('python2-scipy' 'octave')

  cd "${srcdir}"/oct2py-$pkgver-py2
  python2 setup.py install --root="${pkgdir}" --optimize=1
}


