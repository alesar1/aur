# Maintainer: erk <v at erk dot io>
pkgname=vnote-git
pkgver=v1.11.1.31.g06cac36
pkgrel=1
pkgdesc="A Vim-inspired note-taking application, especially for Markdown."
arch=('any')
url='https://tamlok.github.io/vnote/'
license=('MIT')
depends=('qt5-base' 'qt5-webengine' 'qt5-svg')
makedepends=('git')

source=("git://github.com/tamlok/vnote.git")
sha256sums=(SKIP)

gitname="vnote"

pkgver() {
    cd "$srcdir/$gitname"
    git describe --tags | sed 's|-|.|g'
}

package() {
    cd "$srcdir/$gitname"
    git submodule update --init
    mkdir build
    cd build
    qmake-qt5 ../VNote.pro
    make
    make INSTALL_ROOT="$pkgdir" install
}
