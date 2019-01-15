# Maintainer: surefire <surefire at cryptomile dot net>
# Contributor wenLiangcan <boxeed at gmail dot com>

pkgname=keeweb-git
pkgver=1.7.3+19+g903d6dc
pkgrel=1
pkgdesc="Desktop password manager compatible with KeePass databases. (develop branch)"
arch=('any')
url="https://github.com/keeweb/keeweb"
license=('MIT')
depends=('electron')
makedepends=(
	'asar'
	'git'
	'npm'
	'libsass'
)
optdepends=('xdotool: for auto-type')
conflicts=('keeweb' 'keeweb-desktop')
provides=('keeweb' 'keeweb-desktop')
source=(
	"${pkgname}::git+https://github.com/keeweb/keeweb.git#branch=develop"
	'hide-menubar.patch'
	'keeweb.sh'
	'package.json.patch.js'
)

sha1sums=('SKIP'
          'a55c2ed276c6073b7954452cdc88209633d51ace'
          'a2ab033d06abfe7616d2615d8edf7931f29efc96'
          '914afdd9651e71091d4b927cabd25d75786ec7d4')

pkgver() {
	cd "${pkgname}"
	git describe --long --tags | sed 's/^v//; s/_/./g; s/-/+/g'
}

prepare() {
	cd "${pkgname}"

	patch -Np1 -i ../hide-menubar.patch

	# remove extra dependencies
	node ../package.json.patch.js

	sed -i \
		-e "/const electronVersion/       s/pkg.dependencies.electron/'$(</usr/lib/electron/version)'/" \
	Gruntfile.js

	sed -i \
		-e "/'eslint',/                 d" \
		-e "/'uglify',/                 d" \
	grunt.tasks.js

	sed -i \
		-e '/Exec=/ c \Exec=keeweb %u' \
	package/deb/usr/share/applications/keeweb.desktop
}

build() {
	cd "${pkgname}"

	export SASS_FORCE_BUILD=1
	export LIBSASS_EXT=auto
	export npm_config_nodedir=/usr
	export npm_config_optional=false

	npm install

	ln -fs normalize.css node_modules/normalize.css/normalize.scss

	npx grunt build-web-app build-desktop-app-content

	asar p tmp/desktop/app ../keeweb.asar
}

package() {
	cd "${pkgname}"

	install -Dm0755 ../keeweb.sh "${pkgdir}/usr/bin/keeweb"
	install -Dm0644 -t "${pkgdir}/usr/lib/keeweb" ../keeweb.asar

	install -Dm0644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE DEPS-LICENSE

	install -Dm0644 -t "${pkgdir}/usr/share/mime/packages" package/deb/usr/share/mime/packages/keeweb.xml
	install -Dm0644 -t "${pkgdir}/usr/share/applications"  package/deb/usr/share/applications/keeweb.desktop

	install -Dm0644 graphics/128x128.png "${pkgdir}/usr/share/pixmaps/keeweb.png"
}
