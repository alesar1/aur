#  Maintainer: Blair Bonnett <blair.bonnett at gmail>
# Contributor: Sebastiaan Lokhorst <sebastiaanlokhorst@gmail.com>
# Contributor: Michael Schubert <mschu.dev at gmail>

pkgname=python-numba-git
pkgver=0.55.0dev0.r1004.g8f3cd87a0
pkgrel=1
pkgdesc='NumPy aware dynamic Python compiler using LLVM (Git version)'
url='https://github.com/numba/numba'
arch=('x86_64')
license=('BSD')
depends=('python-llvmlite>0.37.999' 'python-numpy' 'python-setuptools' 'tbb')
makedepends=('git')
conflicts=('python-numba')
replaces=()
provides=("python-numba=$pkgver")
source=('git+https://github.com/numba/numba.git')
sha256sums=('SKIP')

pkgver() {
  cd numba
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd numba
  python setup.py build
}

package() {
  cd numba
  python setup.py install --skip-build --prefix=/usr --root="$pkgdir" --optimize=1
  install -dm755 "$pkgdir/usr/share/licenses/$pkgname"
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE LICENSES.third-party
}
