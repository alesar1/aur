## Maintainer: pyamsoft <pyam.soft@gmail.com>

pkgname=steam-wrapper
pkgdesc="Steam wrapper for common operations"
pkgver=0.1.7
pkgrel=1
arch=('i686' 'x86_64')
optdepends=('steam-native: Native runtime library support')
depends=('steam' 'bash' 'coreutils')
makedepends=()
provides=('steam-wrapper')
conflicts=('steam-wrapper')
license=('custom')
url="https://github.com/pyamsoft/${pkgname}/archive/${pkgver}.tar.gz"
source=("$url")

package() {
	cd "$srcdir"/"$pkgname-$pkgver"

	# Install the script
	mkdir -p "$pkgdir"/usr/bin/
	cp "${pkgname}" "$pkgdir"/usr/bin/
	chmod 755 "$pkgdir"/usr/bin/${pkgname}

	# Install the desktop file
	mkdir -p "$pkgdir"/usr/share/applications/
	cp ${pkgname}.desktop "$pkgdir"/usr/share/applications/
	chmod 644 "$pkgdir"/usr/share/applications/${pkgname}.desktop

	# Install the default configuration
	mkdir -p "$pkgdir"/etc/steam-wrapper/
	cp ${pkgname}.conf "$pkgdir"/etc/${pkgname}/${pkgname}.conf
	chmod 644 "$pkgdir"/etc/${pkgname}/${pkgname}.conf
}
sha256sums=('32b588b110fc2951e68027112209175d656a0512b71d1044d1e12ade71792ffa')

