# Maintainer: Popolon <popolon@popolon.org>

pkgbase='python-apycula'
pkgname=('python-apycula')
_module='Apycula'
pkgver='0.3.1'
pkgrel=1
pkgdesc="Open Source tools for Gowin FPGAs"
url="https://github.com/YosysHQ/apicula"
depends=('python')
makedepends=('python-setuptools')
conflicts=('prjapicula')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('468599b763b1d178c9eaf9ae08270d09331fc199f027a7d2c7bd5f9a2a66bb67')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
