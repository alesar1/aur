# Maintainer: DeedleFake <deedlefake@users.noreply.github.com>

pkgname=trayscale
pkgver=0.2.5
pkgrel=2
pkgdesc="An unofficial GUI wrapper for the Tailscale CLI client."
arch=(i686 x86_64)
url="https://github.com/DeedleFake/trayscale"
license=('MIT')
depends=('gtk4' 'libadwaita' 'tailscale')
makedepends=('go>=1.18')
provides=(trayscale)
source=("https://github.com/DeedleFake/trayscale/archive/refs/tags/v${pkgver}.tar.gz")
sha256sums=('52d0c845955947b6039daef714a08f1312f17b3ec104909fe362c181801c7d5d')

build() {
	cd "$pkgname-$pkgver"
	go build -v -x -o trayscale ./cmd/trayscale
}

package() {
	cd "$pkgname-$pkgver"
	install -D trayscale "$pkgdir/usr/bin/trayscale"
	install -Dm644 com.tailscale-tailscale.png "$pkgdir/usr/share/icons/hicolor/256x256/apps/com.tailscale-tailscale.png"
	install -Dm644 dev.deedles-trayscale.desktop "$pkgdir/usr/share/applications/dev.deedles-trayscale.desktop"
	install -Dm644 dev.deedles.trayscale.policy "$pkgdir/usr/share/polkit-1/actions/dev.deedles.trayscale.policy"
}
