# Maintainer: crave <crave@infinity>
# Generated by opam2aur https://gitlab.com/malet/opam2aur

pkgname=ocaml-fix
_oname=fix
pkgver=20130611
pkgrel=7
pkgdesc="a least fixed point computation library, using an efficient imperative algorithm"
arch=('i686' 'x86_64')
url=''
license=('unknown')
options=('!strip' '!makeflags' 'staticlibs')
source=('http://gallium.inria.fr/~fpottier/fix/fix-20130611.tar.gz')
depends=('ocaml')
makedepends=('ocaml-findlib' 'ocamlbuild')
md5sums=('056dec3341ef008458fa722ebf2e3c57')

build() {
  cd "$srcdir/"*/
  make -j4
}

package() {
  cd "$srcdir/"*/
  export OCAMLFIND_DESTDIR="$pkgdir$(ocamlfind printconf destdir)"
  install -dm 755 "$OCAMLFIND_DESTDIR"
  make install
}
