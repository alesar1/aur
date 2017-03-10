# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=ocaml-opus
pkgver=0.1.2
pkgrel=1
license=('GPL2')
arch=('i686' 'x86_64')
pkgdesc="OCaml bindings for Opus audio codec"
url="https://github.com/savonet/ocaml-opus"
depends=('ocaml' 'opus' 'ocaml-ogg')
makedepends=('ocaml-findlib')
source=("https://github.com/savonet/ocaml-opus/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz")
options=('!strip')
md5sums=('dd96c90b18ac838e3680dd5127dc67c9')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"

    ./configure
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"

    export OCAMLFIND_DESTDIR="${pkgdir}$(ocamlfind printconf destdir)"
    mkdir -p "${OCAMLFIND_DESTDIR}/stublibs"
    make install
}
