# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=vgrive
pkgver=1.3.0
pkgrel=1
pkgdesc="Google Drive client made in Vala"
arch=('x86_64')
url="https://github.com/bcedu/VGrive"
license=('GPL3')
depends=('gtk3' 'granite' 'json-glib' 'libsoup' 'libunity')
makedepends=('meson' 'vala' 'cmake')
source=("$pkgname-$pkgver.tar.gz::https://github.com/bcedu/VGrive/archive/$pkgver.tar.gz")
sha256sums=('d02036af3f15b260134748f4bac3c520e137669e96191f07275a01902dffcfac')

build() {
	cd "VGrive-$pkgver"
	meson build --prefix=/usr
	ninja -C build
}

package() {
	cd "VGrive-$pkgver"
	DESTDIR="$pkgdir" ninja -C build install
	ln -s /usr/bin/com.github.bcedu.vgrive "$pkgdir/usr/bin/$pkgname"
}
