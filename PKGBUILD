# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Sébastien Luttringer

pkgname=unifi-controller-beta
pkgver=4.8.6
_pkgver=c922c1b6
pkgrel=1
pkgdesc='Controller for Ubiquiti UniFi accesspoints'
arch=('any')
url='http://www.ubnt.com/'
license=('custom')
depends=('mongodb' 'java-runtime')
conflicts=('unifi-controller')
# needed to not break configuration accross upgrades
backup=('opt/unifi/data/system.properties')
install=unifi.install
source=("UniFi-$pkgver.zip::http://dl.ubnt.com/unifi/$pkgver-$_pkgver/UniFi.unix.zip"
        'unifi.service')
md5sums=('030f5e5c21fe82e03b3dc2b39f6d12a4'
         '04934ee4be43b6f80db610d140edf49f')

package() {
  install -d "$pkgdir/opt"
  cp -ar UniFi "$pkgdir/opt/unifi"
  chown -R 113:113 "$pkgdir/opt/unifi"
  rm "$pkgdir/opt/unifi/readme.txt"
  install -D -m 644 unifi.service "$pkgdir/usr/lib/systemd/system/unifi.service"
}
