# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=wwxd
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=v1.0.0.ga587086
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('x86_64')
url="http://forum.doom9.org/showthread.php?t=170546"
license=('GPL2')
depends=('vapoursynth')
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/dubhater/vapoursynth-${_plug}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  cd "${_plug}/src"

  echo "all:
	  gcc -c -fPIC -Wall -Wextra -Wno-unused-parameter ${CFLAGS} ${CPPFLAGS} -I. $(pkg-config --cflags vapoursynth) -o wwxd.o wwxd.c
	  gcc -c -fPIC -Wall -Wextra -Wno-unused-parameter ${CFLAGS} ${CPPFLAGS} -I. $(pkg-config --cflags vapoursynth) -o detection.o detection.c
	  gcc -shared -fPIC ${LDFLAGS} -o lib${_plug}.so wwxd.o detection.o" > Makefile
}

build() {
  make -C "${_plug}/src"
}

package(){
  cd "${_plug}"
  install -Dm755 "src/lib${_plug}.so" "${pkgdir}/usr/lib/vapoursynth/lib${_plug}.so"

  install -Dm644 readme "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/readme"
}
