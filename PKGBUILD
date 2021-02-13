# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=qmlkonsole-git
pkgver=r77.0106a20
pkgrel=2
pkgdesc="Terminal app for Plasma Mobile"
arch=('x86_64')
url="https://invent.kde.org/plasma-mobile/qmlkonsole"
license=('GPL3')
depends=('ki18n' 'kconfig' 'kirigami2' 'qmltermwidget' 'qt5-svg')
makedepends=('git' 'qt5-tools' 'extra-cmake-modules')
provides=('qmlkonsole')
conflicts=('qmlkonsole')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cd "${pkgname%-git}"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -B build
  make -C build
}

package() {
  cd "${pkgname%-git}"
  make -C build DESTDIR="${pkgdir}" PREFIX=/usr install
}
