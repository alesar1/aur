# Contributor: Pedro Martinez-Julia (pedromj@um.es)

pkgname=python-bitarray
pkgver=2.2.2
pkgrel=1
pkgdesc="Efficient arrays of booleans for Python"
arch=('i686' 'x86_64')
url="https://github.com/ilanschnell/bitarray"
license=('PSF')
depends=('python')
makedepends=('python-distribute')
source=(https://files.pythonhosted.org/packages/source/b/bitarray/bitarray-$pkgver.tar.gz)
sha256sums=('5ed37f0482199de5a3e096405a646ab3f45dd020d234c42539b3c11ea0e2278d')

package() {
  cd "$srcdir"/bitarray-$pkgver
  python setup.py install --root="$pkgdir" -O1
}
