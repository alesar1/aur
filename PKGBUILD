# Maintainer: surefire <surefire at cryptomile dot net>
# Contributor wenLiangcan <boxeed at gmail dot com>

pkgname=keeweb-git
pkgver=1.17.0+3+gf8ec47bf
_electron=electron
pkgrel=1
pkgdesc="Desktop password manager compatible with KeePass databases. (develop branch)"
arch=('any')
url="https://keeweb.info"
license=('MIT')
depends=(
	$_electron
	'org.freedesktop.secrets'
	'libusb'
)
makedepends=(
	'asar'
	'git'
	'libsass'
	'npm'
)
conflicts=('keeweb' 'keeweb-desktop')
provides=('keeweb' 'keeweb-desktop')
source=(
	"${pkgname}::git+https://github.com/keeweb/keeweb.git#branch=develop"
	"git+https://github.com/keeweb/keeweb-native-modules.git"
	'package.json.patch.js'
)

sha1sums=('SKIP'
          'SKIP'
          '5e2a12694cf56ec9ed558554819dba0187e7fbdc')

case "$CARCH" in
	i686)    _arch=ia32;;
	x86_64)  _arch=x64;;
	aarch64) _arch=arm64;;
	*)       _arch=DUMMY;;
esac

pkgver() {
	cd "${pkgname}"
	git describe --long --tags | sed 's/^v//; s/_/./g; s/-/+/g'
}

prepare() {
	cd "${srcdir}/${pkgname}"

	# remove extra dependencies
	node ../package.json.patch.js

	sed -i \
		-e "/const electronVersion/  s/pkg.dependencies.electron/'$(</usr/lib/${_electron}/version)'/" \
	Gruntfile.js

	sed -i \
		-e "/'eslint',/  d" \
	grunt.tasks.js

	sed -i \
		-e "/const BundleAnalyzerPlugin/              d" \
		-e "/new BundleAnalyzerPlugin({$/, /^\s*})$/  d" \
	build/webpack.config.js
}

build() {
	export npm_config_build_from_source=true
	export npm_config_optional=false

	cd "${srcdir}/${pkgname}"

	export SKIP_SASS_BINARY_DOWNLOAD_FOR_CI=1
	export SASS_FORCE_BUILD=1
	export LIBSASS_EXT=auto

	npm install --nodedir=/usr

	npx grunt build-web-app build-desktop-app-content

	asar p tmp/desktop/app tmp/desktop/app.asar

	cat <<-EOF > tmp/desktop/keeweb
		#!/usr/bin/sh
		exec ${_electron} /usr/lib/keeweb/app.asar --disable-updater "\$@"
	EOF

	cd "${srcdir}/keeweb-native-modules"

	npm install --ignore-scripts

	HOME="${srcdir}/.electron-gyp" \
	npm_config_use_system_libusb=true \
	npx electron-rebuild --arch="${_arch}" --version="$(</usr/lib/${_electron}/version)" --only=argon2,keytar,usb,yubikey-chalresp,keyboard-auto-type
}

package() {
	cd "${srcdir}/${pkgname}"

	install -Dm0755 -t "${pkgdir}/usr/bin" tmp/desktop/keeweb
	install -Dm0644 -t "${pkgdir}/usr/lib/keeweb" tmp/desktop/app.asar
	install -Dm0644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE DEPS-LICENSE
	install -Dm0644 -t "${pkgdir}/usr/share/mime/packages" package/deb/usr/share/mime/packages/keeweb.xml
	install -Dm0644 -t "${pkgdir}/usr/share/applications"  package/deb/usr/share/applications/keeweb.desktop

	install -Dm0644 graphics/128x128.png "${pkgdir}/usr/share/pixmaps/keeweb.png"

	local _src_mdir="${srcdir}/keeweb-native-modules/node_modules"
	local _pkg_mdir="${pkgdir}/usr/lib/keeweb/node_modules/@keeweb/keeweb-native-modules"

	install -Dm0644 "${_src_mdir}/usb/build/Release/usb_bindings.node" \
		"${_pkg_mdir}/usb-linux-${_arch}.node"

	for _mod in argon2 keyboard-auto-type keytar yubikey-chalresp; do
		install -Dm0644 "${_src_mdir}/${_mod}/build/Release/${_mod}.node" \
			"${_pkg_mdir}/${_mod}-linux-${_arch}.node"
	done
}
