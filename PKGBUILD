# Maintainer: Knut Ahlers <knut at ahlers dot me>
# Contributor: Chase Geigle <sky.strife@gmail.com>

pkgname=obs-v4l2sink
pkgver=0.1.0
obsver=25.0.8
pkgrel=4
epoch=
pkgdesc="v4l2 output for obs-studio"
arch=(x86_64)
url="https://github.com/CatxFish/obs-v4l2sink"
license=('GPL')
groups=()
depends=('obs-studio')
makedepends=('cmake' 'obs-studio')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$url/archive/$pkgver.tar.gz"
	"https://github.com/obsproject/obs-studio/archive/$obsver.tar.gz"
	"v4l2device_close.patch::https://github.com/CatxFish/obs-v4l2sink/pull/21.patch")
noextract=()
sha256sums=('83e9bb104dcc3840acd17ebc0810de30c8de27545d4ef181d58f8a375dba06d4'
            'ef1179c23256c312212e3dce9083d4fa67751db05c3001ad824e2b6995943941'
            '617e017562ab3ca85fffa86c869fa778e26ee0694e0ae8dd1b8b110bff1bb6cc')
validpgpkeys=()

prepare() {
	rm -rf build
	mkdir build

	# Apply "adjust v4l2device_close to void" patch from
	# https://github.com/CatxFish/obs-v4l2sink/pull/21
	cd $pkgname-$pkgver
	patch --forward --fuzz=0 --input="${srcdir}/v4l2device_close.patch" --strip=1
}

build() {
	cd build
	cmake ../$pkgname-$pkgver \
		-DCMAKE_BUILD_TYPE=Release \
		-DLIBOBS_INCLUDE_DIR=../obs-studio-$obsver/libobs \
		-DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd build
	DESTDIR="$pkgdir" make install
}
