# Maintainer: Daniel Peukert <daniel@peukert.cc>
_pkgname='mongodb-compass-readonly'
_edition=' Readonly'
pkgname="$_pkgname-bin"
_pkgver='1.27.1'
pkgver="$(printf '%s' "$_pkgver" | tr '-' '.')"
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Readonly Edition - binary version'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom:SSPL')
depends=(
	# electron
	'c-ares' 'ffmpeg' 'gtk3' 'http-parser' 'libevent' 'libnghttp2' 'libxslt' 'libxss' 'minizip' 'nss' 're2' 'snappy'
	# compass
	'krb5' 'libsecret' 'lsb-release'
)
optdepends=('org.freedesktop.secrets')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$pkgname-$pkgver-$pkgrel.rpm::https://github.com/mongodb-js/compass/releases/download/v$_pkgver/$_pkgname-$_pkgver.x86_64.rpm")
sha256sums=('7ec322cf5f291aa4411779ec4506c7114f31c7496c24e8bcb858e08b7224f107')

package() {
	cd "$srcdir/"

	install -dm755 "$pkgdir/opt/"
	cp -r --no-preserve=ownership --preserve=mode "usr/lib/$_pkgname/" "$pkgdir/opt/$_pkgname/"

	install -dm755 "$pkgdir/usr/bin/"
	ln -sf "/opt/$_pkgname/MongoDB Compass$_edition" "$pkgdir/usr/bin/$_pkgname"

	install -Dm644 "usr/share/applications/$_pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
	install -Dm644 "usr/share/pixmaps/$_pkgname.png" "$pkgdir/usr/share/pixmaps/$_pkgname.png"

	install -dm755 "$pkgdir/usr/share/licenses/$pkgname/"
	for _license in 'LICENSE' 'LICENSES.chromium.html'; do
		ln -sf "/opt/$_pkgname/$_license" "$pkgdir/usr/share/licenses/$pkgname/$_license"
	done
}
