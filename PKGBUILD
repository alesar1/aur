# Maintainer: Lukas Spies <lukas (at) photoqt _dot_ org>

pkgname=python-pymbolic
_module=pymbolic
pkgver=2020.1
pkgrel=1
pkgdesc="Pymbolic: A simple package to do symbolic math (focus on code gen and DSLs)"
url="https://github.com/inducer/pymbolic"
depends=('python' 'python-sympy' 'python-symengine')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://github.com/inducer/pymbolic/archive/v${pkgver}.tar.gz")
sha256sums=('310d9997a13ffc8c24e22fc14c72ecab4defc3e83a0d390d8242f0521ceb459d')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/license.md"
}
