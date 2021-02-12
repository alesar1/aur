# Maintainer: Felix Fung <fylixeoi@gmail.com>

pkgname=timescaledb
pkgver=2.0.1
pkgrel=0
pkgdesc="An open-source time-series database optimized for fast ingest and complex queries."
arch=('i686' 'x86_64')
url="https://www.timescale.com/"
license=('Apache')
depends=('postgresql>=11.0.0' 'postgresql-libs>=11.0.0' 'postgresql<=13.1' 'postgresql-libs<=13.1')
makedepends=('gcc' 'cmake>=3.4' 'git')
install=${pkgname}.install
source=("$pkgname-$pkgver::git+https://github.com/timescale/timescaledb.git#tag=$pkgver")
md5sums=(SKIP)

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ./bootstrap -DWARNINGS_AS_ERRORS=OFF -DREGRESS_CHECKS=OFF
    cd build && make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}/build"
    make DESTDIR="$pkgdir/" install
}
