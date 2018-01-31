# Maintainer: aimileus < $(echo YWltaWxpdXNAcHJvdG9ubWFpbC5jb20K | base64 -d) 
pkgname=vita3k-git
_pkgname=vita3k
pkgver=r11.40a247b
pkgrel=1
pkgdesc="PlayStation Vita emulator"
arch=('x86_64')
url="https://vita3k.github.io/"
license=('GPL2')
depends=('unicorn' 'sdl2')
makedepends=('git' 'cmake')
provides=('vita3k')
conflicts=('vita3k')
source=(
  "git+https://github.com/vita3k/vita3k.git"
  "git+https://github.com/aquynh/capstone.git"
  "git+https://github.com/serge1/ELFIO.git"
  "git+https://github.com/cginternals/glbinding.git"
  "git+https://github.com/jonasmr/microprofile.git"
  "git+https://github.com/tcbrindle/sdl2-cmake-scripts.git"
  "git+https://github.com/vitasdk/vita-headers.git"
  "git+https://github.com/vitasdk/vita-toolchain.git"
  "git+https://github.com/jbeder/yaml-cpp.git"
)
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP')

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$_pkgname"
	git submodule init
	git config submodule.src/external/capstone.url "$srcdir/capstone"
	git config submodule.src/external/elfio.url "$srcdir/ELFIO"
	git config submodule.src/external/glbinding.url "$srcdir/glbinding"
	git config submodule.src/external/microprofile.url "$srcdir/microprofile"
	git config submodule.src/external/sdl2-cmake-scripts.url "$srcdir/sdl2-cmake-scripts"
	git config submodule.src/external/vita-headers.url "$srcdir/vita-headers"
	git config submodule.src/external/vita-toolchain.url "$srcdir/vita-toolchain"
	git config submodule.src/external/yaml-cpp.url "$srcdir/yaml-cpp"
	git submodule update
}

build() {
	cd "$_pkgname"
	msg2 "Create build"
	mkdir -p build && cd build
	msg2 "Create cmake"
	cmake -DCMAKE_INSTALL_PREFIX=/usr ..
	make
}

package() {
	cd $_pkgname
	install -Dm755 build/emulator/Vita3K "$pkgdir/usr/bin/vita3k"
	install -Dm644 src/emulator/shaders/* -t "$pkgdir/usr/bin/shaders/"
}
