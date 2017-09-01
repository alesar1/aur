#Maintainer: Florian Wittmann <fl0w1@disroot.org>
pkgname='python-typepy'
_module='typepy'
pkgver='0.0.20'
pkgrel=1
pkgdesc="A Python library for variable type checker/validator/converter at a run time."
url=""https://github.com/thombashi/typepy
depends=('python' 'python-mbstrdecoder>=0.2.2' 'python-enum-compat' 'python-dateutil>=2.6.1' 'python-pytz>=2017.2' 'python-six>=1.10')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://github.com/thombashi/typepy/archive/v${pkgver}.tar.gz")
md5sums=('b9abd4d661dabe512e95ca69ddb65d55')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
