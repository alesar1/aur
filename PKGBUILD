# Maintainer: tinywrkb <tinywrkb@gmail.com>
# Contributor: theferdi265 at gmail dot com
#
# Original package: gtk-theme-numix-solarized

pkgname=gtk3-theme-numix-solarized
_pkgname=gtk-theme-numix-solarized
pkgver=20180913
pkgrel=1
pkgdesc="Solarized versions of GTK3 theme, compatible with GTK 3.20"
arch=('any')
url="https://github.com/Ferdi265/numix-solarized-gtk-theme"
license=('GPL3')
source=("https://github.com/Ferdi265/numix-solarized-gtk-theme/releases/download/$pkgver/NumixSolarized-$pkgver.tar.gz")
sha256sums=('5cf43ce96ed4b60329498edc3ec1ef86aa8858b2c026a679bf17c183b2deb373')

package() {
	find NumixSolarized/ -type d -regex \
		'.*gtk-2\.0\|.*gtk-3\.0\|.*metacity-1\|.*openbox-3\|.*unity\|.*xfce-notify-4.0\|.*xfwm4' \
		-prune -exec /bin/rm -r "{}" \;
	mkdir -p $pkgdir/usr/share/themes
	mv NumixSolarized/* $pkgdir/usr/share/themes
}
