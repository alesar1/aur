pkgname=gnome-shell-extension-appindicator
pkgver=33
pkgrel=1
pkgdesc="Integrates AppIndicators into GNOME Shell"
arch=('any')
url="https://github.com/ubuntu/gnome-shell-extension-appindicator"
license=('GPL')
depends=('gnome-shell>=3.34')
optdepends=(
	'libappindicator-gtk2: support GTK+2 applications'
	'libappindicator-gtk3: support GTK+3 applications'
	'libappindicator-sharp: support .net applications'
)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('3ef412a40ff22ac124c222ad33c3d8cc45791ec14552e1842b2dd22f9a0710b9')

package() {
	cd "$pkgname-$pkgver"

	local _uuid="appindicatorsupport@rgcjonas.gmail.com"
	local _destdir="$pkgdir/usr/share/gnome-shell/extensions/$_uuid"

	install -d "$_destdir"
	cp --parents -t "$_destdir" metadata.json *.js interfaces-xml/*.xml
}
