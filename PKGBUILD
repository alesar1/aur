# Maintainer: bscubed <bscubed@pm.me>

_pkgname='yuzu-canary'
pkgname="$_pkgname-git"
pkgver=r12153.f83d9adca
pkgrel=1
pkgdesc="An experimental open-source Nintendo Switch emulator/debugger"
arch=('i686' 'x86_64')
url="https://github.com/yuzu-emu/yuzu-canary"
license=('GPL2')
provides=('yuzu' 'yuzu-cmd')
conflicts=('yuzu-git')
depends=('shared-mime-info'
         'desktop-file-utils'
         'sdl2'
         'qt5-base'
         'qt5-multimedia'
         'qt5-tools'
         'libxkbcommon-x11'
         'libzip'
         'zlib')
makedepends=('git'
             'cmake'
             'python2')
optdepends=('qt5-wayland: for Wayland support')
source=("$_pkgname::git+https://github.com/yuzu-emu/yuzu-canary")
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
	export TRAVIS_REPO_SLUG=yuzu-emu/yuzu-canary
	export TRAVIS_TAG=$(git describe --tags)
	
	# Hopefully temporary fix for a compilation error involving fmt
	CXXFLAGS+=" -DFMT_USE_USER_DEFINED_LITERALS=0"
	
	mkdir -p build && cd build
	cmake .. \
	  -DCMAKE_INSTALL_PREFIX=/usr \
	  -DYUZU_USE_BUNDLED_UNICORN=ON \
	  -DYUZU_USE_QT_WEB_ENGINE=ON \
	  -DCMAKE_BUILD_TYPE=Release \
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
