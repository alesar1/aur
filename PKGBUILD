# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=knlmeanscl
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=0.7.4.r256.ed072e3
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('i686' 'x86_64')
url='http://forum.doom9.org/showthread.php?t=171379'
license=('GPL')
depends=('libcl'
         'vapoursynth'
         )
makedepends=('git'
             'opencl-headers'
             )
conflicts=("vapoursynth-plugin-${_plug}")
provides=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/Khanattila/KNLMeansCL.git")
sha1sums=('SKIP')

pkgver() {
  cd "${_plug}"
  _ver="$(cat KNLMeansCL/KNLMeansCL.h | grep -m1 '#define VERSION' | cut -d '"' -f2)"
  echo "${_ver//-/.}.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  chmod +x "${_plug}/configure"
}

build() {
  cd "${_plug}"
  ./configure \
    --install=/usr/lib/vapoursynth \
    --extra-cxxflags="${CXXFLAGS} ${CPPFLAGS}" \
    --extra-ldflags="${LDFLAGS}"
  make
}

package(){
  make -C "${_plug}" DESTDIR="${pkgdir}" install
  install -Dm644 "${_plug}/DOC.md" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/DOC.md"
}
