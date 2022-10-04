# Maintainer: Jason Gonzalez <jason at jasong-designs dot com>

pkgname=omnu-champagne
pkgver=09_28_22
pkgrel=1
pkgdesc="A champagne colored GTK theme collection designed with Oomox"
arch=('any')
url="https://www.jasong-designs.com/2022/09/28/omnu-champagne/"
license=('GPL3')
depends=('gtk3' 'gtk2' 'gtk-engine-murrine' 'gtk-engines')
optdepends=('openbox: optional window manager theme' 'metacity: optional window manager theme' 'xfwm4: optional window manager theme')
changelog=
source=("https://github.com/jgpws/omnu-champagne/raw/main/downloads/$pkgname-${pkgver//_/-}.tar.gz")

package() {
	cd "${srcdir}"
	install -dm755 "$pkgdir/usr/share/themes"
	cp -R OmNu-Champagne "$pkgdir/usr/share/themes"
}
sha256sums=('9be6b84f87ce8a071099975fd5ecbbbe16a7cafb90805bee028d9dea2c5bc2ef')
