# Maintainer: Carey Metcalfe <carey@[first initial + last name].ca>

pkgname=audiowaveform
pkgver=1.3.2
pkgrel=1
pkgdesc="Generate waveform data and render waveform images from audio files"
arch=('i686' 'x86_64')
url="https://github.com/bbc/audiowaveform"
license=('GPL3')
depends=('libmad' 'libsndfile' 'libid3tag' 'gd' 'boost-libs')
makedepends=('git' 'cmake' 'boost')
source=("https://github.com/bbc/audiowaveform/archive/$pkgver.tar.gz")
sha1sums=('b8151762aae7f8ae0c3d0cc258668a56d09b73b6')

build() {
	cd "$pkgname-$pkgver"
	cmake -DENABLE_TESTS=0 -DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd "$pkgname-$pkgver"
	DESTDIR="$pkgdir" make install
}
