# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=fmtconv
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r24.19.g67dab4a
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('x86_64')
url='https://forum.doom9.org/showthread.php?t=166504'
license=('custom:WTFPL')
depends=('vapoursynth')
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("git+https://github.com/EleonoreMizo/${_plug}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  cd "${_plug}"
  rm -fr src/VapourSynth.h

  cd build/unix
  ./autogen.sh
}

build() {
  cd "${_plug}/build/unix"
  CPPFLAGS+=" $(pkg-config --cflags vapoursynth)" \
  ./configure \
    --prefix=/usr \
    --libdir=/usr/lib/vapoursynth

  make
}

package(){
  make -C "${_plug}/build/unix" DESTDIR="${pkgdir}" install

  (cd "${_plug}/doc"; for i in *.{html,png,css}; do install -Dm644 "${i}" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/${i}"; done)
  install -Dm644 "${_plug}/doc/license.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
