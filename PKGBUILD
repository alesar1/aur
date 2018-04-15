# Maintainer: Diego Nieto Cid <dnietoc@gmail.com>

_module="github3.py"

pkgname=("python-${_module}" "python2-${_module}")
pkgver="1.1.0"
pkgrel="1"
pkgdesc="a comprehensive wrapper around the GitHub API (v3)"
arch=("any")
url="https://github.com/sigmavirus24/${_module}"
license=("custom:Modified BSD")
makedepends=("python-setuptools" "python2-setuptools")
source=("https://pypi.io/packages/source/${_module:0:1}/${_module}/${_module}-${pkgver}.tar.gz")
md5sums=('8c3916959c5e1a93868f067de5a5a52c')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
    python2 setup.py build
}

check() {
## TODO This needs betamax, coverage and mock as makedepends
#    cd "${srcdir}/${_module}-${pkgver}"
#    python setup.py test
#    python2 setup.py test
    :
}

package_python-github3.py() {
    depends=("python" "python-requests" "python-uritemplate.py")
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --skip-build --root="${pkgdir}" --optimize=1
    install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/${pkgname}/LICENSE
}

package_python2-github3.py() {
    depends=("python2" "python2-requests" "python2-uritemplate.py")
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py install --skip-build --root="${pkgdir}" --optimize=1
    install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/${pkgname}/LICENSE
}
