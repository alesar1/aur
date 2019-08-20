# Maintainer: Simon Boulay <simon.boulay@alkeona.net>
# Contributor: Melvin Vermeeren <mail@mel.vin>

_name=sphinxcontrib-tikz
pkgname=("python-${_name}" "python2-${_name}")
pkgver=0.4.7
pkgrel=1
pkgdesc="TikZ extension for Sphinx."
arch=('any')
url="https://bitbucket.org/philexander/tikz"
license=('BSD')
makedepends=('python' 'python-setuptools' 'python2' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('5ee0611ef1a527d436c0555d45f745eaf922c2e4c65271f28daa2048531b024d')

prepare() {
  cp -a "sphinxcontrib-tikz-$pkgver" "sphinxcontrib-tikz2-$pkgver"
}

package_python-sphinxcontrib-tikz() {
  depends=('python' 'python-setuptools')

  cd "sphinxcontrib-tikz-$pkgver"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1
}

package_python2-sphinxcontrib-tikz() {
  depends=('python2' 'python2-setuptools')

  cd "sphinxcontrib-tikz2-$pkgver"
  python2 setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1
}
