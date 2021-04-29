# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=communicator-git
pkgver=r176.708c1dc
pkgrel=1
pkgdesc="Contacts and dialer application"
arch=('x86_64')
groups=('maui-apps')
url="https://invent.kde.org/maui/communicator"
license=('GPL3')
depends=('mauikit-git' 'mauikit-filebrowsing-git' 'mauikit-texteditor-git' 'ki18n' 'kcoreaddons' 'kservice')
makedepends=('git' 'extra-cmake-modules' 'qt5-tools' 'qt5-svg')
provides=('communicator')
conflicts=('communicator')
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -B build -S "${pkgname%%-git}"
  cmake --build build
}

package() {
  DESTDIR="${pkgdir}" cmake --install build
}
