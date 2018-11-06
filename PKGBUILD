# Maintainer: surefire@cryptomile.net

pkgname=keeweb
pkgver=1.6.3
pkgrel=3
pkgdesc="Desktop password manager compatible with KeePass databases."
arch=('any')
url="https://github.com/keeweb/keeweb"
license=('MIT')
depends=('electron')
makedepends=(
	'asar'
	'npm'
	'libsass'
)
optdepends=('xdotool: for auto-type')
conflicts=('keeweb-desktop')
source=(
	"https://github.com/keeweb/keeweb/archive/v${pkgver}.tar.gz"
	'keeweb'
	'package.json.patch.js'
)

sha1sums=('75c054b23aa4f0f6fd067174623549f65ebe740a'
          'a2ab033d06abfe7616d2615d8edf7931f29efc96'
          'b945364dd81407f6031579added5cd7c696a8ab3')

prepare() {
	cd "${pkgname}-${pkgver}"

	# remove extra dependencies
	node ../package.json.patch.js

	sed -i \
		-e "/electronVersion/           d" \
		-e "/loader: 'babel-loader'/,+2 d" \
		-e "/loader: 'uglify-loader'/   d" \
		-e "/'eslint',/                 d" \
		-e "/'uglify',/                 d" \
	Gruntfile.js

	# hide electron menu
	sed -i \
		-e '/mainWindow = new electron\.BrowserWindow({$/ a \        autoHideMenuBar: true,' \
	desktop/app.js

	sed -i \
		-e '/Exec=/ c \Exec=keeweb %u' \
	package/deb/usr/share/applications/keeweb.desktop

	# downgrade broken bower package https://github.com/eligrey/FileSaver.js/issues/409
	sed -i \
		-e '/FileSaver.js/ s|eligrey/FileSaver.js|\0#1.3.4|' \
	bower.json
}

build() {
	cd "${pkgname}-${pkgver}"

	export SKIP_SASS_BINARY_DOWNLOAD_FOR_CI=1
	export LIBSASS_EXT=auto

	npm install --no-package-lock
	node_modules/.bin/grunt --skip-sign build-web-app build-desktop-app-content

	asar p tmp/desktop/app ../keeweb.asar
}

package() {
	cd "${pkgname}-${pkgver}"

	install -Dm0644 -t "${pkgdir}/usr/lib/keeweb" ../keeweb.asar
	install -Dm0755 -t "${pkgdir}/usr/bin"        ../keeweb

	install -Dm0644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE DEPS-LICENSE

	install -Dm0644 -t "${pkgdir}/usr/share/mime/packages" package/deb/usr/share/mime/packages/keeweb.xml
	install -Dm0644 -t "${pkgdir}/usr/share/applications"  package/deb/usr/share/applications/keeweb.desktop

	install -Dm0644 graphics/128x128.png "${pkgdir}/usr/share/pixmaps/keeweb.png"
}
