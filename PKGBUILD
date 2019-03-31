# Maintainer: shellkr <revoltism+AUR$gmail.com>

pkgname=minetest-mod-prehistoric_life-git
_gitname=${pkgname%-git*}
pkgver=4.58170cb
pkgrel=1
pkgdesc='Adds a variety of Dinosaurs and Plants. All Dinosaurs are passive as babies but carnivores become aggressive has adults if not tamed. (Mod for Minetest)'
arch=('any')
url="https://github.com/ElCeejoYT/paleotest"
license=('custom')
depends=()
optdepends=('minetest-usrdir_patch')
makedepends=('git')
provides=("$_gitname")
install=$pkgname.install
source=("$_gitname::git+https://github.com/ElCeejoYT/paleotest.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

package() {
  cd "$srcdir/$_gitname"
  mkdir -p "$pkgdir/usr/share/minetest/mods/${_gitname#*mod-}"
  cp -r * "$pkgdir/usr/share/minetest/mods/${_gitname#*mod-}"
}

