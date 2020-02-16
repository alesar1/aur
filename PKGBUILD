# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
# Contributor: Christoph Mohr <christoph.mohr@gmail.com>
# Contributor: Giovanni 'ItachiSan' Santini <giovannisantini93@yahoo.it>
# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>
_pkgname='ferdi'
pkgname="$_pkgname-git"
pkgver='5.4.1.beta.5.r271.gf07b3f70'
pkgrel='5'
pkgdesc='A messaging browser that allows you to combine your favorite messaging services into one application - git version'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url="https://get$_pkgname.com"
license=('Apache')
depends=('electron')
makedepends=('git' 'npm')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=(
	"$pkgname::git+https://github.com/get$_pkgname/$_pkgname"
	"$pkgname-recipes::git+https://github.com/get$_pkgname/recipes"
	"$pkgname-internal-server::git+https://github.com/get$_pkgname/internal-server"
	"$_pkgname.desktop"
	"$_pkgname.sh"
	'fix-autostart-path.diff'
)
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            '5013233fc508f16b6782efa72da2ac242996f8555b3135aa0d2d98029c2bbc53'
            '3a21a67cc821892f9ae1b53b9108ec1859aa42b301fa6523c6c7accf6bc2a6c5'
            '91cc72f00db20e1bded69d08578e6ae9fdc89a4582ee8f6d29697b0233d7d095')

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

_sourcedirectory="$pkgname"

pkgver() {
	cd "$srcdir/$_sourcedirectory/"
	git describe --long --tags | sed -e 's/^v//' -e 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/$_sourcedirectory/"

	# Provide git submodules
	git submodule init
	git config submodule.recipes.url "$srcdir/$pkgname-recipes"
	git config submodule.src/internal-server.url "$srcdir/$pkgname-internal-server"
	git submodule update --init --recursive

	# Set system Electron version for ABI compatibility
	sed -E -i 's|("electron": ").*"|\1'"$(cat /usr/lib/electron/version)"'"|' 'package.json'

	# Prevent Ferdi from being launched in dev mode
	sed -i "s|import isDevMode from 'electron-is-dev'|const isDevMode = false|g" 'src/index.js' 'src/config.js'
	sed -i "s|import isDev from 'electron-is-dev'|const isDev = false|g" 'src/environment.js'

	# Specify path for autostart file
	patch --forward -p1 < '../fix-autostart-path.diff'

	# Prepare dependencies
	export HOME="$srcdir/$pkgname-home"
	export XDG_CACHE_HOME="$srcdir/$pkgname-cache"
	export npm_config_devdir="$srcdir/$pkgname-npm-dev"
	export npm_config_cache="$srcdir/$pkgname-npm-cache"

	npx lerna bootstrap
}

build() {
	cd "$srcdir/$_sourcedirectory/"

	export NODE_ENV='production'
	export HOME="$srcdir/$pkgname-home"
	export XDG_CACHE_HOME="$srcdir/$pkgname-cache"
	export npm_config_devdir="$srcdir/$pkgname-npm-dev"
	export npm_config_cache="$srcdir/$pkgname-npm-cache"

	npx gulp build
	npx electron-builder --linux dir "--$_electronbuilderarch" -c.electronDist='/usr/lib/electron' -c.electronVersion="$(cat /usr/lib/electron/version)"
}

package() {
	cd "$srcdir/$_sourcedirectory/"

	install -Dm644 'out/linux-unpacked/resources/app.asar' "$pkgdir/usr/lib/$_pkgname/app.asar"
	install -dm755 "$pkgdir/usr/lib/$_pkgname/app.asar.unpacked/"
	cp -r --no-preserve=ownership --preserve=mode 'out/linux-unpacked/resources/app.asar.unpacked/recipes/' "$pkgdir/usr/lib/$_pkgname/app.asar.unpacked/recipes/"

	install -Dm755 "../$_pkgname.sh" "$pkgdir/usr/bin/ferdi"

	install -Dm644 "../$_pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
	for _size in 16 24 32 48 64 96 128 256 512 1024; do
		install -Dm644 "build-helpers/images/icons/${_size}x${_size}.png" "$pkgdir/usr/share/icons/hicolor/${_size}x${_size}/apps/$_pkgname.png"
	done
}
