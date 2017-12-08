# Maintainer: Damian Poddebniak <poddebniak at fh-muenster dot de>
pkgname=xim-git
pkgver=r11.e432a7f
pkgrel=1
pkgdesc="Vim-like hex editor."
arch=('x86_64' 'i686' )
url="https://github.com/FHMS-ITS/Xim"
license=('AGPLv3')
makedepends=('git' 'rust' 'cargo')
provides=('xim')
source=('git+https://github.com/FHMS-ITS/Xim')
md5sums=('SKIP')

build() {
  cd "$srcdir/Xim"
  cargo build --release
}

package() {
  cd "$srcdir/Xim"
  mkdir -p $pkgdir/usr/bin
  install -o root -g root -m 755 target/release/xim $pkgdir/usr/bin
}

pkgver() {
  cd "$srcdir/Xim"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

# vim:set ts=2 sw=2 et:
