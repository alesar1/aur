# Maintainer:
# Contributor: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: FabioLolix <fabio dot loli at disroot dot org>
# Contributor: Conor Anderson <conor at conr dot ca>
pkgname=lighttable-git
pkgver=0.8.1.r114.g3760844
pkgrel=1
pkgdesc="Next generation code editor and IDE with instant feedback."
arch=('i686' 'x86_64')
url="http://lighttable.com"
license=('MIT')
depends=('gconf' 'gtk3' 'nss' 'libxss' 'java-runtime')
makedepends=('git' 'npm' 'leiningen')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}" "${pkgname%-git}-bin")
source=("${pkgname%-git}::git+https://github.com/LightTable/LightTable.git"
        "${pkgname%-git}.desktop")
sha256sums=('SKIP'
            '0b86a091507d4f85e7c113807d8524a03e4ce70e763c70239e35974c3e2fb587')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/${pkgname%-git}"

	# Use temporary npm cache
	mkdir -p npm-cache
	sed -i 's|npm install|npm install --cache ../../npm-cache|g' script/build.sh
}

build() {
	cd "$srcdir/${pkgname%-git}"
	script/build.sh
}

package() {
	cd "$srcdir/${pkgname%-git}"

	# Place main files
	install -d "$pkgdir/opt/${pkgname%-git}"
	cp -a "builds/${pkgname%-git}-0.9.0-linux"/* "$pkgdir/opt/${pkgname%-git}"

	# Link to binary
	install -d "$pkgdir/usr/bin"
	ln -s "/opt/${pkgname%-git}/LightTable" "$pkgdir/usr/bin/${pkgname%-git}"

	# Install desktop file
	install -Dm644 "$srcdir/${pkgname%-git}.desktop" -t "$pkgdir/usr/share/applications"

	# Install icon
	install -Dm644 deploy/core/img/lticon.png "$pkgdir/usr/share/pixmaps/${pkgname%-git}.png"

	# Install license in proper location
	install -dm644 "$pkgdir/usr/share/licenses/${pkgname%-git}"
	mv "$pkgdir/opt/${pkgname%-git}/LICENSE" "$pkgdir/usr/share/licenses/${pkgname%-git}/LICENSE"
}
