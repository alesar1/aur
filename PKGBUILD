# Maintainer: Jiachen YANG <farseerfc@gmail.com>

_pkgname='plasma-systemmonitor'
pkgname="${_pkgname,,}-git"
pkgver=r248.32afb36
pkgrel=1
pkgdesc='an interface for monitoring system sensors, process information and other system resources'
arch=('x86_64')
url='https://github.com/KDE/plasma-systemmonitor'
license=('GPL3')
depends=('ksysguard' 'libksysguard' 'qt5-quickcontrols' 'kirigami2')
makedepends=('extra-cmake-modules' 'git' 'qt5-tools')
provides=("${_pkgname,,}")
source=("${_pkgname}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cmake -B build -S "${_pkgname}" \
    -DCMAKE_BUILD_TYPE='None' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -Wno-dev
  make -C build
}

package() {
  make DESTDIR="${pkgdir}" PREFIX="/usr" -C build install
}

# vim: ts=2 sw=2 et:
