#Maintainer: louson

_name=yocto-cooker
pkgname=python-yocto-cooker
pkgver=1.3.0
pkgrel=6
url="https://github.com/cpb-/yocto-cooker"
pkgdesc="yocto-cooker is a easy yocto manager."
arch=(any)
depends=(python python-jsonschema python-urllib3)
makedepends=(python-setuptools)
checkdepends=(cmake)

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/cpb-/yocto-cooker/archive/refs/tags/${pkgver}.tar.gz")
md5sums=('19233c0f03a5a8cfb541ce0f5ed88d54')
license=('GPL2')

build() {
	cd "$srcdir/$_name-$pkgver"
	python setup.py build
}

package() {
	cd "$srcdir/$_name-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
	install -d "$pkgdir/usr/share/$pkgname"
	install -Dm644 sample-menus/* "$pkgdir/usr/share/$pkgname"
}

check() {
	mkdir "tests" && cd tests
	cmake "$srcdir/$_name-$pkgver/test/"
	make
	ctest
}
