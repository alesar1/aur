# Contributor: Andre Klitzing <andre () incubo () de>

pkgname=epson-inkjet-printer-201309w
_pkgname_filter=epson-inkjet-printer-filter
_suffix=1lsb3.2.src.rpm
pkgver=1.0.0
pkgrel=9
pkgdesc="Epson printer driver (XP-510)"
arch=('i686' 'x86_64')
url="http://download.ebz.epson.net/dsc/search/01/search/?OSC=LX"
license=('LGPL' 'custom:Epson Licence Agreement')
depends=('cups' 'ghostscript')
#makedepends=('libtool' 'make' 'automake' 'autoconf')
source=(http://download.ebz.epson.net/dsc/op/stable/SRPMS/${pkgname}-${pkgver}-${_suffix} fixbuild.patch)

build() {
  cd "$srcdir"
  tar xzf $pkgname-$pkgver.tar.gz
  FILTER_FILE=`ls $_pkgname_filter*.tar.gz`
  tar xzf $FILTER_FILE

  cd "${FILTER_FILE%.tar.gz}"
  patch -p1 -i "$srcdir"/fixbuild.patch
  aclocal
  libtoolize
  chmod +x configure
  # if you have runtime problems: add "--enable-debug" and look into /tmp/epson-inkjet-printer-filter.txt
  ./configure LDFLAGS="$LDFLAGS -Wl,--no-as-needed" --prefix=/opt/$pkgname
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -d "$pkgdir/opt/$pkgname/"
  if [ "$CARCH" = "x86_64" ]; then
     cp -a --no-preserve=mode lib64 "$pkgdir/opt/$pkgname/"
  else
     cp -a --no-preserve=mode lib "$pkgdir/opt/$pkgname/"
  fi
  cp -a --no-preserve=mode resource "$pkgdir/opt/$pkgname/"

  if [ -e "watermark" ]; then
      cp -a --no-preserve=mode watermark "$pkgdir/opt/$pkgname/"
  fi
  install -d "$pkgdir/usr/share/cups/model/$pkgname"
  install -m 644 ppds/* "$pkgdir/usr/share/cups/model/$pkgname"

  cd "$srcdir"
  FILTER_FILE=`ls $_pkgname_filter*.tar.gz`
  cd "${FILTER_FILE%.tar.gz}"
  install -d "$pkgdir/opt/$pkgname/cups/lib/filter/"
  install -m 755 src/epson_inkjet_printer_filter "$pkgdir/opt/$pkgname/cups/lib/filter/epson_inkjet_printer_filter"
}
sha256sums=('48f56a643f46c2f6382f47b1e3cf42b186ec954ceaf4fcf453fbb05115dfceed'
            '85b0493972dcb92befd2bbf8d0ce705fc6280d54d83e985e9f7d0301bb01af50')
