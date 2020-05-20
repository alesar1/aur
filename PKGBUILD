# Maintainer: Chuan Ji <chuan@jichu4n.com>

pkgname=jfbview-git
pkgver=r327.25a9e8b
pkgrel=1
pkgdesc="PDF and image viewer for the Linux framebuffer"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/jichu4n/jfbview"
license=('Apache')
makedepends=('cmake')
depends=('ncurses' 'imlib2')
conflicts=('jfbpdf' 'jfbview')
replaces=('jfbpdf' 'jfbview')
source=("git+${url}.git")
sha512sums=('SKIP')
_pkgname='jfbview'

pkgver() {
  cd "${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/${_pkgname}"
  git submodule update --init --recursive
}

build(){
  cd "${srcdir}/${_pkgname}"
  cmake -H. -Bbuild \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX=/usr
  cmake --build build
}

package(){
  cd "${srcdir}/${_pkgname}/build"
  make DESTDIR="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:
