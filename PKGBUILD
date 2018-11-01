# Maintainer: Jason Gonzalez <jason at jasong-designs dot com>

pkgname=goldbars
pkgver=10_11_18
pkgrel=1
pkgdesc="Gold 3-D theme collection for GTK"
arch=('any')
url="https://www.jasong-designs.com/2018/10/05/goldbars/"
license=('GPL3')
depends=('gtk3' 'gtk2' 'gtk-engine-murrine' )
optdepends=('openbox: optional window manager theme' 'metacity: optional window manager theme' 'ttf-dejavu: font support')
changelog=
source=("https://github.com/jgpws/gold-bars/raw/master/downloads/$pkgname-rev2-${pkgver//_/-}.tar.gz")

package() {
	cd "${srcdir}"
	install -dm755 "$pkgdir/usr/share/themes"
	cp -R GoldBars "$pkgdir/usr/share/themes"
}


md5sums=('52022484677edd96aabccdb2189e6e05')
