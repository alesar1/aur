# Contributor: Médéric Boquien <mboquien@free.fr>

pkgname=erfa
pkgver=1.7.0
pkgrel=1
pkgdesc="Set of algorithms and procedures used in fundamental astronomy"
url="https://github.com/liberfa/erfa"
arch=('x86_64' 'i686')
license=('BSD')
options=('!libtool')
source=("https://github.com/liberfa/erfa/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha512sums=('0a25faa22cc756776df40cfd927388077f7d253ee89fd4e21c4ddb35198dafd5fd7e9904d00f419675c5f3b26232b5bd04087d4a2f175da1f89179173f98692f')

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
