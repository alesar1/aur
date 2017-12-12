pkgname=epson-inkjet-printer-escpr2
pkgver=1.0.9
pkgrel=1
pkgdesc="Epson Inkjet Printer Driver 2 (ESC/P-R) for Linux"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://download.ebz.epson.net/dsc/search/01/search/?OSC=LX"
license=('GPL2')
depends=('cups' 'ghostscript')
optdepends=('imagescan: scanner support')
options=('!libtool')
source=('https://download3.ebz.epson.net/dsc/f/03/00/06/66/06/cbdec7133feb477f38ebd45337be3a8fb1416c0c/epson-inkjet-printer-escpr2-1.0.9-1lsb3.2.src.rpm')
sha256sums=('9539a1f5cc031fb1792eb315c6771ebdb46286eeb5c756fd6371d4d54582191d')

prepare() {
  tar xvf "$pkgname-$pkgver-$pkgrel"lsb3.2.tar.gz
}

build() {
  cd "$pkgname-$pkgver"

  ./configure --prefix=/usr \
              --with-cupsfilterdir=/usr/lib/cups/filter \
              --with-cupsppddir=/usr/share/ppd
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
