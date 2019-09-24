# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='mongodb-compass-isolated-beta'
pkgver='1.20.0beta.4'
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Isolated Edition (beta version)'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom')
depends=('electron3' 'libsecret')
optdepends=('gnome-keyring')
source=(
	'https://downloads.mongodb.com/compass/beta/mongodb-compass-isolated-beta-1.20.0-beta.4.x86_64.rpm'
	'launch.sh'
)
sha256sums=(
	'45434cd6367992f45131e2b0fad8cae03289340b91b337ff313e2a718af03db1'
	'c2c2797f4442fde3545d13f296a7307f46d0175cfef59f6848f1660a8a554851'
)

package() {
	install -Dm644 "$srcdir/usr/share/mongodb-compass-isolated-beta/resources/app.asar" "$pkgdir/usr/lib/mongodb-compass-isolated-beta/app.asar"
	cp -r "$srcdir/usr/share/mongodb-compass-isolated-beta/resources/app.asar.unpacked/" "$pkgdir/usr/lib/mongodb-compass-isolated-beta/app.asar.unpacked/"
	install -Dm755 "$srcdir/launch.sh" "$pkgdir/usr/bin/mongodb-compass-isolated-beta"
	install -Dm644 "$srcdir/usr/share/mongodb-compass-isolated-beta/LICENSE" "$pkgdir/usr/share/licenses/mongodb-compass-isolated-beta/LICENSE"
	install -Dm644 "$srcdir/usr/share/mongodb-compass-isolated-beta/LICENSES.chromium.html" "$pkgdir/usr/share/licenses/mongodb-compass-isolated-beta/LICENSES.chromium.html"
	install -Dm644 "$srcdir/usr/share/applications/mongodb-compass-isolated-beta.desktop" "$pkgdir/usr/share/applications/mongodb-compass-isolated-beta.desktop"
	install -Dm644 "$srcdir/usr/share/pixmaps/mongodb-compass-isolated-beta.png" "$pkgdir/usr/share/pixmaps/mongodb-compass-isolated-beta.png"
}
