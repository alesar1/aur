# Maintainer: Mazhar Hussain <mmazharhussainkgb1145@gmail.com>
_pkgname=vim-blueprint-syntax
pkgname=vim-blueprint-syntax-git
pkgver=r9.b14164b
pkgrel=1
pkgdesc="Vim syntax highlighting support for Gtk Blueprint files"
arch=(any)
url="https://github.com/thetek42/vim-blueprint-syntax"
license=(MIT)
provides=($_pkgname)
conflicts=($_pkgname)
makedepends=(git)
source=("$_pkgname"::"git+$url")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  echo r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package() {
  cd "$srcdir/$_pkgname"
  mkdir -p "$pkgdir"/usr/share/vim/vimfiles
  cp -r ftdetect syntax -t "$pkgdir"/usr/share/vim/vimfiles
}
