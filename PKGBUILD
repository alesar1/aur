# Maintainer: Daniel Peukert <daniel@peukert.cc>
_target='compass-readonly'
_edition=' Readonly'
_pkgname="mongodb-$_target"
pkgname="$_pkgname-git"
pkgver='r14047.g8fd35b90a'
pkgrel='1'
epoch='1'
pkgdesc='The official GUI for MongoDB - Readonly Edition - git version'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url='https://www.mongodb.com/products/compass'
license=('custom:SSPL')
_electronpkg='electron13'
depends=("$_electronpkg" 'krb5' 'libsecret' 'lsb-release')
# We're depending on node v16 until https://github.com/nodejs/node-gyp/issues/2534 is fixed
makedepends=('git' 'nodejs-lts-gallium' 'npm>=7.0.0' 'python' 'unzip')
optdepends=('org.freedesktop.secrets')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=(
	"$pkgname::git+https://github.com/mongodb-js/compass"
	'hadron-build.diff'
	'browserslist.diff'

)
sha512sums=('SKIP'
            '03b766834ce0c85abca10fe98ab4aa12a20d1110a4afb11b85c06e7e34ceec1163933be51d7a1881fd576d2cef01118319c856e9bcac92aaefb95084dc2a97f9'
            'c7ed26d911cea41cea65ede61d41c22c24296c88c4a21532d81b3092844cd65a866fe8e390570362eb7f0200a897a86e97387e8afb4e1ad8e8398c7265d529d2')

_sourcedirectory="$pkgname"

prepare() {
	cd "$srcdir/$_sourcedirectory/"

	# Force the newest version of electron-to-chromium
	sed -E -i 's|(.*)("electron": ")|\1"electron-to-chromium": "'"$(npm view 'electron-to-chromium@latest' version)"'",\n\1\2|' 'packages/compass/package.json'

	# Loosen node version restriction
	sed -E -i 's|"node": "\^14.|"node": ">=14.|' 'packages/compass/package.json' 'package-lock.json'

	# Set system Electron version for ABI compatibility
	sed -E -i 's|("electron": ").*"|\1'"$(cat "/usr/lib/$_electronpkg/version")"'"|' {'configs','packages'}'/'*'/package.json'

	# Run the first part of npm run bootstrap
	npm install

	# Apply hadron-build fixes
	patch -d 'node_modules/hadron-build/' --forward -p1 < "$srcdir/hadron-build.diff"

	# Apply browserslist fixes
	for _folder in 'node_modules/@mongodb-js/'*'/node_modules/browserslist'; do
		if grep -q '"version": "2' "$_folder/package.json"; then
			patch -d "$_folder/" --forward -p1 < "$srcdir/browserslist.diff"
		fi
	done

	# Run the second part of npm run bootstrap
	npx lerna run bootstrap --stream
}

pkgver() {
	cd "$srcdir/$_sourcedirectory/"
	printf 'r%s.g%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/$_sourcedirectory/"

	# electron-packager does not support building against a local electron binary,
	# the best we can do for now is to just set the electron version in package.json
	# and let electron-packager use it for building
	# https://github.com/electron/electron-packager/issues/187

	HADRON_DISTRIBUTION="$_target" npm run package-compass
}

package() {
	local _distFolder="$srcdir/$_sourcedirectory/packages/compass/dist/MongoDB Compass$_edition Dev-linux"
	case "$CARCH" in
		i686)
			_distFolder="$_distFolder-ia32"
		;;
		armv7h)
			_distFolder="$_distFolder-armv7l"
		;;
		aarch64)
			_distFolder="$_distFolder-arm64"
		;;
		*)
			_distFolder="$_distFolder-x64"
		;;
	esac
	cd "$_distFolder/"

	install -Dm644 'resources/app.asar' "$pkgdir/usr/lib/$_pkgname/app.asar"
	cp -r --no-preserve=ownership --preserve=mode 'resources/app.asar.unpacked/' "$pkgdir/usr/lib/$_pkgname/app.asar.unpacked/"

	install -dm755 "$pkgdir/usr/bin/"
	cat << EOF > "$pkgdir/usr/bin/$_pkgname"
#!/bin/sh
NODE_ENV=production exec $_electronpkg '/usr/lib/$_pkgname/app.asar' "\$@"
EOF
	chmod +x "$pkgdir/usr/bin/$_pkgname"

	install -dm755 "$pkgdir/usr/share/applications/"
	cat << EOF > "$pkgdir/usr/share/applications/$_pkgname.desktop"
[Desktop Entry]
Name=MongoDB Compass$_edition
Comment=The official GUI for MongoDB
Exec=$_pkgname %U
Icon=$_pkgname
Type=Application
StartupNotify=true
Categories=Office;Database;Building;Debugger;IDE;GUIDesigner;Profiling;
EOF

	install -Dm644 "$srcdir/$_sourcedirectory/packages/compass/app-icons/linux/mongodb-compass.png" "$pkgdir/usr/share/pixmaps/$_pkgname.png"

	install -dm755 "$pkgdir/usr/share/licenses/$pkgname/"
	for _license in 'LICENSE' 'LICENSES.chromium.html'; do
		install -Dm644 "$_license" "$pkgdir/usr/share/licenses/$pkgname/$_license"
	done
}
