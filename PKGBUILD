# Maintainer: Genki Sky <alt+archlinux.org@genki.is>

pkgname=libjit-git
pkgver=1
pkgrel=4
pkgdesc='Generic just-in-time compiler library'
arch=('x86_64')
url='https://www.gnu.org/software/libjit/'
license=('LGPL')
makedepends=('git')
provides=('libjit')
conflicts=('libjit')
source=('git+https://git.savannah.gnu.org/git/libjit.git')
md5sums=('SKIP')

pkgver() {
    cd libjit
    git log -1 --format='%cd.%h' --date=short | tr -d -
}

build() {
    cd libjit
    ./bootstrap
    ./configure --prefix=/usr
    make
}

package() {
    cd libjit
    make DESTDIR="$pkgdir" install
}
