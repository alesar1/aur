# Maintainer: shellkr <revoltism+AUR$gmail.com>

pkgname=minetest-mod-mobs_redo-git
_gitname=${pkgname%-git*}
pkgver=265.55c0ed5
pkgrel=1
pkgdesc='Mobs Redo mod for Minetest'
arch=('any')
url="https://github.com/tenplus1/mobs"
license=('custom')
depends=('minetest')
makedepends=('git')
provides=$_gitname
install=$pkgname.install
source=("$_gitname::git+git://github.com/tenplus1/mobs.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

package() {
  cd "$srcdir/$_gitname"
  mkdir -p "$pkgdir/usr/share/minetest/mods/mobs"
  cp -r * "$pkgdir/usr/share/minetest/mods/mobs"
}

