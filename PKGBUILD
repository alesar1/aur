# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=ntfix-git
pkgver=0.2.1.r1.g090af2e
pkgrel=1
pkgdesc="Fixes the problem of Proton games not running on NTFS partitions"
arch=('x86_64')
url="https://github.com/benjamimgois/ntfix"
license=('GPL')
depends=('gtk2')
makedepends=('git' 'lazarus')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/benjamimgois/ntfix.git'
        "${pkgname%-git}.desktop")
sha256sums=('SKIP'
            '1ef509b7f32723e2ee41d33dbc0c8460b1e12f34ca52a7fc0fd7f74985a1a71b')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$srcdir/${pkgname%-git}"
	lazbuild \
		--lazarusdir=/usr/lib/lazarus \
		--build-all \
		"${pkgname%-git}.lpi"
}

package() {
	cd "$srcdir/${pkgname%-git}"
	install -Dm755 "${pkgname%-git}" -t "$pkgdir/usr/bin"
	install -Dm644 "data/icons/${pkgname%-git}48.png" \
		"$pkgdir/usr/share/icons/hicolor/48x48/apps/${pkgname%-git}.png"
	install -Dm644 "data/icons/${pkgname%-git}_128.png" \
		"$pkgdir/usr/share/icons/hicolor/128x128/apps/${pkgname%-git}.png"
	install -Dm644 "$srcdir/${pkgname%-git}.desktop" -t \
		"$pkgdir/usr/share/applications"
}
