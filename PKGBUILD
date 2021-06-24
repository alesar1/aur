# Christopher Price <pricechrispy at gmail dot com>
# Contributor: nerflad (nerflad@gmail.com)

pkgname=gapi-ocaml
pkgver=0.3.19
pkgrel=2
pkgdesc="A simple OCaml client for Google Services."
arch=("x86_64" "i686" "armv7h")
url="https://astrada.github.io/gapi-ocaml/"
license=('MIT')
makedepends=('dune')
depends=(
'ocaml>=4.02.3'
'ocaml-findlib>=1.2.7'
'ocamlnet>=4.1.4'
'ocaml-curl>=0.5.3'
'ocaml-cryptokit>=1.3.14'
'ocaml-extlib>=1.5.1'
'ocaml-yojson>=1.0.2'
'ocaml-xmlm>=1.0.2'
)
source=("$pkgname-$pkgver.tar.gz::https://github.com/astrada/$pkgname/archive/v$pkgver.tar.gz")
options=('!strip' 'staticlibs')
sha256sums=('3ae81f6e2aa5987ecfab0873a275a0b4f3a10725ce908e4bc4fa1007026db87d')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  dune build @install
  sed -i '/doc:\s\[/,$d' _build/default/gapi-ocaml.install
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  export OCAMLFIND_DESTDIR="$pkgdir/$(ocamlfind printconf destdir)"
  install -dm755 "$OCAMLFIND_DESTDIR"

  dune install
}
