# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgbase=('python2-vcstool')
pkgname=('python2-vcstool')
_module='vcstool'
pkgver='0.1.35'
pkgrel=1
pkgdesc="vcstool provides a command line tool to invoke vcs commands on multiple repositories."
url="https://github.com/dirk-thomas/vcstool"
depends=('python2' 'python2-yaml')
conflicts=('python-vcstool')
makedepends=('python2-setuptools')
license=('Apache')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/v/vcstool/vcstool-${pkgver}.tar.gz")
md5sums=('3bcca76daf79ec8703b5374f6d8974b2')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
