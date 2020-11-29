# Maintainer:  max.bra <max dot bra dot gtalk at gmail dot com>

pkgname=pi-hole-standalone
_pkgname=pi-hole
pkgver=5.2
pkgrel=1
_now=`date +%N`
pkgdesc='The Pi-hole is an advertising-aware DNS/Web server. Arch alteration for standalone PC.'
arch=('any')
license=('EUPL-1.1')
url="https://github.com/pi-hole/pi-hole"
depends=('pi-hole-ftl' 'net-tools' 'iproute2' 'bind-tools' 'sudo')
conflicts=('pi-hole-server')
install=$pkgname.install
backup=('etc/dnsmasq.d/01-pihole.conf')

source=($pkgname-core-$pkgver.tar.gz::https://github.com/$_pkgname/$_pkgname/archive/v$pkgver.tar.gz
	arch-server-core-$pkgver-$_now.patch::"https://raw.githubusercontent.com/max72bra/pi-hole-standalone-archlinux-customization/master/arch-server-core-$pkgver.patch"
	dnsmasq.include
	$_pkgname-gravity.service
	$_pkgname-gravity.timer
	mimic_setupVars.conf.sh
	mimic_basic-install.sh
	piholeDebug.sh)

md5sums=('0c83daab89ba781840d903eefc559bb4'
         'ebdb971b5c7ba0f9ecade64e9c2c5f8a'
         '16cb5e4da1341fd971d6094ce2d44029'
         '047f13d4ac97877f724f87b002aaee63'
         'd42a864f88299998f8233c0bc0dd093d'
         '7821b6dfe380955073701e5acd1587a2'
         'c9a5fa5fe9b794b0630cb53fb343f598'
         '6139cbc8cf38a7bb2a32f9e855eaf7d9')

prepare() {
  cd "$srcdir"/"$_pkgname"-"$pkgver"
  patch -Np1 -i "$srcdir"/arch-server-core-$pkgver-$_now.patch
}

package() {
  cd "$srcdir"
  install -Dm755 $_pkgname-$pkgver/pihole "$pkgdir"/usr/bin/pihole

  install -dm755 "$pkgdir"/opt/pihole
  install -Dm755 $_pkgname-$pkgver/gravity.sh "$pkgdir"/opt/pihole/gravity.sh
  install -Dm755 $_pkgname-$pkgver/advanced/Scripts/list.sh "$pkgdir"/opt/pihole/list.sh
  install -Dm755 $_pkgname-$pkgver/advanced/Scripts/webpage.sh "$pkgdir"/opt/pihole/webpage.sh
  install -Dm755 $_pkgname-$pkgver/advanced/Scripts/wildcard_regex_converter.sh "$pkgdir"/opt/pihole/wildcard_regex_converter.sh
  install -Dm755 $_pkgname-$pkgver/advanced/Scripts/query.sh "$pkgdir"/opt/pihole/query.sh
  install -Dm755 $_pkgname-$pkgver/advanced/Scripts/pihole-reenable.sh "$pkgdir"/opt/pihole/pihole-reenable.sh
  install -Dm755 $_pkgname-$pkgver/advanced/Scripts/piholeARPTable.sh "$pkgdir"/opt/pihole/piholeARPTable.sh

  install -Dm644 $_pkgname-$pkgver/advanced/Scripts/COL_TABLE "$pkgdir"/opt/pihole/COL_TABLE

  install -Dm644 $_pkgname-$pkgver/advanced/Templates/gravity.db.sql "$pkgdir"/opt/pihole/gravity.db.sql
  install -Dm644 $_pkgname-$pkgver/advanced/Templates/gravity_copy.sql "$pkgdir"/opt/pihole/gravity_copy.sql

  install -Dm755 piholeDebug.sh "$pkgdir"/opt/pihole/piholeDebug.sh
  install -Dm755 mimic_setupVars.conf.sh "$pkgdir"/opt/pihole/mimic_setupVars.conf.sh
  install -Dm755 mimic_basic-install.sh "$pkgdir"/opt/pihole/basic-install.sh

  cp -dpr --no-preserve=ownership $_pkgname-$pkgver/advanced/Scripts/database_migration "$pkgdir"/opt/pihole/

  install -Dm644 $_pkgname-$pkgver/advanced/dnsmasq.conf.original "$pkgdir"/etc/dnsmasq.conf
  install -Dm644 dnsmasq.include "$pkgdir"/etc/dnsmasq.d/01-pihole.conf

  install -dm755 "$pkgdir/usr/lib/systemd/system/multi-user.target.wants"
  install -Dm644 "$_pkgname-gravity.timer" "$pkgdir/usr/lib/systemd/system/$_pkgname-gravity.timer"
  install -Dm644 "$_pkgname-gravity.service" $pkgdir/usr/lib/systemd/system/$_pkgname-gravity.service
  ln -s ../$_pkgname-gravity.timer "$pkgdir/usr/lib/systemd/system/multi-user.target.wants/$_pkgname-gravity.timer"

  install -dm775 "$pkgdir"/etc/pihole
  install -dm755 "$pkgdir"/usr/share/pihole/configs
  install -Dm644 $_pkgname-$pkgver/adlists.list "$pkgdir"/etc/pihole/adlists.list
  
  install -dm755 "$pkgdir"/usr/share/licenses/pihole
  install -Dm644 ${pkgname%-*}-$pkgver/LICENSE "$pkgdir"/usr/share/licenses/pihole/Pi-hole
}

