# Maintainer: Daniel Peukert <daniel@peukert.cc>
_target='compass-isolated'
_edition=' Isolated Edition'
pkgname="mongodb-$_target"
_pkgver='1.32.6'
pkgver="$(printf '%s' "$_pkgver" | tr '-' '.')"
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Isolated Edition'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url='https://www.mongodb.com/products/compass'
license=('custom:SSPL')
depends=('krb5' 'libsecret' 'lsb-release')
makedepends=('git' 'python' 'unzip')
optdepends=('org.freedesktop.secrets')
source=(
	"$pkgname-$pkgver-$pkgrel.tar.gz::https://github.com/mongodb-js/compass/archive/v$_pkgver.tar.gz"
	'hadron-build.diff'
	'browserslist.diff'
)
sha512sums=('1e8a4a5271b66dba8b30a91a7bde4189b764d77156cc8f54a7e2629006ed4281542a8f0b53def3f9a939189da3593d8e4df20abc8c6468322e753b03268de36f'
            '8d26820139d918c4e9da05b062a86865664218bfbf32b9f002995c30fa22b64e088f59263bee5f8fb4797565fe88b7daf48c383a572c0ced657dab0639e57b94'
            'c7ed26d911cea41cea65ede61d41c22c24296c88c4a21532d81b3092844cd65a866fe8e390570362eb7f0200a897a86e97387e8afb4e1ad8e8398c7265d529d2')

# Set up dependencies based on if we're working with a beta release
if [[ $_target =~ .*-beta ]]; then
	_electronpkg='electron15'
	makedepends+=('nodejs>=16.0.0')
	makedepends+=('npm>=8.0.0')
else
	_electronpkg='electron13'
	makedepends+=('nodejs')
	makedepends+=('npm>=7.0.0')
fi

depends+=("$_electronpkg")

_sourcedirectory="compass-$_pkgver"

prepare() {
	cd "$srcdir/$_sourcedirectory/"

	# Loosen node version restriction on non-beta releases
	if [[ ! $_target =~ .*-beta ]]; then
		sed -E -i 's|"node": "\^14.|"node": ">=14.|' 'packages/compass/package.json' 'package-lock.json'
	fi

	# Set system Electron version for ABI compatibility
	sed -E -i 's|("electron": ").*"|\1'"$(cat "/usr/lib/$_electronpkg/version")"'"|' {'configs','packages'}'/'*'/package.json'

	# Force the newest version of electron-to-chromium
	sed -E -i 's|(.*)("electron": ")|\1"electron-to-chromium": "'"$(npm view 'electron-to-chromium@latest' version)"'",\n\1\2|' 'packages/compass/package.json'

	# Apply hadron-build fixes
	patch --forward -p1 < "$srcdir/hadron-build.diff"

	# Run the first part of npm run bootstrap
	npm install

	# Apply browserslist fixes
	for _folder in 'node_modules/@mongodb-js/'*'/node_modules/browserslist'; do
		if grep -q '"version": "2' "$_folder/package.json"; then
			patch -d "$_folder/" --forward -p1 < "$srcdir/browserslist.diff"
		fi
	done

	# Run the second part of npm run bootstrap
	npx lerna run bootstrap --stream
}

build() {
	cd "$srcdir/$_sourcedirectory/"

	# electron-packager does not support building against a local electron binary,
	# the best we can do for now is to just set the electron version in package.json
	# and let electron-packager use it for building
	# https://github.com/electron/electron-packager/issues/187

	HADRON_DISTRIBUTION="${_target%-beta}" npm run package-compass --openssl_fips=''
}

package() {
	local _distFolder="$srcdir/$_sourcedirectory/packages/compass/dist/MongoDB Compass$_edition-linux"
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

	install -Dm644 'resources/app.asar' "$pkgdir/usr/lib/$pkgname/app.asar"
	cp -r --no-preserve=ownership --preserve=mode 'resources/app.asar.unpacked/' "$pkgdir/usr/lib/$pkgname/app.asar.unpacked/"

	install -dm755 "$pkgdir/usr/bin/"
	cat << EOF > "$pkgdir/usr/bin/$pkgname"
#!/bin/sh
NODE_ENV=production exec $_electronpkg '/usr/lib/$pkgname/app.asar' "\$@"
EOF
	chmod +x "$pkgdir/usr/bin/$pkgname"

	install -dm755 "$pkgdir/usr/share/applications/"
	cat << EOF > "$pkgdir/usr/share/applications/$pkgname.desktop"
[Desktop Entry]
Name=MongoDB Compass$_edition
Comment=The official GUI for MongoDB
Exec=$pkgname %U
Icon=$pkgname
Type=Application
StartupNotify=true
Categories=Office;Database;Building;Debugger;IDE;GUIDesigner;Profiling;
EOF

	install -Dm644 "$srcdir/$_sourcedirectory/packages/compass/app-icons/linux/mongodb-compass.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"

	install -dm755 "$pkgdir/usr/share/licenses/$pkgname/"
	for _license in 'LICENSE' 'LICENSES.chromium.html'; do
		install -Dm644 "$_license" "$pkgdir/usr/share/licenses/$pkgname/$_license"
	done
}
