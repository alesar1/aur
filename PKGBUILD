# Maintainer: PumpkinCheshire <sollyonzou@gmail.com>

pkgname=python-proto-plus
_name=proto-plus
pkgver=1.13.0
pkgrel=1
pkgdesc="A wrapper around protocol buffers."
arch=('any')
url="https://github.com/googleapis/proto-plus-python"
license=('Apache')
optdepends=('python-google-api-core: Testing')
makedepends=('python'
	'python-setuptools')
depends=("python-protobuf")
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('61b57c5257ca583af2ea1ad40e2b8f251988806eea9f01d119088976b995b2c4')

build() {
	cd "$srcdir/$_name-$pkgver"
	python setup.py build
}

package() {
	cd "$srcdir/$_name-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
