# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='mongodb-compass-readonly'
pkgver='1.19.4'
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Readonly Edition'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom')
depends=('electron3' 'libsecret')
optdepends=('gnome-keyring')
source=(
	'https://downloads.mongodb.com/compass/mongodb-compass-readonly-1.19.4.x86_64.rpm'
	'launch.sh'
)
sha256sums=(
	'669b65e62e94b2ac2832de74930b47c3752687554975e5d48abf47561b02d544'
	'7b4ba718a5e9d42402c251b1216a586dd3c0b9504affdd18c1eac1b2040bcea5'
)

package() {
	install -Dm644 "$srcdir/usr/share/mongodb-compass-readonly/resources/app.asar" "$pkgdir/usr/lib/mongodb-compass-readonly/app.asar"
	cp -r "$srcdir/usr/share/mongodb-compass-readonly/resources/app.asar.unpacked/" "$pkgdir/usr/lib/mongodb-compass-readonly/app.asar.unpacked/"
	install -Dm755 "$srcdir/launch.sh" "$pkgdir/usr/bin/mongodb-compass-readonly"
	install -Dm644 "$srcdir/usr/share/mongodb-compass-readonly/LICENSE" "$pkgdir/usr/share/licenses/mongodb-compass-readonly/LICENSE"
	install -Dm644 "$srcdir/usr/share/mongodb-compass-readonly/LICENSES.chromium.html" "$pkgdir/usr/share/licenses/mongodb-compass-readonly/LICENSES.chromium.html"
	install -Dm644 "$srcdir/usr/share/applications/mongodb-compass-readonly.desktop" "$pkgdir/usr/share/applications/mongodb-compass-readonly.desktop"
	install -Dm644 "$srcdir/usr/share/pixmaps/mongodb-compass-readonly.png" "$pkgdir/usr/share/pixmaps/mongodb-compass-readonly.png"
}
