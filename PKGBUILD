# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
# Contributor: acieroid
# Contributor: spider-mario <spidermario@free.fr>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: George Giorgidze <giorgidze@gmail.com>
# Contributor: William J. Bowman <bluephoenix47@gmail.com>
pkgname=coq
pkgver=8.4pl6
pkgrel=1
pkgdesc='Formal proof management system. Full version that includes CoqIDE.'
arch=('i686' 'x86_64')
url='http://coq.inria.fr/'
license=('GPL')
options=('!emptydirs')
depends=('gtk2' 'ocaml' 'camlp5-transitional' 'gtksourceview2')
makedepends=('ocaml-findlib' 'lablgtk2')
optdepends=('coq-doc')
source=("http://coq.inria.fr/distrib/V$pkgver/files/coq-$pkgver.tar.gz")
md5sums=('2334a98b64578cb81d2b4127e327b368')
sha1sums=('c89525295659a805661ef91da24ecfb94e226953')
sha256sums=('a540a231a9970a49353ca039f3544616ff86a208966ab1c593779ae13c91ebd6')

build() {
  cd "$srcdir/coq-$pkgver"

  ./configure \
    -prefix '/usr' \
    -mandir '/usr/share/man' \
    -configdir '/etc/xdg/coq/' \
    -opt \
    -coqide opt \
    -usecamlp5 \
    -with-doc no

  make world
}

package() {
  cd "$srcdir/coq-$pkgver"

  make COQINSTALLPREFIX="$pkgdir" install
}
