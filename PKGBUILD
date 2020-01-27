# Maintainer: WorMzy Tykashi <wormzy.tykashi@gmail.com>

pkgname=lprint
pkgver=1.0b2
pkgrel=1
pkgdesc="A Label Printer Application"
arch=('i686' 'x86_64')
url="https://github.com/michaelrsweet/lprint"
license=('apache')
depends=('avahi' 'cups' 'libpng' 'libusb')
source=("${url}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz"{,.sig})
validpgpkeys=('845464660B686AAB36540B6F999559A027815955')  # M. Sweet
md5sums=('c05298c2b8f95d91ba99c22a5983e138'
         'SKIP')

build() {
  cd ${pkgname}-${pkgver}

  ./configure --prefix=/usr
  make
}

package() {
  cd ${pkgname}-${pkgver}

  make DESTDIR="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:
