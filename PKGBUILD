# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>
pkgname='python-xsdata'
_pkgname='xsdata'
pkgver=21.6
pkgrel=1
pkgdesc='Naive XML bindings for python'
url='https://xsdata.readthedocs.io'
checkdepends=('python-click-default-group' 'python-docformatter' 'python-pytest' 'python-pytest-benchmark' 'python-toposort' 'python-untokenize')
depends=()
makedepends=('python-setuptools')
optdepends=('python-click'
    'python-toposort')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_pkgname:0:1}/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('f624a819c039f8b71d339c2357d8f4b0a61dca4913fdb1b3a4c8e9329af030c0')

package() {
    cd "${_pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

check() {
  cd "$_pkgname-$pkgver"
  pytest tests/
}

