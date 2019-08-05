# Maintainer: Steffen Weber <-boenki-gmx-de->
# Maintainer: Stephan Springer <buzo+arch@Lini.de>
# Contributor: Soeren Koerner <nonick at posteo dot de>
# Contributor: Benedikt 'linopolus' Mueller <benemue at googlemail dot com>

pkgname=mediathek
_realname=MediathekView
pkgver=13.2.1
pkgrel=2
pkgdesc="Access the Mediathek of many German TV stations"
arch=('any')
url="https://mediathekview.de"
license=('GPL3')
depends=('java8-openjfx')
optdepends=('mplayer: record streams'
            'flvstreamer: stream flash'
            'vlc: play files directly from mediathek')
source=(https://download.mediathekview.de/stabil/$_realname-$pkgver.tar.gz
        $pkgname
        $pkgname.desktop)

# curl https://download.mediathekview.de/stabil/MediathekView-latest.tar.gz.SHA-512
sha512sums=('626971a85681461a4d1f83e218fdcb5fee21ebafac28d49571433147ea8c8a07c0476f939f6019d5b49d13dcbedd73944aa317ab54a856279e762707a6007ee9'
            'b3b26289db69eb5d20b27ef313a07d4297a599756118748ed88460fd50d09a8b6a0c20e07087f4da276bbdc6459727224264059fad2ecf68da22725759cf75ce'
            '1a5728920704d98d7ae08d25c06c45b3dbac46ece2dc660e3a2b5806cff29263e9734cd7993d02c4c1f7710d37395da29abc094e3d786a0eaf6d130b02fcad48')

package() {
  cd $_realname-$pkgver
  install -d "$pkgdir"/{opt/$pkgname/{lib,bin},usr/{bin,share/{applications,pixmaps}}}
  install -m755 ../$pkgname "$pkgdir"/usr/bin/
  install -m644 $_realname.jar "$pkgdir"/opt/$pkgname/
  install -m644 -t "$pkgdir"/opt/$pkgname/lib lib/*
  install -m755 bin/flv.sh "$pkgdir"/opt/$pkgname/bin/
  install -m644 ../$pkgname.desktop "$pkgdir"/usr/share/applications/
  install -m644 Icons/$_realname.svg "$pkgdir"/usr/share/pixmaps/
}
