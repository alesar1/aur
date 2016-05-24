# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=python-uvloop
pkgver=0.4.28
pkgrel=1
_libname=${pkgname/python-/}
pkgdesc="A fast, drop-in replacement of the built-in asyncio event loop."
url="https://github.com/MagicStack/uvloop"
license=('MIT')
arch=('i686' 'x86_64')
depends=('python' 'libuv')
makedepends=('cython' 'python-setuptools')
source=("https://github.com/MagicStack/uvloop/archive/v$pkgver/$_libname-$pkgver.tar.gz")
sha256sums=('8a79260b46b34b0491ee5087bf5d262e363f80fa97786acc1260b3448cdf47b1')

prepare() {
	cd "$srcdir"/$_libname-$pkgver
	echo "DEF DEBUG = 0" > uvloop/__debug.pxi
	cat <<EOF > setup.cfg
[build_ext]
inplace=1
use-system-libuv=1
EOF
}

build() {
	cd "$srcdir"/$_libname-$pkgver
	cython -3 uvloop/loop.pyx
	python setup.py build
}

package() {
	cd "$srcdir"/$_libname-$pkgver
	python setup.py install -O1 --skip-build --root="$pkgdir"
	install -m0644 -D LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
