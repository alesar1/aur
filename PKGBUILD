# Maintainer: Cedric Girard <girard.cedric@gmail.com>
_pythonmod=zxcvbn-python
pkgname=('python2-zxcvbn' 'python-zxcvbn')
pkgbase=python2-zxcvbn
pkgver=4.4.19
pkgrel=1
pkgdesc="Password strength estimator"
arch=('any')
url="http://pypi.python.org/pypi/${_pythonmod}"
license=('Apache')
#source=("https://pypi.io/packages/source/${_pythonmod:0:1}/${_pythonmod}/${_pythonmod}-$pkgver.tar.gz")
source=("https://github.com/dwolfhub/${_pythonmod}/archive/v$pkgver.tar.gz")
md5sums=('fe057ff3c170d1b3d0ecc29ba13a5127')

package_python2-zxcvbn() {
  depends=('python2')
  makedepends=('python2-setuptools')
  cd ${srcdir}/${_pythonmod}-$pkgver
  python2 setup.py install --root=${pkgdir}
}

package_python-zxcvbn() {
  depends=('python')
  makedepends=('python-setuptools')
  cd ${srcdir}/${_pythonmod}-$pkgver
  python setup.py install --root=${pkgdir}
}
