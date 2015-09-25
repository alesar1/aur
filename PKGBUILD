# Maintainer: Andrés Rodríguez <andres.rodriguez __at__ lithersoft.com>

pkgname=('cython2-kivy')
pkgver=0.23
pkgrel=1
pkgdesc="C-Extensions for Python; Kivy-compatible version"
arch=(i686 x86_64)
url="http://www.cython.org"
license=('APACHE')
depends=('python2')
makedepends=('python2-setuptools')
provides=('cython2=0.23')
conflicts=('cython2')
source=("http://cython.org/release/Cython-$pkgver.tar.gz")
sha256sums=('9fd01e8301c24fb3ba0411ad8eb16f5d9f9f8e66b1281fbe7aba2a9bd9d343dc')

package() {
  cd $srcdir/Cython-$pkgver
  python2 setup.py install --root=$pkgdir

  mv $pkgdir/usr/bin/cygdb $pkgdir/usr/bin/cygdb2
  mv $pkgdir/usr/bin/cython $pkgdir/usr/bin/cython2
  mv $pkgdir/usr/bin/cythonize $pkgdir/usr/bin/cythonize2
}
