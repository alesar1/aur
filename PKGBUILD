# Maintainer: pfm <vorticity at mail dot ru>
pkgname=("python-pem" "python2-pem")
_pkgname=pem
pkgver=19.3.0
pkgrel=1
pkgdesc="Parsing and splitting of PEM files"
arch=(any)
url="https://pem.readthedocs.io"
license=('MIT')
makedepends=("python-setuptools" "python2-setuptools")
source=("$_pkgname-$pkgver.tar.gz::https://github.com/hynek/$_pkgname/archive/$pkgver.tar.gz")
md5sums=('b8f20546b3dbe6e46015c96c300283af')

prepare() {
    cp -a $_pkgname-$pkgver{,-py2}
}

build() {
    cd "$srcdir/$_pkgname-$pkgver"
    python setup.py build

    cd "$srcdir/$_pkgname-$pkgver-py2"
    python2 setup.py build
}

package_python-pem() {
    depends=("python")
    cd "$srcdir/$_pkgname-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}

package_python2-pem() {
    depends=("python2")
    cd "$srcdir/$_pkgname-$pkgver-py2"
    python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
