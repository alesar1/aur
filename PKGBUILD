# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgbase=('python2-osrf_pycommon')
pkgname=('python2-osrf_pycommon')
_module='osrf_pycommon'
pkgver='0.1.4'
pkgrel=1
pkgdesc="Commonly needed Python modules, used by Python software developed at OSRF"
url="http://osrf-pycommon.readthedocs.org/"
depends=('python2' 'python2-trollius')
provides=('python2-osrf-pycommon')
conflicts=('python2-osrf-pycommon')
makedepends=('python2-setuptools')
license=('Apache')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/o/osrf_pycommon/osrf_pycommon-${pkgver}.tar.gz")
md5sums=('7c77eb0788697a42de337b9bf4d28255')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
