# Maintainer: zehkira <(same as my name) at pm me>
pkgname="myuzi"
pkgver="v0.5.0"
pkgrel=1
pkgdesc="Spotify alternative with no ads, payments or accounts"
arch=("any")
url="https://gitlab.com/zehkira/myuzi"
license=("MIT")
depends=("python-gobject" "python-beautifulsoup4" "gst-libav" "gst-plugins-good" "yt-dlp")
source=("https://gitlab.com/zehkira/myuzi/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=("SKIP")

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
