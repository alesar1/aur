# Maintainer: Zion Nimchuk <zionnimchuk@gmail.com>
# Co-maintainer: Brendan Szymanski <bscubed@pm.me>

_pkgname='yuzu'
pkgname="$_pkgname-git"
pkgver=r13623.aa3f9b960
pkgrel=1
pkgdesc="An experimental open-source Nintendo Switch emulator/debugger"
arch=('i686' 'x86_64')
url="https://github.com/yuzu-emu/yuzu/"
license=('GPL2')
provides=('yuzu' 'yuzu-cmd')
conflicts=('yuzu-mainline-git' 'yuzu-canary-git')
depends=('shared-mime-info'
         'desktop-file-utils'
         'sdl2'
         'qt5-base'
         'qt5-multimedia'
         'qt5-tools'
         'libxkbcommon-x11')
makedepends=('git'
             'cmake'
             'python2')
optdepends=('qt5-wayland: for Wayland support')
source=("$_pkgname::git+https://github.com/yuzu-emu/yuzu")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/$_pkgname"

	git submodule init
	git submodule update --init --recursive
}

build() {
	# Trick the compiler into thinking we're building from a continuous
	# integration tool so the build number is correctly shown in the title
	cd "$srcdir/$_pkgname"
	export CI=true
	export TRAVIS=true
	export TRAVIS_REPO_SLUG=yuzu-emu/yuzu
	export TRAVIS_TAG=$(git describe --tags)
	
	# Hopefully temporary fix for a compilation error involving fmt
	CXXFLAGS+=" -DFMT_USE_USER_DEFINED_LITERALS=0"
	
	# Flag to disable pre-compiled headers so boost can build properly
	CXXFLAGS+=" -DENABLE_PRECOMPILED_HEADERS=OFF"

	# Flag to fix SDL exceptions occurring in some users' builds
	CXXFLAGS+=" -I/usr/include/SDL2 -D_REENTRANT -pthread -lSDL2"
	
	mkdir -p build
	cd build
	cmake .. \
	  -DCMAKE_INSTALL_PREFIX=/usr \
	  -DCMAKE_BUILD_TYPE=Release \
	  -DYUZU_USE_BUNDLED_UNICORN=ON \
	  -DYUZU_ENABLE_COMPATIBILITY_REPORTING=ON \
	  -DENABLE_COMPATIBILITY_LIST_DOWNLOAD=ON \
	  -DUSE_DISCORD_PRESENCE=ON
	make
}

check() {
	cd "$srcdir/$_pkgname/build"
	make test
}

package() {
	cd "$srcdir/$_pkgname/build"
	
	make DESTDIR="$pkgdir/" install
}
