# Contributor: Christopher Arndt <chris@chrisarndt.de>
# Contributor: Luis Pablo Gasparotto <lpgasparotto at gmail dot com>
# Contributor: Phillip Fynan <pfynan@gmail.com>
# Maintainer: Peter Sutton <peter@foxdogstudios.com>

_pkgver_year=2020
_pkgver_month=08
_pkgver_day=09

pkgname=abcmidi
pkgver=$_pkgver_year$_pkgver_month$_pkgver_day
pkgrel=1
pkgdesc='A set of tools for converting ABC files to MIDI files and vice versa, as well as other small utilities'
url="https://ifdo.ca/~seymour/runabc/top.html"
license=('GPL')
depends=()
makedepends=()
source=("https://ifdo.ca/~seymour/runabc/abcMIDI-${_pkgver_year}.${_pkgver_month}.${_pkgver_day}.zip")
arch=(x86_64)
sha256sums=('8509c6e6909d193028d38a3a0a9a301e26bdee32ef3dacde0fa1dca9c3a54b65')


build() {
    cd "$srcdir"/abcmidi
    ./configure --prefix=/usr
    make
}

package() {
    cd "$srcdir"/abcmidi

    make DESTDIR="$pkgdir/" install

    # Install programming documentation to docdir
    install -m 755 -d "$pkgdir"/usr/share/doc/$pkgname/programming

    install -m 644 doc/programming/*.txt doc/programming/*.abc \
                   "$pkgdir"/usr/share/doc/$pkgname/programming

    # Install example ABC files to docdir
    install -m 755 -d "$pkgdir"/usr/share/doc/$pkgname/samples
    install -m 644 samples/*.abc "$pkgdir"/usr/share/doc/$pkgname/samples
}
