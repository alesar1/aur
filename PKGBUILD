# Maintainer: Philipp A. <flying-sheep@web.de>

pkgname=rambox
pkgver=0.5.9
_relver=0.5.3  # for a release tarball containing env.js
pkgrel=1
pkgdesc='Free and Open Source messaging and emailing app that combines common web applications into one.'
arch=(i686 x86_64)
depends=(electron)
makedepends=(desktop-file-utils asar ruby yarn sencha-cmd-6)
url='http://rambox.pro/'
license=('GPL3')
source=("https://github.com/saenzramiro/$pkgname/archive/$pkgver.tar.gz"
        "https://github.com/saenzramiro/$pkgname/releases/download/$_relver/Rambox-$_relver-x64.tar.gz"
        "$pkgname.desktop" "$pkgname.js")
sha256sums=('c70f9490dfc2a9e099a30209201db23273dd18493cfaeb55d0b980eaa60368be'
            '1be708d3fa917d491f91a31a91a3e66f00d36008f12c8dcb45493a408d21f792'
            '61ad70a929c402e24c79b8868208310f9b3c4d7801db2b791af38293231ee524'
            '3b5ed6f04eea66f239b5ae56ea1ff9e47de156cd38bb54ebc46541daba6091b6')
noextract=("Rambox-$_relver-x64.tar.gz")

build() {
	# retrieve env.js
	cd "$srcdir"
	tar xOf "Rambox-$_relver-x64.tar.gz" "Rambox-$_relver/resources/app.asar" >app.asar
	cd "$pkgname-$pkgver"
	asar ef ../app.asar env.js
	
	# install packages
	sed -Ei 's/\s+"electron": "[^"]+",//' package.json
	yarn
	
	# build
	yarn run sencha:compile
	sed -i "s/require('electron-is-dev')/false/" 'build/production/Rambox/electron/main.js'
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	
	install -d "$pkgdir/usr/lib"
	cp -r 'build/production/Rambox' "$pkgdir/usr/lib/rambox"
	
	install -Dm755 "$srcdir/$pkgname.js" "$pkgdir/usr/bin/$pkgname"
	install -Dm644 'resources/Icon.png' "$pkgdir/usr/share/pixmaps/$pkgname.png"
	desktop-file-install "$srcdir/$pkgname.desktop" --dir "$pkgdir/usr/share/applications/"
}
