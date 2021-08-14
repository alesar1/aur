# Maintainer: HurricanePootis <hurricanepootis@protonmail.com>
pkgname=libvtflib-git
pkgver=r38.a501ba5
pkgrel=4
pkgdesc="Library to handle Valve's Texture Format"
arch=('x86_64')
url="https://github.com/panzi/VTFLib"
license=('GPL')
depends=('libtxc_dxtn')
makedepends=('cmake' 'git' 'extra-cmake-modules')
source=("git+https://github.com/panzi/VTFLib.git")
md5sums=('SKIP')


pkgver() {
cd $srcdir/VTFLib
printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/VTFLib"
	cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX="/usr"
	make
}

package() {
	cd "$srcdir/VTFLib"
	make install DESTDIR="$pkgdir"
}
