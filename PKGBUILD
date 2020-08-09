# Maintainer: TheCynicalTeam <TheCynicalTeam@github.com>
# Contributor: TheCynicalTeam <TheCynicalTeam@github.com>
pkgname=multimonitorlock
pkgver=2020.7.9
pkgrel=1
pkgdesc="A simple lock script for i3lock-color"
arch=('any')
url="https://github.com/TheCynicalTeam/${pkgname}"
license=('GNU General Public License v3.0')
depends=('i3lock-color' 'imagemagick' 'xorg-xrandr' 'xorg-xdpyinfo' 'bc')
optdepends=('feh: Allows setting wallpaper' 'multimonitorlock-gui: Allows the background to be changed')
conflicts=('multilockscreen-git' 'betterlockscreen' 'betterlockscreen-git')
source=("https://github.com/TheCynicalTeam/$pkgname/archive/$pkgver-$pkgrel.tar.gz")
sha256sums=("SKIP")
install=${pkgname}.install

package() {
	_srcdir="$srcdir/$pkgname-$pkgver-$pkgrel"
	mkdir -p "$pkgdir/usr/bin"
	cp "$srcdir/$pkgname-$pkgver-$pkgrel/$pkgname" "$pkgdir/usr/bin/$pkgname"
	if [[ $(pidof systemd) ]]; then
		_serviceloc="$pkgdir/usr/lib/systemd/system"
		mkdir -p "$_serviceloc"
		_servicename="$pkgname@.service"
		cp "$_srcdir/system/$_servicename" "$_serviceloc/$_servicename"
	fi
	mkdir -p "$pkgdir/usr/share/doc/$pkgname/examples"
	cp "$_srcdir/examples/config" "$pkgdir/usr/share/doc/$pkgname/examples/config"
}
