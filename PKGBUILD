# Maintainer: robertfoster

pkgname=xash3d-git
pkgver=v0.19.r576.g029aa835
pkgrel=1
pkgdesc="A custom Gold Source engine rewritten from scratch"
arch=(x86_64)
url="http://xash.su/"
license=('GPL3')
depends=('sdl2')
makedepends=('cmake')
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
	cmake ../. -DHL_SDK_DIR=../../hlsdk \
		-DXASH_SDL=yes -DXASH_VGUI=yes \
		-DXASH_64BIT=yes \
		-DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd $srcdir/$pkgname/
	cd build
	make DESTDIR="$pkgdir" install
}

md5sums=('SKIP'
'SKIP')
