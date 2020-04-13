# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=neo_tmedian
pkgbase="foosynth-plugin-${_plug}-git"
pkgname=("avisynth-plugin-${_plug}-git"
         "vapoursynth-plugin-${_plug}-git"
         )
pkgver=r1.1.g4199078
pkgrel=1
pkgdesc="Plugin for Vapoursynth/Avisynth: ${_plug} (Dual interface for Vapoursynth/Avisynth) (GIT version)"
arch=('x86_64')
url='https://github.com/HomeOfAviSynthPlusEvolution/neo_TMedian.git'
license=('GPL')
makedepends=('git'
             'cmake'
             'avisynthplus-git'
             'vapoursynth'
             )
source=("${_plug}::git+https://github.com/HomeOfAviSynthPlusEvolution/neo_TMedian.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --first-parent --tags --always | tr - .)"
}

prepare() {
  cd "${_plug}"
  mkdir -p build

  sed '1i#include <cpuid.h>' -i src/cpuid.cpp
}

build() {
  cd "${_plug}/build"
  cmake .. \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_INSTALL_PREFIX=/usr

  make
}

package_avisynth-plugin-neo_tmedian-git() {
  pkgdesc="Plugin for Avisynth: ${_plug} (GIT version)"
  depends=('avisynthplus')
  provides=("avisynth-plugin-${_plug}")
  conflicts=("avisynth-plugin-${_plug}")

  install -Dm644 "${_plug}/build/libneo-tmedian.so" "${pkgdir}/usr/lib/avisynth/libneo-tmedian.so"
  install -Dm644 "${_plug}/README.md" "${pkgdir}/usr/share/doc/avisynth/plugins/${_plug}/README.md"

  install -Dm644 "${_plug}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_vapoursynth-plugin-neo_tmedian-git() {
  pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
  depends=('vapoursynth')
  provides=("vapoursynth-plugin-${_plug}")
  conflicts=("vapoursynth-plugin-${_plug}")

  install -Dm644 "${_plug}/build/libneo-tmedian.so" "${pkgdir}/usr/lib/vapoursynth/libneo-tmedian.so"
  install -Dm644 "${_plug}/README.md" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/README.md"

  install -Dm644 "${_plug}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
