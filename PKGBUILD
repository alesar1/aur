# Maintainer: Abdó Roig-Maranges <abdo.roig@gmail.com>

pkgname=git-remote-hg-git
pkgver=0.3.r11.g628d26c
pkgrel=1
provides=("git-remote-hg")
conflicts=("git-remote-hg")
pkgdesc="Transparent bidirectional bridge between Git and Mercurial"
arch=('any')
url="https://github.com/fingolfin/git-remote-hg"
license=('GPL2')
depends=('git' 'mercurial')
makedepends=('asciidoc')
source=("git+https://github.com/fingolfin/git-remote-hg.git")
md5sums=('SKIP')

pkgver() {
  git --git-dir="$srcdir/git-remote-hg/.git" describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//g'
}

build () {
  cd "$srcdir/git-remote-hg"
  make all doc
}

package () {
  cd "$srcdir/git-remote-hg"
  make prefix=/usr DESTDIR="$pkgdir" install install-doc
}

# vim:set ts=2 sw=2 et:
