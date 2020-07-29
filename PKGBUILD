# Maintainer: Ronan Pigott <rpigott@berkeley.edu>

pkgname=wlrctl
pkgver=0.1.1
pkgrel=1
pkgdesc='Utility for miscellaneous wlroots extensions'
url='https://git.sr.ht/~brocellous/wlrctl'
arch=('x86_64')
license=('MIT')
source=(
	"$pkgname-$pkgver.tar.gz::https://git.sr.ht/~brocellous/$pkgname/archive/v$pkgver.tar.gz"
)
depends=('wayland' 'libxkbcommon')
makedepends=('scdoc' 'meson' 'ninja')

md5sums=('79b1625d085b770d123e80ac0b3fbe73')

build() {
	cd "$pkgname-v$pkgver"
	meson \
		-Dwerror=false \
		--prefix /usr \
		"$srcdir/build"
	ninja -C "$srcdir/build"
}

package() {
	cd "$pkgname-v$pkgver"
	DESTDIR="$pkgdir" ninja -C "$srcdir/build" install
}
