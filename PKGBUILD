# Maintainer: James Harvey <jamespharvey20@gmail.com>
# * No namcap warnings or errors
# * For version with rdma support, see package qperf

pkgname=qperf-nordma
_pkgname=qperf
pkgver=0.4.11
pkgrel=1
pkgdesc='OpenFabrics Alliance InfiniBand performance benchmark for bandwidth and latency'
#        Works over TCP/IP only - for rdma support, see package qperf
arch=('x86_64' 'i686')
url='https://www.openfabrics.org/index.php/overview.html'
license=('GPL2' 'custom:"Open Fabrics Alliance BSD"')
depends=('glibc')
conflicts=('qperf')
source=("https://github.com/linux-rdma/${_pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('8ef6f0c0124a4eee447f39479c62a992')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  ./autogen.sh
  ./configure --prefix=/usr \
              --sbindir=/usr/bin \
              --libexecdir=/usr/lib \
              --sysconfdir=/etc \
              --localstatedir=/var \
              --mandir=/usr/share/man
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}
