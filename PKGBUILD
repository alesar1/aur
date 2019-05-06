# Maintainer: James Smith <jslonescout AT icloud DOT com>
_pkgname=emacs-libvterm
pkgname=${_pkgname}-git
pkgver=r203.db9679d
pkgrel=1
pkgdesc="Emacs libvterm integration"
arch=('i686' 'x86_64' 'armv7h' 'pentium4')
url=https://github.com/akermu/${_pkgname}
license=('GPL3')
depends=('emacs')
makedepends=('cmake')
provides=('emacs-libvterm')
conflicts=('emacs-libvterm')
source=(git+${url}.git)
sha256sums=('SKIP')

pkgver() {
  cd "${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${_pkgname}"
  mkdir -p build
}

build() {
  cd "${_pkgname}/build"
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
}

package() {
  cd "${_pkgname}"
  #make DESTDIR="${pkgdir}/" install
  # No install target currently, so must install manually
  # Also, vterm-module.so must be in the same directory as vterm.el
  install -Dm644 vterm-module.so ${pkgdir}/usr/share/emacs/site-lisp/vterm-module.so
  install -Dm644 vterm.el ${pkgdir}/usr/share/emacs/site-lisp/vterm.el
}
