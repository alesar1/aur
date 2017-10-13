# Maintainer: axionl <axionl@aosc.io>
pkgname=ciel-git
pkgver=r174.5e0a43a
pkgrel=1
pkgdesc="A tool for controlling multi-layer file systems and containers."
arch=('i686' 'x86_64')
url="https://github.com/AOSC-Dev/ciel"
license=('MIT')
makedepends=('git' 'make' 'go')

source=($pkgname::git+https://github.com/AOSC-Dev/ciel.git)
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    dir="$srcdir/$pkgname/"
    cd $dir
    git submodule update --init --recursive
    make && make PREFIX=${pkgdir}/usr install && make clean
}
