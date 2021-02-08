# Maintainer: max.bra <max dot bra at alice dot it>

pkgname=booktab
pkgver=4.12.1
pkgrel=1
pkgdesc="MyZanichelli - La piattaforma che ti permette di consultare tutti i tuoi libri scolastici in versione multimediale e interattiva."
arch=('x86_64')
url="https://booktab.it/"
license=('unknown')
depends=("pcre" "fontconfig" "libxrandr" "libxdamage" "libcups" "nss" "libpng12" "libxcursor" "libxinerama" "libpulse" "qt5-svg" "qt5-webkit" "qt5-multimedia" "qt5-webengine")

_debname=BooktabSetup.deb

source=(https://booktab.it/setup-z/$pkgver/${_debname})
md5sums=('33f9af37f9cb8f9d08e749c99be79d2b')

noextract=(${_debname})

options=(!strip)

prepare() {
  cd "$srcdir"
  msg2 "Decompressing Debian package..."
  ar xv "${_debname}" > /dev/null
  tar -xf data.tar.xz > /dev/null
}

package() {
  cd "$srcdir"
  install -dm755 "$pkgdir"/usr/share/applications
  install -dm755 "$pkgdir"/usr/bin
  install -m644 usr/share/applications/$pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
  # install -m644 usr/share/applications/"$pkgname"z.desktop "$pkgdir"/usr/share/applications/"$pkgname"z.desktop
  install -m755 usr/bin/booktab "$pkgdir"/usr/bin/booktab

#  install -dm755 "$pkgdir"/usr/lib
#  install -m644 usr/lib/libPDFNetC.so.6.5.3 "$pkgdir"/usr/lib/libPDFNetC.so.6.5.3
#  ln -s ./libPDFNetC.so.6.5.3 "$pkgdir"/usr/lib/libPDFNetC.so
#  install -m644 usr/lib/libbtbanalytics.a "$pkgdir"/usr/lib/libbtbanalytics.a
#  install -m644 usr/lib/libbtbcore.a "$pkgdir"/usr/lib/libbtbcore.a
#  install -m644 usr/lib/libbtbgui.a "$pkgdir"/usr/lib/libbtbgui.a
#  install -m644 usr/lib/libbtbservices.a "$pkgdir"/usr/lib/libbtbservices.a

  # ln -s /usr/lib/libpcre16.so "$pkgdir"/usr/lib/libpcre16.so.3

  cp -dpr --no-preserve=ownership usr/share/duDat "$pkgdir"/usr/share
}
