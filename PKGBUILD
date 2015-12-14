# This PKGBUILD is part of the VDR4Arch project [https://github.com/vdr4arch]

# Maintainer: Christopher Reimer <mail+vdr4arch[at]c-reimer[dot]de>
pkgname=vdr-tvscraper
pkgver=0.2.0
_vdrapi=2.2.0
pkgrel=9
pkgdesc="Runs in the background and collects metadata for all available EPG events"
url="http://www.vdr-portal.de/board1-news/board2-vdr-news/119880-announce-tvscrapper-0-0-1/"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h')
license=('GPL2')
depends=('curl' 'jansson' 'libxml2' 'sqlite' "vdr-api=${_vdrapi}")
replaces=('vdr-tvscrapper')
_plugname=${pkgname//vdr-/}
source=("http://projects.vdr-developer.org/attachments/download/1742/$pkgname-$pkgver.tgz"
        "50-$_plugname.conf")
backup=("etc/vdr/conf.avail/50-$_plugname.conf"
        'var/lib/vdr/plugins/tvscraper/override.conf')
md5sums=('b379098b70fdd3a472c77708eab4d82e'
         '33dc17067410095e383835b2ee714a68')


build() {
  cd "${srcdir}/$_plugname-$pkgver"
  make
}

package() {
  cd "${srcdir}/$_plugname-$pkgver"
  make DESTDIR="$pkgdir" install

  install -Dm644 "$srcdir/50-$_plugname.conf" "$pkgdir/etc/vdr/conf.avail/50-$_plugname.conf"

  chown -R 666:666 "$pkgdir/var/lib/vdr"
}
