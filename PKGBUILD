# Maintainer: James Harvey <jamespharvey20@gmail.com>

pkgname=libiwpm
pkgver=1.0.3
pkgrel=1
pkgdesc='OpenFabrics Alliance userspace service for iWarp drivers to claim TCP ports'
arch=('x86_64' 'i686')
url=('https://www.openfabrics.org/downloads/libiwpm/README.html')
license=('GPL2' 'custom:"Open Fabrics Alliance BSD"')
depends=('libnl')
source=("https://www.openfabrics.org/downloads/${pkgname}/${pkgname}-${pkgver}.tar.gz")
md5sums=('8c963f77f1a0f80ce66fec3f2c3467e5')

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
