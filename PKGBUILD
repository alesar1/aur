# Maintainer: Tim Schumacher <timschumi@gmx.de>
# Contributor: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>
# Contributor: ceri

_pkgbase='citra'
pkgbase="$_pkgbase-git"
pkgname=("$_pkgbase-git" "$_pkgbase-qt-git")
pkgver=r9037.c40871f12
pkgrel=1
pkgdesc="An experimental open-source Nintendo 3DS emulator/debugger"
arch=('i686' 'x86_64')
url="https://github.com/citra-emu/citra/"
license=('GPL2')
depends=('ffmpeg')
makedepends=('git' 'cmake' 'sdl2' 'qt5-base' 'shared-mime-info' 'desktop-file-utils' 'qt5-multimedia')
source=("$_pkgbase::git+https://github.com/citra-emu/citra")
md5sums=('SKIP')

# Clang generates weird object files when LTO is enabled, breaking static libraries (.a).
# Force-disable LTO if we are using clang.
if [ "$CXX" = "clang++" ]; then
	options=('!lto')
fi

pkgver() {
	cd "$srcdir/$_pkgbase"
	echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/$_pkgbase"
	mkdir -p build

	git submodule init
	git submodule update --init --recursive
}

build() {
	cd "$srcdir/$_pkgbase/build"

	# Fix for an issue some users are facing when compiling with GCC
	CXXFLAGS+=" -DFMT_USE_USER_DEFINED_LITERALS=0"

	# Bump the expression nesting limit for clang
	if [ "$CXX" = "clang++" ]; then
		CXXFLAGS+=" -fbracket-depth=649"
	fi

	cmake .. \
	  -DCMAKE_INSTALL_PREFIX=/usr \
	  -DCMAKE_BUILD_TYPE=Release \
	  -DENABLE_FFMPEG_AUDIO_DECODER=ON \
	  -DUSE_SYSTEM_CURL=ON
	make
}

check() {
	cd "$srcdir/$_pkgbase/build"
	make test
}

package_citra-git() {
	depends=('sdl2' 'libpng')

	install -Dm755 "$srcdir/$_pkgbase/build/bin/Release/citra" "$pkgdir/usr/bin/citra"
}

package_citra-qt-git() {
	depends=('qt5-base' 'qt5-multimedia' 'sdl2' 'shared-mime-info' 'desktop-file-utils')
	optdepends=('libxkbcommon-x11: for X11 support'
	            'qt5-wayland: for Wayland support')

	cd "$srcdir/$_pkgbase/build"
	make DESTDIR="$pkgdir/" install
	rm "$pkgdir/usr/bin/citra"
}
