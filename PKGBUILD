# Maintainer: Daniel Peukert <daniel@peukert.cc>
# Contributor: Christoph Mohr <christoph.mohr@gmail.com>
# Contributor: Giovanni 'ItachiSan' Santini <giovannisantini93@yahoo.it>
# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>
pkgname='ferdi'
pkgver='5.6.0'
_recipescommit='ebb2cc3c68f74ce1d8b8a61d128078753d9a0398'
_internalservercommit='2e15f753b79491df2cad5e436e00c8cf44faf5ca'
pkgrel='1'
pkgdesc='A messaging browser that allows you to combine your favorite messaging services into one application'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url="https://get$pkgname.com"
license=('Apache')
depends=('electron' 'libxkbfile')
makedepends=('git' 'nodejs' 'npm6' 'python' 'python2')
source=(
	"$pkgname-$pkgver-$pkgrel.tar.gz::https://github.com/get$pkgname/$pkgname/archive/v$pkgver.tar.gz"
	"$pkgname-$pkgver-$pkgrel-recipes.tar.gz::https://github.com/get$pkgname/recipes/archive/$_recipescommit.tar.gz"
	"$pkgname-$pkgver-$pkgrel-internal-server.tar.gz::https://github.com/get$pkgname/internal-server/archive/$_internalservercommit.tar.gz"
	'fix-autostart-path.diff'
	'remove-meetfranz-unpack.diff'
)
sha256sums=('53f9cc07b267264b174ee5453a8cc5d0d6826838a4d9667f70036be62d45d6da'
            'd503178a0b22f66c1a7adf703aa6e3f1bf58a7b1756430d848fab13741fe9924'
            'dc5a0226597fc4e877bca492bfbd59537aed63e284e74a1fa932558c909fa03a'
            '1b332afa1276449ca1bfd387ad8a9b28024269a4d66daa030b0944e874df24c1'
            'aa06840b98231a7fa3ece7239ba721459f5c6ecd4148d7e0ec4deb716c61ab48')

_sourcedirectory="$pkgname-$pkgver"
_homedirectory="$pkgname-$pkgver-$pkgrel-home"

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
	rm -rf 'recipes/' 'src/internal-server/'
	mv "../recipes-$_recipescommit/" 'recipes/'
	mv "../internal-server-$_internalservercommit/" 'src/internal-server/'

	# Set system Electron version for ABI compatibility
	sed -E -i 's|("electron": ").*"|\1'"$(cat '/usr/lib/electron/version')"'"|' 'package.json'

	# Loosen node version restriction
	sed -E -i 's|("node": ").*"|\1'"$(node --version | sed 's/^v//')"'"|' 'package.json'

	# Specify path for autostart file
	patch --forward -p1 < '../fix-autostart-path.diff'

	# Remove asarUnpack rule for @meetfranz packages
	patch --forward -p1 < '../remove-meetfranz-unpack.diff'

	# Build recipe archives
	cd "$srcdir/$_sourcedirectory/recipes/"
	HOME="$srcdir/$_homedirectory" npm install
	HOME="$srcdir/$_homedirectory" npm run package

	# Prepare dependencies
	cd "$srcdir/$_sourcedirectory/"
	HOME="$srcdir/$_homedirectory" npx lerna bootstrap
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

	install -Dm644 "$_outpath/resources/app.asar" "$pkgdir/usr/lib/$pkgname/app.asar"
	install -dm755 "$pkgdir/usr/lib/$pkgname/app.asar.unpacked/"
	cp -r --no-preserve=ownership --preserve=mode "$_outpath/resources/app.asar.unpacked/recipes/" "$pkgdir/usr/lib/$pkgname/app.asar.unpacked/recipes/"

	install -dm755 "$pkgdir/usr/bin/"
	cat << EOF > "$pkgdir/usr/bin/$pkgname"
#!/bin/sh
NODE_ENV=production ELECTRON_IS_DEV=0 exec electron '/usr/lib/$pkgname/app.asar' "\$@"
EOF
	chmod +x "$pkgdir/usr/bin/$pkgname"

	install -dm755 "$pkgdir/usr/share/applications/"
	cat << EOF > "$pkgdir/usr/share/applications/$pkgname.desktop"
[Desktop Entry]
Name=${pkgname^}
Exec=/usr/bin/$pkgname %U
Terminal=false
Type=Application
Icon=$pkgname
StartupWMClass=${pkgname^}
Comment=Ferdi is your messaging app / former Emperor of Austria and combines chat & messaging services into one application. Ferdi currently supports Slack, WhatsApp, WeChat, HipChat, Facebook Messenger, Telegram, Google Hangouts, GroupMe, Skype and many more. You can download Ferdi for free for Mac & Windows.
MimeType=x-scheme-handler/ferdi;
Categories=Network;InstantMessaging;
EOF

	for _size in 16 24 32 48 64 96 128 256 512 1024; do
		install -Dm644 "build-helpers/images/icons/${_size}x${_size}.png" "$pkgdir/usr/share/icons/hicolor/${_size}x${_size}/apps/$pkgname.png"
	done
}
