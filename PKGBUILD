pkgname=epson-inkjet-printer-escpr2
pkgver=1.1.6
pkgrel=1
pkgdesc="Epson Inkjet Printer Driver 2 (ESC/P-R) for Linux"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://download.ebz.epson.net/dsc/search/01/search/?OSC=LX"
license=('GPL2')
depends=('cups' 'ghostscript')
makedepends=('automake')
optdepends=('imagescan: scanner support')
options=('!libtool')
source=('https://download3.ebz.epson.net/dsc/f/03/00/10/63/40/79e6fb572dd67237635b31f279d3cc43c8885be5/epson-inkjet-printer-escpr2-1.1.6-1lsb3.2.src.rpm'
        'bug_x86_64.patch')
sha256sums=('55bb372f989fae1726160ca74dc97b76af166ab7e5bfd639d6fc0b2423116b7b'
            '44160b2ef140e97137d65c4db7a50cfe40399ab8691caaeaf43c08f758b8c545')

prepare() {
  tar xvf "$pkgname-$pkgver-$pkgrel"lsb3.2.tar.gz
  
  cd "$pkgname-$pkgver"

  patch -p1 -i "${srcdir}/bug_x86_64.patch"
}

build() {
  cd "$pkgname-$pkgver"
  
  autoreconf -f -i

  ./configure --prefix=/usr \
              --with-cupsfilterdir=/usr/lib/cups/filter \
              --with-cupsppddir=/usr/share/ppd
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
