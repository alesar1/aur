# Maintainer: Peter Smit <peter@smitmail.eu>

_pkgname=onedrive
pkgname=$_pkgname-abraunegg
pkgver=2.3.10
pkgrel=2
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
        ./configure --sysconfdir=/etc --prefix=/usr --enable-notifications --enable-completions
        make
}

package() {
	cd "$_pkgname-$pkgver"
	make DESTDIR=$pkgdir PREFIX=/usr install
}
md5sums=('390c3b79c497c76c13a0775d524b003a')
