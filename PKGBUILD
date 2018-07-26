# Maintainer: Jonathan Protzenko <jonathan.protzenko@gmail.com>
# Generated by opam2aur https://gitlab.com/malet/opam2aur

pkgname=ocaml-wasm
_oname=wasm
pkgver=1.0
pkgrel=1
pkgdesc="An OCaml library to read and write Web Assembly (wasm) files and manipulate their AST."
arch=('i686' 'x86_64')
url=''
license=('Apache-2.0')
options=('!strip' '!makeflags' 'staticlibs')
source=('https://github.com/WebAssembly/spec/archive/v1.0.zip')
depends=()
makedepends=('ocaml-findlib' 'ocamlbuild')
md5sums=('82d4cc7c67ae32a6785268a1cdddd973')

build() {
  cd "$srcdir/"*/
  make -C interpreter opt unopt
}

package() {
  cd "$srcdir/"*/
  export OCAMLFIND_DESTDIR="$pkgdir$(ocamlfind printconf destdir)"
  install -dm 755 "$OCAMLFIND_DESTDIR"
  make -C interpreter install
}
