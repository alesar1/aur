# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=python-stomp.py
_libname=${pkgname/python-/}
pkgver=4.1.13
pkgrel=1
pkgdesc="Python STOMP client, supporting versions 1.0, 1.1 and 1.2 of the protocol"
arch=(any)
url="https://github.com/jasonrbriggs/stomp.py"
license=(Apache)
depends=(python)
source=(https://files.pythonhosted.org/packages/source/${_libname:0:1}/$_libname/$_libname-$pkgver.tar.gz)

build() {
	cd "$srcdir"/$_libname-$pkgver
	python setup.py build
}

package() {
	cd "$srcdir"/$_libname-$pkgver
	python setup.py install -O1 --skip-build --root="$pkgdir"
	install -Dm0644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

sha256sums=('229f83697a0767f532e43bed0628039ac738c1fb9229bb37074ae21c9269ed6a')
