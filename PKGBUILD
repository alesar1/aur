# Maintainer of this PKGBUILD file: Martino Pilia <martino.pilia@gmail.com>
_pkgname=skorch
pkgname=python-$_pkgname
pkgver=0.4.0
pkgrel=1
pkgdesc="A scikit-learn compatible neural network library that wraps pytorch"
arch=('any')
url="https://github.com/dnouri/skorch"
license=('BSD3')
depends=('python-scikit-learn' 'python-yaml' 'python-numpy' 'python-scipy' 'python-tqdm' 'python-pytorch' 'python-tabulate')
makedepends=('python-setuptools')
source=("https://github.com/dnouri/skorch/archive/v${pkgver}.tar.gz")
sha256sums=('40f3f4462f5bedd9fdf1706e035d61ff638eca98368e17ce8cdf9b58cd09ee6b')

package() {
	cd "$srcdir/$_pkgname-$pkgver"
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	python setup.py install --optimize=1 --root="$pkgdir"
}
