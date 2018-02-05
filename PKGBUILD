# Maintainer: robertfoster

pkgname=xash3d-git
pkgver=v0.19.r576.g029aa835
pkgrel=1
pkgdesc="A custom Gold Source engine rewritten from scratch"
arch=(x86_64)
url="http://xash.su/"
license=('GPL3')
depends=('lib32-sdl2')
makedepends=('cmake' 'gcc-multilib')
install=
source=("$pkgname::git+https://github.com/FWGS/xash3d.git"
"hlsdk::git+https://github.com/FWGS/vgui-dev")

pkgver() {
	cd $srcdir/$pkgname
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd $srcdir/$pkgname
	git submodule init && git submodule update
	mkdir -p build
}

build() {
	cd $srcdir/$pkgname
	cd build
	cmake ../. -DHL_SDK_DIR=../../hlsdk -DXASH_SDL=yes \
		-DXASH_VGUI=yes -DCMAKE_C_FLAGS="-m32" \
		-DCMAKE_CXX_FLAGS="-m32" -DCMAKE_EXE_LINKER_FLAGS="-m32" \
		-DCMAKE_INSTALL_PREFIX=/usr -DLIB_INSTALL_DIR=lib32
	make
}

package() {
	cd $srcdir/$pkgname/
	cd build
	make DESTDIR="$pkgdir" install
}

md5sums=('SKIP'
'SKIP')
