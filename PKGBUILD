# Maintainer: Bruce Zhang <zttt183525594@gmail.com>
pkgname=python-janus
_name=${pkgname#python-}
pkgver=0.4.0
pkgrel=5
pkgdesc="Thread-safe asyncio-aware queue for Python"
arch=('any')
url="https://github.com/aio-libs/janus"
license=('Apache')
depends=('python')
makedepends=('python-setuptools')
checkdepends=('python-pytest')

source=(
	"https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz" 
)
sha256sums=('cfc221683160b91b35bae1917e2957b78dad10a2e634f4f8ed119ed72e2a88ef')

build() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py build
}

package() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
