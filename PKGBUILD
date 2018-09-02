# Maintainer: sballert <sballert@posteo.de>

_gituser="magnars"
_gitrepo="s.el"

pkgname=emacs-s-git
pkgver=r258.03410e6
pkgrel=1
pkgdesc="The long lost Emacs string manipulation library."
url="https://github.com/${_gituser}/${_gitrepo}"
arch=('any')
license=('GPL3')
depends=('emacs')
makedepends=('git')
provides=('emacs-s')
conflicts=('emacs-s')
source=("git+https://github.com/${_gituser}/${_gitrepo}.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_gitrepo"
  printf "r%s.%s" $(git rev-list --count HEAD) $(git rev-parse --short HEAD)
}

build() {
  cd "$_gitrepo"
  emacs -q --no-splash -batch -L . -f batch-byte-compile *.el
}

package() {
  cd "$_gitrepo"
  install -d  "$pkgdir"/usr/share/emacs/site-lisp/s/
  install -m644 *.el{c,} "$pkgdir"/usr/share/emacs/site-lisp/s/
}
