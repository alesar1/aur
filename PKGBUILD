# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=fluxsmooth
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=v2.1.gf1c22a4
pkgrel=2
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('x86_64')
url='https://forum.doom9.org/showthread.php?t=173795'
license=('GPL')
depends=('vapoursynth')
makedepends=('git'
             'yasm'
             )
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/dubhater/vapoursynth-${_plug}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build

  export LDFLAGS="${LDFLAGS},-z,noexecstack"

  cd "${_plug}"
  ./autogen.sh
}

build() {
  cd build
  ../"${_plug}"/configure \
    --prefix=/usr \
    --libdir=/usr/lib/vapoursynth

  make
}

package(){
  make -C build DESTDIR="${pkgdir}" install
  install -Dm644 "${_plug}/readme.rst" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/readme.rst"
}
