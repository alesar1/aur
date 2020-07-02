# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=kirigami-addons-git
pkgver=r19.a445f08
pkgrel=1
pkgdesc="Add-ons for the Kirigami framework"
arch=(x86_64)
url="https://invent.kde.org/libraries/kirigami-addons"
license=(GPL3)
depends=(ki18n kirigami2)
makedepends=(git cmake extra-cmake-modules)
provides=(kirigami-addons)
conflicts=(kirigami-addons)
source=("git+https://invent.kde.org/libraries/kirigami-addons.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "${pkgname%-git}"
  install -d build
}

build() {
  cd "${pkgname%-git}/build"
  cmake ..
  make
}

package() {
  cd "${pkgname%-git}/build"
  make DESTDIR="$pkgdir" install
}
