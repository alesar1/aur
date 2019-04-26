pkgname=openturns
pkgver=1.13rc1
pkgrel=1
pkgdesc="Uncertainty treatment library"
license=('LGPL')
arch=('i686' 'x86_64')
url="http://www.openturns.org/"
depends=('libxml2' 'muparser' 'intel-tbb' 'hmat-oss' 'python-matplotlib' 'python-psutil' 'nlopt' 'cminpack' 'ceres-solver' 'optpp')
makedepends=('cmake' 'swig' 'boost')
backup=('etc/openturns/openturns.conf')
source=("https://github.com/openturns/openturns/archive/v$pkgver.tar.gz")
sha256sums=('ce643c8037d3324866868cfcedff1e192e3a42d056d96648c1ef932bba065ce0')

build() {
  cd openturns-$pkgver
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_SKIP_INSTALL_RPATH=ON \
        -DOPENTURNS_SYSCONFIG_PATH=/etc \
        -DUSE_SPHINX=OFF \
        -DUSE_COTIRE=ON -DCOTIRE_MAXIMUM_NUMBER_OF_UNITY_INCLUDES="-j16" \
        -DSWIG_COMPILE_FLAGS="-O1" \
        .
  make
}

package() {
  cd openturns-$pkgver
  make DESTDIR="$pkgdir" install
  install -d "$pkgdir"/usr/share/licenses/$pkgname
  install -m644 "$srcdir"/openturns-$pkgver/COPYING* $pkgdir/usr/share/licenses/$pkgname
}

