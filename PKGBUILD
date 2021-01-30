# Maintainer: Christian Pinedo <me (at) christianpinedo (dot) eu>
pkgname=solarwallet-appimage
_pkgname=solarwallet
_githubname=solar
pkgver=0.26.1
pkgrel=1
pkgdesc="Wallet for the Stellar payment network by SatoshiPay (AppImage)"
arch=('x86_64')
url='https://solarwallet.io/'
license=('MIT')
makedepends=('npm')
provides=('solarwallet')
conflicts=('solarwallet')
options=(!strip)
source=("$pkgname-$pkgver.tar.gz::https://github.com/satoshipay/$_githubname/archive/v$pkgver.tar.gz"
	"$pkgname.sh"
	"$pkgname.desktop")
sha256sums=('a47692d5b8b7d6cb7d4045eb0436be39282294ee59a446376c23f7a2fbd62851'
            'ed2e309b16b78b82896331cacb12382c1cd7ca2327884a9a1a4d6320e7044ab7'
            'f651916474463e95ce114b2298bd452c08db389fab30901cadcd86d3b3613f85')

build() {
	cd "$srcdir/$_githubname-$pkgver"
	npm install --cache "$srcdir/npm-cache"
	npm run build:linux
}

package() {
	cd "$srcdir/$_githubname-$pkgver"
	install -Dm755 "electron/dist/Solar-Wallet-$pkgver.AppImage" "$pkgdir/opt/appimages/$_pkgname.AppImage"
	install -Dm644 electron/build/icons/512.png "$pkgdir/usr/share/pixmaps/$_pkgname.png"
	cd "$srcdir"
	install -Dm755 "$pkgname.sh" "$pkgdir/usr/bin/$_pkgname"
	install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
}
