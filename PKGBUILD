# Maintainer: sekret, mail=$(echo c2VrcmV0QHBvc3Rlby5zZQo= | base64 -d)
pkgname=drumgizmo
pkgver=0.9.11
pkgrel=1
pkgdesc="an open source cross-platform drum plugin and stand-alone application (lv2)"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://www.drumgizmo.org"
license=('GPL')
groups=('lv2-plugins')
depends=('libx11' 'libsmf' 'jack' 'expat' 'zita-resampler')
makedepends=('lv2')
source=("http://www.drumgizmo.org/releases/$pkgname-$pkgver/$pkgname-$pkgver.tar.gz")
md5sums=('58249aed3f779b66fc15fe77e0338d09')

build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr \
              --enable-lv2
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
