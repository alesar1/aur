# Maintainer: Zion Nimchuk <zionnimchuk@gmail.com>
_pkgbase='yuzu'
pkgbase="$_pkgbase-git"
pkgname=("$_pkgbase-git" "$_pkgbase-qt-git")
pkgver=r5516.1aa4cdc3
pkgrel=2
pkgdesc="An experimental open-source Nintendo Switch emulator/debugger"
arch=('i686' 'x86_64')
url="https://github.com/yuzu-emu/yuzu/"
license=('GPL2')
makedepends=('git' 'cmake' 'sdl2' 'qt5-base' 'shared-mime-info' 'desktop-file-utils')
source=("$_pkgbase::git+https://github.com/yuzu-emu/yuzu"
        'git+https://github.com/yuzu-emu/ext-boost'
        'git+https://github.com/philsquared/Catch'
        'git+https://github.com/MerryMage/dynarmic'
        'git+https://github.com/herumi/xbyak'
        'git+https://github.com/fmtlib/fmt'
	'git+https://github.com/svn2github/inih'
	'git+https://github.com/yuzu-emu/unicorn'
	'git+https://github.com/lz4/lz4')
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
	 'SKIP'
	 'SKIP')

pkgver() {
	cd "$srcdir/$_pkgbase"
	echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/$_pkgbase"
	mkdir -p build

	git submodule init
	git config submodule.boost.url "$srcdir/ext-boost"
	git config submodule.catch.url "$srcdir/Catch"
	git config submodule.dynarmic.url "$srcdir/dynarmic"
	git config submodule.xbyak.url "$srcdir/xbyak"
	git config submodule.fmt.url "$srcdir/fmt"
	git config submodule.inih.url "$srcdir/inih"
	git config submodule.unicorn.url "$srcdir/unicorn"
	git config submodule.lz4.url "$srcdir/lz4"
	git submodule update

	cd externals/dynarmic
	git config submodule.externals/fmt.url "$srcdir/fmt"
	git config submodule.externals/xbyak.url "$srcdir/xbyak"
	git submodule update
}

build() {
	cd "$srcdir/$_pkgbase/build"
	cmake .. \
	  -DCMAKE_INSTALL_PREFIX=/usr \
	  -DCMAKE_BUILD_TYPE=Release
	make
}

check() {
	cd "$srcdir/$_pkgbase/build"
	make test
}

package_yuzu-git() {
	depends=('sdl2' 'libpng')

	install -Dm755 "$srcdir/$_pkgbase/build/bin/yuzu-cmd" "$pkgdir/usr/bin/${_pkgbase}-cmd"
}

package_yuzu-qt-git() {
	depends=('qt5-base' 'sdl2' 'shared-mime-info' 'desktop-file-utils')
	optdepends=('libxkbcommon-x11: for X11 support'
	            'qt5-wayland: for Wayland support')

	cd "$srcdir/$_pkgbase/build"
	make DESTDIR="$pkgdir/" install
	rm "$pkgdir/usr/bin/${_pkgbase}-cmd"
}
