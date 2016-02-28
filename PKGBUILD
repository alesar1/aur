# Maintainer: Michael Duell <michael.duell@rub.de> PGP-Fingerprint: FF8C D50E 66E9 5491 F30C  B75E F32C 939C 5566 FF77
pkgname=rot13
pkgver=2
pkgrel=2
pkgdesc="Converts text with ROT13 from STDIN to STDOUT or text given as arguments."
arch=('i686' 'x86_64')
license=('WTFPL')
source=('rot13.c')

build() {
	cd "$srcdir/"
	gcc -std=c99 -Wall -pedantic -O2 -o rot13 rot13.c
}

package() {
	cd "$srcdir/"
    install -d "${pkgdir}/usr/bin/"
    install -m755 rot13 "${pkgdir}/usr/bin/rot13"
}
sha384sums=('1dfd26246e84c4494a1c076b289c0407bae8e6624c269a6b2d16550d35b868ea99d9ba94ad9ba18938517310933a3b51')
