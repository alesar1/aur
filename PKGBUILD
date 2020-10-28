# Maintainer: Spencer Muise <smuise@spencermuise.ca>

pkgname=python-pywalfox
_name=pywalfox
pkgver=2.7
pkgrel=1
pkgdesc="Native app used alongside the Pywalfox browser extension"
arch=('any')
url='https://github.com/frewacom/pywalfox'
license=('MPL2')
depends=(
  'python'
)
makedepends=(
  'python-setuptools'
)
source=("$pkgname-$pkgver.tar.gz::https://pypi.python.org/packages/source/p/$_name/$_name-$pkgver.tar.gz")
sha256sums=('cb86598beb75b057129d5d887c1144715fbbbeee95f1893d4236da54c2fcb7c9')

build() {
    cd $_name-$pkgver
    python setup.py build
}

package() {
    cd $_name-$pkgver
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
