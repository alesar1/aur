# Maintainer: Peter Smit <peter@smitmail.eu>

_pkgname=onedrive
pkgname=$_pkgname-abraunegg
pkgver=2.3.2
pkgrel=1
epoch=
pkgdesc="Free OneDrive client written in D - abraunegg's fork. Follows the releases on https://github.com/abraunegg/onedrive/releases"
arch=('i686' 'x86_64')
url="https://github.com/abraunegg/onedrive"
license=('GPL')
conflicts=('onedrive' 'onedrive-abraunegg-git' 'onedrive-bin' 'onedrive-git' 'onedrive-fork-git')
source=("https://github.com/abraunegg/onedrive/archive/v$pkgver.tar.gz")
provides=("onedrive=$pkgver")
depends=('curl' 'libnotify' 'sqlite')
makedepends=('dmd')

build() {
	cd "$_pkgname-$pkgver"
	make PREFIX=/usr
}

package() {
	cd "$_pkgname-$pkgver"
	echo "$pkgver" > version
	make NOTIFICATIONS=1 PREFIX=/usr DESTDIR="$pkgdir" install
}
md5sums=('6a1dc29c7a915774cfd11d2cd7becabf')
