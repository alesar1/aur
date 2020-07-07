# Maintainer: Tony Fettes <feihaoxiang2014@gmail.com>

pkgname=plasma5-applets-simplemenu-git
_gitname=plasma-simplemenu
pkgver=r91.1f0a9e3
pkgrel=1
pkgdesc="Simplified menu for your Plasma Desktop"
arch=('any')
url="https://invent.kde.org/plasma/plasma-simplemenu"
license=('GPL3')
depends=('plasma-workspace')
makedepends=('git')
provides=('plasma5-applets-simplemenu')
conflicts=('plasma5-applets-simplemenu')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd ${_gitname}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  mkdir -p cd ${srcdir}/${_gitname}/build
  cd ${srcdir}/${_gitname}/build
  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr
}

package() {
  cd ${srcdir}/${_gitname}/build
  make DESTDIR="$pkgdir" install
}
