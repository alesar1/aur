# Maintainer: Artem Klevtsov <a.a.klevtsov@gmail com>

_pkgbase=fancon
pkgname=fancon-git
pkgver=0.20.1.r6.gde5bb40
pkgrel=1
pkgdesc="A Linux fan control daemon"
arch=('x86_64')
url="https://github.com/hbriese/${_pkgbase}"
license=('Apache')
provides=("${_pkgbase}")
depends=()
depends=('lm_sensors' 'grpc' 'boost-libs')
makedepends=('clang>=9.0' 'cmake>=3.13' 'boost' 'protobuf' 'libx11' 'pstreams' 'libxnvctrl')
source=("${_pkgbase}::git+https://github.com/hbriese/${_pkgbase}.git")
sha512sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgbase}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  rm -rf "${srcdir}/${_pkgbase}/build"
  mkdir "${srcdir}/${_pkgbase}/build"
  cd "${srcdir}/${_pkgbase}/build"
  export CC=clang
  export CXX=clang++
  export CCACHE_DISABLE=1
  cmake -DCMAKE_BUILD_TYPE=Release \
        -DNVIDIA_SUPPORT=ON \
        -DCMAKE_INSTALL_PREFIX=/usr \
        ..
  make
}

package() {
  cd "${srcdir}/${_pkgbase}/build"
  make DESTDIR="${pkgdir}" install
  
  cd "${srcdir}/${_pkgbase}/debian"
  install -Dm 644 fancon.service "${pkgdir}/usr/lib/systemd/system/fancon.service"
  install -Dm 644 fancon-resume.service "${pkgdir}/usr/lib/systemd/system/fancon-resume.service"
}
