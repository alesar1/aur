# Maintainer: Milk Brewster (milk on freenode)
_pkgname=moony.lv2
pkgname=moony-lv2-git
pkgver=0.22.0.r2371.fc1e8ab
pkgrel=1
pkgdesc="Realtime Lua as programmable glue in LV2 - git master"
arch=('i686' 'x86_64')
url='http://open-music-kontrollers.ch/lv2/moony/'
license=('Artistic2.0')
groups=('lv2-plugins')
depends=('libgl')
makedepends=('cmake' 'lv2')
provides=(moony-lv2)
conflicts=(moony-lv2)
replaces=()
backup=()
options=()
install=
source=("git+https://github.com/OpenMusicKontrollers/moony.lv2")
noextract=()
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"

    # printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    # git describe --long --tags | sed "s/\([^-]*-g\)/r\1/;s/-/./g"
    printf "%s.r%s.%s" "$(git describe --tags --abbrev=0)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

  # pwd
}

prepare() {
  cd "$srcdir/$_pkgname"

  rm -rf build
	mkdir build
}

build() {
  cd "$srcdir/$_pkgname/build"

  cmake \
    -DCMAKE_BUILD_TYPE="Release" \
		-DCMAKE_INSTALL_PREFIX="/usr" \
    -DBUILD_TESTING=1 \
		..
  make
}

package() {
  cd "$srcdir/$_pkgname/build"

  make DESTDIR="$pkgdir/" install
}

check() {
  cd "$srcdir/$_pkgname/build"

  ARGS='-VV' make test
}

# vim:set ts=2 sw=2 et:
