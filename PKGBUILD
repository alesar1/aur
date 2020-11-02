pkgname=python-dill
pkgver=0.3.3
pkgrel=2
pkgdesc='Serialize all of python (almost)'
arch=('any')
url='http://pypi.python.org/pypi/dill/'
depends=('python')
makedepends=('python-setuptools')
optdepends=('python-objgraph')
license=('BSD')
source=("https://github.com/uqfoundation/dill/archive/dill-$pkgver.tar.gz")
md5sums=('80e782f27a5198238c6b43d75acea68d')

build() {
    cd "$srcdir/dill-dill-$pkgver"
    python setup.py build
}

package() {
    cd "$srcdir/dill-dill-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
