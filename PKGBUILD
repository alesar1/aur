# Maintainer: sum01 <sum01@protonmail.com>
# Contributor: j1simon
pkgname=buttercup-desktop
pkgver=1.6.1
pkgrel=1
pkgdesc='Javascript Password Vault - Multi-Platform Desktop Application'
arch=('i686' 'x86_64')
url="https://github.com/buttercup/buttercup-desktop"
license=('GPL3')
depends=('gtk2' 'gconf' 'libxtst' 'alsa-lib' 'libxss' 'nss')
makedepends=('npm' 'sed')
source=("https://github.com/buttercup/buttercup-desktop/archive/v$pkgver.tar.gz"
	"buttercup-desktop.desktop")
sha512sums=('915a9494c2945ad3396731e614d9ce342ae59bfdb2e5eb80835f21886826e71f4b2f604faa6038dc21d7d6ea5286f69af0e1a836a5b2f334a03036bd02e1cff7'
	'7ecea9e3e00b3b967d669ddb1777f194c5a4ae3e7e6bd941831b9a594ddb5215d264e513d25203268a1de1fa684a2a9ec4642f32233c403b5e425ecf9e7ae988')
prepare() {
	sed -i '/"rpm",/d' "$srcdir/$pkgname-$pkgver/package.json"
	sed -i '/"AppImage",/d' "$srcdir/$pkgname-$pkgver/package.json"
	sed -i '/"snap",/d' "$srcdir/$pkgname-$pkgver/package.json"
	sed -i 's/"deb"/"dir"/' "$srcdir/$pkgname-$pkgver/package.json"
	if [[ $CARCH == "i686" ]]; then
		sed -i 's/build --linux --x64/build --linux --ia32/' "$srcdir/$pkgname-$pkgver/package.json"
	fi
}
build() {
	cd "$srcdir/$pkgname-$pkgver"
	npm install --cache "$srcdir/npm-cache"
	npm run build
	npm run package:linux
}
package() {
	install -Dm644 "$srcdir/$pkgname-$pkgver/build/badge.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/buttercup.svg"
	install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
	if [[ $CARCH == "i686" ]]; then
		_distname="linux-ia32-unpacked"
	else
		_distname="linux-unpacked"
	fi
	mkdir -p "$pkgdir"/usr/{lib,bin}
	mv "$srcdir/$pkgname-$pkgver/release/$_distname" "$pkgdir/usr/lib/$pkgname"
	ln -sf /usr/lib/$pkgname/$pkgname "$pkgdir/usr/bin/buttercup"
}
