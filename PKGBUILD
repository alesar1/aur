# Maintainer: Hugo Parente Lima <hugo.pl@gmail.com>

pkgname=tijolo-git
pkgver=GIT
pkgrel=1
pkgdesc="Lightweight, keyboard-oriented IDE for the masses"
arch=("x86_64")
conflicts=("tijolo")
url="https://github.com/hugopl/tijolo"
license=("MIT")
depends=("gc" "libevent" "pcre" "libyaml>=0.2.0" "gtksourceview4" "nerd-fonts-jetbrains-mono")
makedepends=("git" "crystal>=0.35.0" "shards>=0.10.0")
source=("tijolo-git::git+https://github.com/hugopl/tijolo.git")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/tijolo-git"
  make
}

check() {
  cd "$srcdir/tijolo-git"
  crystal spec
}

package() {
  cd "$srcdir/tijolo-git"
  make install DESTDIR="${pkgdir}/usr"
}
