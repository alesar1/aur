# Contributor: Médéric Boquien <mboquien@free.fr>

pkgname=erfa
pkgver=1.7.3
pkgrel=1
pkgdesc="Set of algorithms and procedures used in fundamental astronomy"
url="https://github.com/liberfa/erfa"
arch=('x86_64' 'i686')
license=('BSD')
options=('!libtool')
source=("https://github.com/liberfa/erfa/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha512sums=('cfacaca23234d4c15933834e3954fdb654cf0232d1a363f9e0d26d7759c6dba70ec3f97fdf0258296cd80b529a400e8fa70931da3f88a6c7ffaba21819d28950')

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
