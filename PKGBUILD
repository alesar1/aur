# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=python-rollbar
pkgver=0.13.3
pkgrel=1
pkgdesc="Easy and powerful exception tracking with rollbar"
arch=(any)
url="https://github.com/rollbar/pyrollbar"
license=('MIT')
depends=('python-requests' 'python-six')
makedepends=('python-setuptools')
source=("$url/archive/v$pkgver/$pkgname-$pkgver.tar.gz")

build() {
    cd "$srcdir"/pyrollbar-$pkgver
    python setup.py build
}

package() {
    cd "$srcdir"/pyrollbar-$pkgver
    python setup.py install -O1 --skip-build --root="$pkgdir"
}

sha256sums=('e11b7927f68b5711498c4fd1e31e3c723916d1263d711fa735e182615a420651')
