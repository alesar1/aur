# Maintainer: Daniel Peukert <daniel@peukert.cc>
# Contributor: Christoph Mohr <christoph.mohr@gmail.com>
# Contributor: Giovanni 'ItachiSan' Santini <giovannisantini93@yahoo.it>
# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>
_pkgname='ferdi'
pkgname="$_pkgname-git"
pkgver='5.6.0.beta.5.r266.g9d863a62'
pkgrel='1'
pkgdesc='A messaging browser that allows you to combine your favorite messaging services into one application - git version'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url="https://get$_pkgname.com"
license=('Apache')
depends=('electron' 'libxkbfile')
makedepends=('git' 'nodejs-lts-fermium' 'npm6' 'python' 'python2')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=(
	"$pkgname::git+https://github.com/get$_pkgname/$_pkgname"
	"$pkgname-recipes::git+https://github.com/get$_pkgname/recipes"
	"$pkgname-internal-server::git+https://github.com/get$_pkgname/internal-server"
	'fix-autostart-path.diff'
)
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            '36c9e0f631f3164f192cfcef294b9411509d8536a8b7e5fdb31b6d118a7b433e')

_sourcedirectory="$pkgname"
_homedirectory="$pkgname-home"

case "$CARCH" in
	i686)
		_electronbuilderarch='ia32'
	;;
	armv7h)
		_electronbuilderarch='armv7l'
	;;
	aarch64)
		_electronbuilderarch='arm64'
	;;
	*)
		_electronbuilderarch='x64'
	;;
esac

prepare() {
	cd "$srcdir/$_sourcedirectory/"

	# Provide git submodules
	git submodule init
	git config submodule.recipes.url "$srcdir/$pkgname-recipes"
	git config submodule.src/internal-server.url "$srcdir/$pkgname-internal-server"
	git submodule update --init --recursive

	# Set system Electron version for ABI compatibility
	sed -E -i 's|("electron": ").*"|\1'"$(cat '/usr/lib/electron/version')"'"|' 'package.json'

	# Set node-sass version for node 16 compatibility (gulp-sass update still needed)
	sed -E -i 's|("node-sass": ").*"|\16.0.0"|' 'package.json'

	# Prevent Ferdi from being launched in dev mode
	sed -i "s|import isDevMode from 'electron-is-dev'|const isDevMode = false|g" 'src/index.js' 'src/config.js'
	sed -i "s|import isDev from 'electron-is-dev'|const isDev = false|g" 'src/environment.js'

	# Specify path for autostart file
	patch --forward -p1 < '../fix-autostart-path.diff'

	# Build recipe archives
	cd "$srcdir/$_sourcedirectory/recipes/"
	HOME="$srcdir/$_homedirectory" npm install
	HOME="$srcdir/$_homedirectory" npm run package

	# Prepare dependencies
	cd "$srcdir/$_sourcedirectory/"
	HOME="$srcdir/$_homedirectory" npx lerna bootstrap

	# Build node-sass manually for platforms where pre-compiled binaries are not available
	if [ "$_electronbuilderarch" != 'x64' ] && [ "$_electronbuilderarch" != 'ia32' ]; then
		HOME="$srcdir/$_homedirectory" npm rebuild node-sass
	fi
}

pkgver() {
	cd "$srcdir/$_sourcedirectory/"
	git describe --long --tags | sed -e 's/^v//' -e 's/-\([^-]*-g[^-]*\)$/-r\1/' -e 's/-/./g'
}

build() {
	cd "$srcdir/$_sourcedirectory/"

	NODE_ENV='production' HOME="$srcdir/$_homedirectory" npx gulp build
	NODE_ENV='production' HOME="$srcdir/$_homedirectory" npx electron-builder --linux dir "--$_electronbuilderarch" -c.electronDist='/usr/lib/electron' -c.electronVersion="$(cat '/usr/lib/electron/version')"
}

package() {
	cd "$srcdir/$_sourcedirectory/"

	local _outpath='out/linux'
	if [ "$_electronbuilderarch" != 'x64' ]; then
		_outpath="$_outpath-$_electronbuilderarch"
	fi
	_outpath="$_outpath-unpacked"

	install -Dm644 "$_outpath/resources/app.asar" "$pkgdir/usr/lib/$_pkgname/app.asar"
	install -dm755 "$pkgdir/usr/lib/$_pkgname/app.asar.unpacked/"
	cp -r --no-preserve=ownership --preserve=mode "$_outpath/resources/app.asar.unpacked/recipes/" "$pkgdir/usr/lib/$_pkgname/app.asar.unpacked/recipes/"

	install -dm755 "$pkgdir/usr/bin/"
	cat << EOF > "$pkgdir/usr/bin/$_pkgname"
#!/bin/sh
NODE_ENV=production exec electron '/usr/lib/$_pkgname/app.asar' "\$@"
EOF
	chmod +x "$pkgdir/usr/bin/$_pkgname"

	install -dm755 "$pkgdir/usr/share/applications/"
	cat << EOF > "$pkgdir/usr/share/applications/$_pkgname.desktop"
[Desktop Entry]
Name=${_pkgname^}
Exec=/usr/bin/$_pkgname %U
Terminal=false
Type=Application
Icon=$_pkgname
StartupWMClass=${_pkgname^}
Comment=Ferdi is your messaging app / former Emperor of Austria and combines chat & messaging services into one application. Ferdi currently supports Slack, WhatsApp, WeChat, HipChat, Facebook Messenger, Telegram, Google Hangouts, GroupMe, Skype and many more. You can download Ferdi for free for Mac & Windows.
MimeType=x-scheme-handler/ferdi;
Categories=Network;InstantMessaging;
EOF

	for _size in 16 24 32 48 64 96 128 256 512 1024; do
		install -Dm644 "build-helpers/images/icons/${_size}x${_size}.png" "$pkgdir/usr/share/icons/hicolor/${_size}x${_size}/apps/$_pkgname.png"
	done
}
