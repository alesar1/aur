pkgname=rsgain-git
pkgver=2.0.1
pkgrel=1
epoch=
pkgdesc="ReplayGain 2.0 loudness normalizer"
arch=('x86_64')
url="https://github.com/complexlogic/rsgain"
license=('BSD')
groups=()
depends=('libebur128' 'taglib' 'libavformat.so' 'libavcodec.so' 'libswresample.so' 'libavutil.so' 'libinih')
makedepends=('cmake')
provides=('rsgain')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/complexlogic/${pkgname}/archive/refs/tags/v${pkgver}.tar.gz")
md5sums=('SKIP')
validpgpkeys=()

build() {
	cd "$pkgname-$pkgver"
	mkdir build && cd build
	cmake .. -DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd "$pkgname-$pkgver/build"
	make DESTDIR="$pkgdir/" install
}
 
