# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=python-pymysql
pkgver=0.7.1
pkgrel=1
pkgdesc="Pure Python MySQL Client"
arch=(any)
url="http://www.pymysql.org/"
license=('BSD')
depends=('python')
makedepends=('python-setuptools')
source=("http://pypi.python.org/packages/source/P/PyMySQL/PyMySQL-$pkgver.tar.gz")

build() {
    cd "$srcdir/PyMySQL-$pkgver"
    python setup.py build
}

package() {
    cd "$srcdir/PyMySQL-$pkgver"
    python setup.py install -O1 --skip-build --root="$pkgdir"
    install -Dm0644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

sha256sums=('b28f22ae664e77bb5aabb05fdb6b2d3fea0abfba32b3a7ce99f1de67b907efb8')
