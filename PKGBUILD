# Maintainer: Mads Kjeldgaard<mail@madskjeldgaard.dk>
pkgname=supercollider-pll-git
pkgver=r2.c2d22d0
pkgrel=1
pkgdesc='Phase-locked loop for SuperCollider'
arch=('any')
url='https://github.com/nhthn/supercollider-pll'
license=('GPL')
groups=('pro-audio' 'supercollider-plugins')
depends=('supercollider')
makedepends=('git' 'cmake' 'supercollider-headers-git')
optdepends=()
source=("$pkgname"::git+$url.git)
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
		SC_SRC="/usr/share/supercollider-headers"

		cd "$srcdir/$pkgname"
		git submodule update --init --recursive

		mkdir build; cd build
		DEST="$pkgdir/usr/share/SuperCollider/Extensions"
		cmake -DSC_PATH=$SC_SRC -DCMAKE_BUILD_TYPE=RELEASE -DCMAKE_INSTALL_PREFIX=$DEST ..
		make
}

package() {
	cd "$srcdir/$pkgname/build"
	cmake --build . --config Release --target install
}
