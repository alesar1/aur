# Maintainer: hexchain <i at hexchain dot org>

_pypiname=pyperformance
pkgname=python-$_pypiname
pkgver=1.0.0
pkgrel=2.1
pkgdesc='Python Performance Benchmark Suite'
url="https://github.com/python/pyperformance"
depends=('python-perf' 'python-six')
makedepends=('python-pip')
checkdepends=('python-tox')
license=('MIT')
arch=('any')
source=("https://pypi.org/packages/source/${_pypiname:0:1}/$_pypiname/$_pypiname-$pkgver.tar.gz")
sha256sums=('3aaaf52c6333e5d9275ec44040cda527b441318fe3866911339a59858fca3d90')

build() {
    cd "$srcdir/$_pypiname-$pkgver"
    python setup.py build
}

check() {
    cd "$srcdir/$_pypiname-$pkgver"
    tox -s true
}

package() {
    cd "$srcdir/$_pypiname-$pkgver"
    python setup.py install --root="$pkgdir/" --prefix=/usr --optimize=1 --skip-build
    install -D -m644 COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
