# Maintainer: Hao Long <aur@esd.cc>

pkgname=python-rich
_pkgname=rich
pkgver=0.7.1
pkgrel=1
pkgdesc="A Python library for rich text and beautiful formatting in the terminal"
arch=("any")
url="https://github.com/willmcgugan/rich"
license=('MIT')
depends=("python-colorama"
         "python-pprintpp"
         "python-pygments"
         "python-typing_extensions")
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('d9b5a30365ee6806b277a22968309ee32e7210989b76587c7220bb52754e3fd5')

build() {
    cd ${_pkgname}-${pkgver}
    python setup.py build
}

package() {
    cd ${_pkgname}-${pkgver}
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
    install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}
