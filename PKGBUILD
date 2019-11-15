pkgname=python-multiprocess
pkgver=0.70.9
pkgrel=1
pkgdesc="better multiprocessing and multithreading in python"
url="http://trac.mystic.cacr.caltech.edu/project/pathos/wiki.html"
arch=('i686' 'x86_64')
license=('BSD')
makedepends=('python-setuptools')
depends=('python-dill')
source=("https://github.com/uqfoundation/multiprocess/archive/multiprocess-${pkgver}.tar.gz")
sha256sums=('7cff4ea58e01e813c31756247c11616edb605fb4cb7a6bf5c2704a95277b9bf6')

build() {
  cd "${srcdir}"/multiprocess-multiprocess-$pkgver
  python setup.py build
}

package() {
  cd "${srcdir}/multiprocess-multiprocess-$pkgver"
  python setup.py install --root=${pkgdir} --optimize=1
}


