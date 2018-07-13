# Maintainer: Danilo J. S. Bellini <danilo dot bellini at gmail dot com>
pkgname=('python-kealib')
_kea=1.4.9
pkgver=0.1_$_kea
pkgrel=1
pkgdesc="Python library to access parts of kealib not exposed by GDAL"
arch=('x86_64')
url='http://kealib.org'
license=('MIT')
makedepends=('kealib' 'python-setuptools')
depends=('kealib' 'python')
options=(!emptydirs)
source=("https://bitbucket.org/chchrsc/kealib/downloads/kealib-$_kea.tar.gz")
sha256sums=('1c80489f17114a229097c2e8c61d5e4c82ea63ae631c81a817fef95cfd527174')

build() {
  cd "$srcdir/kealib-$_kea/python"
  python setup.py build
}

package() {
  cd "$srcdir/kealib-$_kea/python"
  python setup.py install --root="$pkgdir/" --skip-build
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
