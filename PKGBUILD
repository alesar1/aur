# Maintainer: Jingbei Li <i@jingbei.li>
pkgdesc='A CUDA backend for Torch7'
pkgname='torch7-cutorch-git'
pkgver=r607.04c3dbc
pkgrel=1
makedepends=('cmake' 'git')
depends=('torch7-git>=r819' 'cuda')
conflicts=('torch7-cutorch')
provides=('torch7-cutorch')
arch=('x86_64' 'i686')
url='https://github.com/torch/cutorch'
license=('BSD')
source=("${pkgname}::git+${url}")
sha512sums=('SKIP')

pkgver(){
	cd "${pkgname}"
	(
		set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

prepare(){
	cd $srcdir/$pkgname
	sed -i '/c99/aSET(CMAKE_CXX_FLAGS "-std=c++98 ${CMAKE_CXX_FLAGS}")' CMakeLists.txt
}

build(){
	cd "${pkgname}"
	cmake . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release
	make
}

package(){
	cd "${pkgname}"
	make DESTDIR="${pkgdir}" install

	# Move Lua C module
	mkdir -p "${pkgdir}/usr/lib/lua/5.1"
	mv "${pkgdir}/usr/lib/libcutorch.so" "${pkgdir}/usr/lib/lua/5.1/"

	# Move pure Lua modules
	mkdir -p "${pkgdir}/usr/share/lua/5.1"
	mv "${pkgdir}/usr/lua/cutorch" "${pkgdir}/usr/share/lua/5.1/"
	rm -rf "${pkgdir}/usr/lua"
}
