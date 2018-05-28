# Maintainer: Johannes Wienke <languitar@semipol.de>
pkgname=pyls-mypy
pkgver=0.1.2
pkgrel=2
pkgdesc="A Mypy plugin for the python language server"
url="https://github.com/tomv564/pyls-mypy"
depends=('python' 'python-language-server' 'mypy' 'python-future')
makedepends=('python3' 'python-setuptools')
license=('MIT')
arch=('any')
# unfortunately, this only builds when using a git clone
source=("git+https://github.com/tomv564/pyls-mypy.git#tag=${pkgver}")
sha256sums=('SKIP')

prepare() {
    cd "${srcdir}/pyls-mypy"
    # this is included in standard python and prevents the server from launching
    sed -i "/configparser/d" setup.py
}

package() {
	cd "${srcdir}/pyls-mypy"
	python setup.py install --root="$pkgdir" -v --optimize=1
}
