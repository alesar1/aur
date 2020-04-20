# Maintainer graysky <graysky AT archlinux DOT us>
#
pkgname=adguardhome
_pkgname=AdGuardHome
pkgver=0.101.0
pkgrel=2
pkgdesc="Network-wide ads and trackers blocking DNS server"
arch=('x86_64')
url="https://github.com/AdguardTeam/AdGuardHome"
license=('GPL')
source=("$pkgname-$pkgver.tar.gz::https://github.com/AdguardTeam/AdGuardHome/archive/v$pkgver.tar.gz"
$_pkgname.service
)
makedepends=(go npm git)
install=readme.install
sha256sums=('924392f3659de076fa8c1200e90bbd74c214ef0869fcd580e8f226dafd84558c'
            '6a4d449f4749c5528cd324bb1bfa55090fb43a58dd3038f39f1ca9aed4a1b5ae')

build(){
  cd "$_pkgname-$pkgver"
  make
}

package() {
  install -Dm755 "$_pkgname-$pkgver/$_pkgname" "$pkgdir/var/lib/adguardhome/$_pkgname"
  install -Dm644 "$_pkgname.service" "$pkgdir/usr/lib/systemd/system/$_pkgname.service"
}
