# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=string-machine
pkgname="${_pkgname}-git"
pkgver=0.1.0.r1.g009ffce
pkgrel=1
pkgdesc="A virtual-analog string ensemble synthesizer LV2 and VST2 plugin"
arch=('i686' 'x86_64')
url="https://github.com/jpcima/string-machine"
license=('Boost')
depends=('cairo')
makedepends=('boost' 'git' 'mesa')
groups=('lv2-plugins' 'vst-plugins')
provides=("${_pkgname}" "${_pkgname}=${pkgver//.r*/}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/jpcima/${_pkgname}.git"
        'dpf::git+https://github.com/DISTRHO/DPF.git')
md5sums=('SKIP' 'SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"

  # See https://github.com/jpcima/string-machine/issues/3#issuecomment-512590428
  git describe --long --exclude latest | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}/${_pkgname}"

  git submodule init
  git config submodule.dpf.url "${srcdir}/dpf"
  git submodule update
}

build() {
  cd "${srcdir}/${_pkgname}"

  make
}

package() {
  cd "${srcdir}/${_pkgname}"

  # Create installation directories
  install -dm755 "${pkgdir}"/usr/lib/{lv2,vst}
  # LV2 bundle
  cp -rp bin/${_pkgname}.lv2 "${pkgdir}"/usr/lib/lv2
  # VST shared library
  install -m755 bin/${_pkgname}-vst.so "${pkgdir}"/usr/lib/vst
}
