# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=lc
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=1.1.g9cea098
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('x86_64')
url='https://github.com/MoePus/VapourSynth-LC'
license=('GPL')
depends=('vapoursynth')
makedepends=('git'
             'clang'
             )
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/MoePus/VapourSynth-LC.git")
sha256sums=('SKIP')
options=('debug')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - . | tr -d r)"
}

prepare() {
  cd "${_plug}"

  sed '3i#include <cmath>' \
     -i LC/LC.H

  echo "all:
	  clang++ -c -fpermissive -stdlib=libc++ -fPIC ${CXXFLAGS} ${CPPFLAGS} -I./LC $(pkg-config --cflags vapoursynth) -o VSPlugin.o LC/VSPlugin.cpp
	  clang++ -shared -fPIC ${LDFLAGS} -o lib${_plug}.so VSPlugin.o" > Makefile
}

build() {
  cd "${_plug}"
  make
}

package(){
  cd "${_plug}"
  install -Dm755 "lib${_plug}.so" "${pkgdir}/usr/lib/vapoursynth/lib${_plug}.so"
  install -Dm644 readme.md "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/readme.md"
}
