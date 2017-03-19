pkgbase=('python-pygdbmi')
pkgname=('python-pygdbmi')
_module='pygdbmi'
pkgver='0.7.3.3'
pkgrel=1
pkgdesc="Parse gdb machine interface output with Python"
url="https://github.com/cs01/pygdbmi"
depends=('python' 'python-pypeg2')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/p/pygdbmi/pygdbmi-${pkgver}.tar.gz")
md5sums=('79454d4c0cf0e1d38dab75e29e69fcaf')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
