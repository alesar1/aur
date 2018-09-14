# Maintainer: sballert <sballert@posteo.de>

_gituser="magit"
_gitrepo="magit-popup"

pkgname=emacs-magit-popup-git
pkgver=r603.6e07f74
pkgrel=1
pkgdesc="Define prefix-infix-suffix command combos"
url="https://github.com/${_gituser}/${_gitrepo}"
arch=('any')
license=('GPL3')
depends=('emacs' 'emacs-async' 'emacs-dash')
makedepends=('git')
provides=('emacs-magit-popup')
conflicts=('emacs-magit-popup')
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
  install -d  "$pkgdir"/usr/share/emacs/site-lisp/${_gitrepo}/
  install -m644 *.el{c,} "$pkgdir"/usr/share/emacs/site-lisp/${_gitrepo}/
}
