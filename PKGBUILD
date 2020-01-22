# Maintainer: milk on freenode
# Contributor: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=ninjas2
pkgname=${_pkgname}-git
pkgver=0.2.0.r331.a767a9e
pkgrel=1
epoch=1
pkgdesc="An easy to use sample slicer LV2 & VST plugin and JACK application (git version)"
arch=('i686' 'x86_64')
url="https://github.com/rghvdberg/ninjas2"
license=('GPL3')
groups=('lv2-plugins' 'pro-audio' 'vst-plugins')
depends=('libgl' 'libsamplerate' 'libsndfile')
makedepends=('git' 'jack')
optdepends=('jack: stand-alone JACK application')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/rghvdberg/${_pkgname}.git"
        'dpf::git+https://github.com/DISTRHO/DPF.git')
sha256sums=('SKIP' 'SKIP')


pkgver() {
  cd "${srcdir}/${_pkgname}"

  local ver="$(grep d_version plugins/Ninjas2/Ninjas2Plugin.hpp | awk '{ print $4$5$6 }' | tr ',' '.')"
  echo "$ver.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/${_pkgname}"

  git submodule init
  git config submodule.dpf.url "${srcdir}/dpf"
  git submodule update
}


build() {
  cd "${srcdir}/${_pkgname}"

  git submodule init && git submodule update --recursive
  make
}

package() {
  cd "${srcdir}/${_pkgname}"

  install -Dm775 bin/${_pkgname} "${pkgdir}"/usr/bin/ninjas2
  install -dm755 "${pkgdir}"/usr/lib/lv2/${_pkgname}.lv2
  install -m644 bin/${_pkgname}.lv2/*.ttl "${pkgdir}"/usr/lib/lv2/${_pkgname}.lv2
  install -m755 bin/${_pkgname}.lv2/*.so "${pkgdir}"/usr/lib/lv2/${_pkgname}.lv2
  install -Dm775 bin/${_pkgname}-vst.so -t "${pkgdir}"/usr/lib/vst
}
