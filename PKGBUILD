# Maintainer of this PKGBUILD file: Martino Pilia <martino.pilia@gmail.com>
_pkgname=pynrrd
pkgname=python-$_pkgname
pkgver=0.3.2
pkgrel=1
pkgdesc="Simple pure-python module for reading and writing nrrd files"
arch=('any')
url="https://github.com/mhe/pynrrd"
license=('MIT')
depends=('python-numpy')
optdepends=()
makedepends=('python-setuptools')
source=("https://github.com/mhe/pynrrd/archive/v${pkgver}.tar.gz")
sha256sums=('5c49d230c744cd0bd91934951d1db4a359aecf2c03312727cc4009d949ac893f')

package() {
	cd "$srcdir/$_pkgname-$pkgver"
	install -D -m644 ${srcdir}/$_pkgname-$pkgver/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	python setup.py install --optimize=1 --root=$pkgdir
}
