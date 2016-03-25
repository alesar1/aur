# Maintainer: Steffen Weber <-boenki-gmx-de->
# Contributor: Soeren Koerner <nonick at posteo dot de>
# Contributor: Benedikt 'linopolus' Mueller <benemue at googlemail dot com>

pkgname=mediathek
pkgver=11
pkgrel=1
pkgdesc="Offers access to the Mediathek of different german tv stations (ARD, ZDF, Arte, etc.)"
arch=(any)
url="http://zdfmediathk.sourceforge.net"
license=('custom')
depends=('java-runtime')
optdepends=('mplayer: record streams'
            'flvstreamer: stream flash'
            'vlc: play files directly from mediathek')
options=(!strip !zipman)
source=(http://downloads.sourceforge.net/zdfmediathk/MediathekView_${pkgver}.zip
        $pkgname
        $pkgname.desktop)
md5sums=('1d9f999c65f9c8f22f1cee6dc45876fe'
         'e52a61eabb6a5931dc2a1fe261bc7d95'
         'bad6e1fdc948ac0e41b8535509cf944d')

package() {
  install -d $pkgdir/{opt/$pkgname/{lib,bin},usr/{bin,share/{{doc,licenses}/$pkgname,applications,pixmaps}}}
  install -m755 $pkgname $pkgdir/usr/bin/
  install -m644 MediathekView.jar $pkgdir/opt/$pkgname/
  install -m644 -t $pkgdir/opt/$pkgname/lib lib/*
  install -m755 bin/flv.sh $pkgdir/opt/$pkgname/bin/
  install -m644 $pkgname.desktop $pkgdir/usr/share/applications/
  install -m644 Info/MediathekView.png $pkgdir/usr/share/pixmaps/
  install -m644 Anleitung/Kurzanleitung.pdf $pkgdir/usr/share/doc/$pkgname/
  install -m644 -t $pkgdir/usr/share/licenses/$pkgname Copyright/*.*
}
