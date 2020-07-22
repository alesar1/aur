# Maintainer: Zren <zrenfire@gmail.com>

_pkgname=material-kwin-decoration
pkgname=${_pkgname}-git
pkgver=v5+9+gc296eeb
pkgrel=1
pkgdesc="Material-ish window decoration theme for KWin, with LIM support."
url='https://github.com/Zren/material-decoration'
arch=('x86_64')
license=('GPL')
depends=('kdecoration')
makedepends=('git' 'cmake' 'extra-cmake-modules')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --tags --long | sed 's/-/+/g'
}

build() {
  cmake \
    -S "${srcdir}/${_pkgname}" \
    -B "build" \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON

  make -C "build"
}


package() {
  make -C "build" DESTDIR="$pkgdir" install
}
