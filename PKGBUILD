# Maintainer: James Harvey <jamespharvey20@gmail.com>
# * No namcap warnings or errors

pkgname=libibverbs
pkgver=1.2.0
pkgrel=1
pkgdesc='OpenFabrics Alliance RDMA (remote direct memory access) InfiniBand verbs library'
arch=('x86_64' 'i686')
url='https://www.openfabrics.org/downloads/verbs/README.html'
license=('GPL2' 'custom:"Open Fabrics Alliance BSD"')
depends=('glibc' 'libnl')
source=("https://www.openfabrics.org/downloads/verbs/${pkgname}-${pkgver}.tar.gz")
md5sums=('208df0056ce9ae81b668c2d2d0cf2ec7')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr \
              --sbindir=/usr/bin \
              --libexecdir=/usr/lib \
              --sysconfdir=/etc \
              --localstatedir=/var \
              --mandir=/usr/share/man
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}
