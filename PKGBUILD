# Maintainer: Adrián Kálazi <adrian@kalazi.com>

pkgname=esearch
_pkgdirname="pacman-$pkgname"
pkgver=1.3.5
pkgrel=1
pkgdesc="Replacement for both pacman -Ss and pacman -Si"
arch=('x86_64')
url="https://github.com/KLZ-0/pacman-esearch"
license=('MIT')
makedepends=('git' 'cmake')
source=("git+https://github.com/KLZ-0/pacman-esearch#branch=master")

md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$_pkgdirname"
    echo $(grep "define VERSION" src/main.cpp | cut -d'"' -f 2)
}

build() {
    cd "$srcdir/$_pkgdirname/src"
    cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr -B ./ ../
    make
}

package() {
    cd "$srcdir/$_pkgdirname/src"
    make DESTDIR=$pkgdir install
}
