# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Your Name <youremail@domain.com>
pkgname=python-tdl
pkgver=1.5.1
pkgrel=1
pkgdesc="Pythonic CFFI port of libtcod."
arch=('any')
url="https://pypi.python.org/pypi/tdl"
license=('BSD')
depends=('python' 'python-cffi' 'python-libtcod-cffi')
source=("https://github.com/HexDecimal/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('5aa1ca900ae461e08ffafbd589f09304')

package() {
	cd "$pkgname-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
}
