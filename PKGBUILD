# Maintainer: graysky <graysky AT archlinux DOT us>

pkgname='backdrop-randomizer'
pkgver=2.29
pkgrel=1
pkgdesc='Companion for xfdesktop which randomly cycles through wallpapers without repeating them until all have been displayed once.'
arch=('any')
url='https://github.com/graysky2/backdrop-randomizer'
license=('MIT')
depends=('xfdesktop')
optdepends=('systemd: or optional scheduling of timed backdrop change'
'cron: for optional scheduling of timed backdrop change')
source=("http://repo-ck.com/source/$pkgname/$pkgname-$pkgver.tar.xz")
install=readme.install
sha256sums=('317736a1a0051e525f9124a51bf5fb12f10c93fe88005bfb2be1cbce97a239d6')

build() {
	cd "$pkgname-$pkgver"
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
