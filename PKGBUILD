# Maintainer: Edward Pacman <edward at edward-p dot xyz>
# Maintainer: lilac <lilac@build.archlinuxcn.org>

pkgname=kicad-i18n-git
pkgver=r1784.adb9ea2
pkgrel=1
pkgdesc="Translations for KiCad source code."
arch=('i686' 'x86_64')
url="http://kicad-pcb.org/"
license=('GPL')
depends=('kicad')
makedepends=('cmake' 'git' 'gettext')
source=("${pkgname}"'::git+https://gitlab.com/kicad/code/kicad-i18n.git')
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  printf "r%s.%s" "$(git rev-list HEAD --count --first-parent)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${pkgname}"
  mkdir -p build
  cd build
  cmake .. -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}"
  cd build
  make DESTDIR="${pkgdir}" install
}
