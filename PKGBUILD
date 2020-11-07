# Maintainer: Jared Monger <info@jaredmonger.com>
pkgname=exiftool
_srcname=Image-ExifTool
pkgver=12.09
pkgrel=1
pkgdesc="Meta information reader/writer"
arch=('x86_64')
url="https://www.exiftool.org"
license=('PerlArtistic')
depends=('perl')
conflicts=('perl-image-exiftool')
source=("${pkgname}-${pkgver}.tar.gz::https://exiftool.org/${_srcname}-${pkgver}.tar.gz")
sha1sums=('077140be4533516ffe0e8891996d9c6c61bce92c')

build() {
  cd "${_srcname}-${pkgver}"
  perl Makefile.PL
}

check() {
  cd "${_srcname}-${pkgver}"
  make test
}

package() {
  cd "${_srcname}-${pkgver}"
  make DESTDIR="$pkgdir/" install
}
