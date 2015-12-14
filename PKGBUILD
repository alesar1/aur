# Maintainer: James Harvey <jamespharvey20@gmail.com>
# * No namcap warnings or errors

pkgname=dapl
pkgver=2.1.7
pkgrel=1
pkgdesc='OpenFabrics Alliance direct access transport libraries for InfiniBand'
arch=('x86_64' 'i686')
url=('https://www.openfabrics.org/downloads/dapl/README.html')
license=('GPL2' 'custom:"Open Fabrics Alliance BSD"')
depends=('librdmacm')
source=("https://www.openfabrics.org/downloads/${pkgname}/${pkgname}-${pkgver}.tar.gz")
md5sums=('c25f1c3f99fd7cf9de7c69f664cda492')

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
