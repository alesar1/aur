# Maintainer: László Koncz <konlaasz at gmail dot com>

pkgname=vim-colors-zenburn-git
pkgdesc='Nothing too fancy, just some alien fruit salad to keep you in the zone'
pkgver=20210915
pkgrel=2
url='http://kippura.org/zenburnpage/'
arch=('any')
license=('GPL')
makedepends=('git')
depends=('vim')
provides=('vim-colors-zenburn')
conflicts=('vim-colorsamplerpack' 'vim-colorschemes')
source=("$pkgname::git+https://github.com/jnurmine/Zenburn.git")
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    local _tmpver="$(git log -n 1 --format="%cd" --date=short)"
    echo "${_tmpver//-/}"
}

package() {
    cd "$srcdir/$pkgname"
    install -dm755 $pkgdir/usr/share/vim/vimfiles/colors
    install -Dm644 colors/* $pkgdir/usr/share/vim/vimfiles/colors/
}
