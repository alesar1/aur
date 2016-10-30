# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=ocaml-samplerate
pkgver=0.1.4
pkgrel=1
license=('LGPL2.1')
arch=('i686' 'x86_64')
pkgdesc="OCaml bindings for libsamplerate"
url="https://github.com/savonet/ocaml-samplerate"
depends=('ocaml' 'libsamplerate')
makedepends=('ocaml-findlib')
source=("https://github.com/savonet/ocaml-samplerate/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz")
options=('!strip')
md5sums=('d1d893965ba6f4e83054574447da9e00')

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
