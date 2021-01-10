# Contributor: Médéric Boquien <mboquien@free.fr>

pkgname=erfa
pkgver=1.7.1
pkgrel=1
pkgdesc="Set of algorithms and procedures used in fundamental astronomy"
url="https://github.com/liberfa/erfa"
arch=('x86_64' 'i686')
license=('BSD')
options=('!libtool')
source=("https://github.com/liberfa/erfa/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha512sums=('9596696bd34a017537180d29ed15a3562806b7d50a36f06ddc4c49ad9b6b39fbb25d72a03bd97447a78f8031a12a684def703a3463f4379b3863bd4dd0a46d1e')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  ./configure --prefix=/usr
#  make CFLAGF="-c -O -fPIC"
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  make DESTDIR="${pkgdir}/" install
}
