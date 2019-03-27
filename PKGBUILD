# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=sangnom
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r41.1.g44b0341
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (Fork)(GIT version)"
arch=('x86_64')
url='https://github.com/dubhater/vapoursynth-sangnom'
license=('MIT')
depends=('vapoursynth')
makedepends=('mercurial')
provides=("vapoursynth-plugin-${_plug}"
          "vapoursynth-plugin-${_plug}-hg"
          )
conflicts=("vapoursynth-plugin-${_plug}"
           "vapoursynth-plugin-${_plug}-hg"
           )
source=("${_plug}::git+https://github.com/dubhater/vapoursynth-sangnom.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  arch-meson "../${_plug}" \
    --libdir /usr/lib/vapoursynth

  ninja
}

package(){
  DESTDIR="${pkgdir}" ninja -C build install

  install -Dm644 "${_plug}/README.md" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/README.md"
}
