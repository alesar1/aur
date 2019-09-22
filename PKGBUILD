# Maintainer: Mike Swanson <mikeonthecomputer@gmail.com>

pkgname=eternity-engine-git
pkgver=4.00.00.r852.a1b14298
pkgrel=1
pkgdesc="An advanced Doom port with vanilla compatibility"
url="http://eternity.youfailit.net/"
arch=('i686' 'x86_64')
license=('GPL3')
depends=('sdl2' 'sdl2_mixer' 'sdl2_net' 'zlib')
makedepends=('git' 'cmake')
conflicts=(${pkgname%-git})
source=(eternity::git+https://github.com/team-eternity/eternity.git
       git+https://github.com/Wohlstand/libADLMIDI.git)
sha512sums=('SKIP'
            'SKIP')

pkgver() {
  cd "${srcdir}/eternity"
  printf "%s" "$(git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
  cd "${srcdir}/eternity"
  git submodule init
  git config submodule.adlmidi.url "${srcdir}/libADLMIDI"
  git submodule update
}

build() {
  # Cannot do in-tree build.
  mkdir ee-build
  cd ee-build
  cmake ../eternity -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd ee-build
  make PREFIX=/usr DESTDIR="$pkgdir" install
}
