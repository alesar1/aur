pkgname=openturns
pkgver=1.7
pkgrel=1
pkgdesc="Uncertainty treatment library"
license=('LGPL')
arch=('i686' 'x86_64')
url="http://www.openturns.org/"
depends=('libxml2' 'muparser' 'intel-tbb' 'hmat-oss' 'python-matplotlib' 'nlopt' 'r')
makedepends=('python-sphinx' 'cmake' 'swig' 'boost')
backup=('etc/openturns/openturns.conf')
source=("https://github.com/openturns/openturns/archive/v$pkgver.tar.gz")
sha1sums=('9535120721b20a45460538f3ed8fa0f0fec1d797')

build() {
  cd openturns-$pkgver
  R CMD INSTALL --library=$PWD utils/rot_1.4.6.tar.gz
  export R_LIBS=$PWD
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_SKIP_INSTALL_RPATH=ON \
        -DOPENTURNS_SYSCONFIG_PATH=/etc \
        .
  make
}

package() {
  cd openturns-$pkgver
  install -d "$pkgdir"/usr/lib/R/library/
  cp -r rot "$pkgdir"/usr/lib/R/library/
  make DESTDIR="$pkgdir" install
  install -d "$pkgdir"/usr/share/licenses/$pkgname
  install -m644 "$srcdir"/openturns-$pkgver/COPYING* $pkgdir/usr/share/licenses/$pkgname
}

