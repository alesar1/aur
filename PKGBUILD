# Contributor: Médéric Boquien <mboquien@free.fr>

pkgname=erfa
pkgver=1.7.2
pkgrel=1
pkgdesc="Set of algorithms and procedures used in fundamental astronomy"
url="https://github.com/liberfa/erfa"
arch=('x86_64' 'i686')
license=('BSD')
options=('!libtool')
source=("https://github.com/liberfa/erfa/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha512sums=('7ceb9b9998b559e2504278c7e7d04d3d4d46dc0bd173087d4cb79966fdb2c0fa0b029e6cd5e928137d1056de4f36964ba4bc3f87bcef96326f4e05822d26972c')

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
