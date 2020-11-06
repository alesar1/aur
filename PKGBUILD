# Maintainer: MaryJaneInChain <maryjaneinchain@gmail.com>

pkgname=tic-80-git
pkgver=r1400.c6d246e
pkgrel=1
pkgdesc='TIC-80 tiny computer emulator'
arch=('any')
url="https://tic.computer/"
license=('MIT')
depends=('gtk3' 'glu' 'freeglut>=3.0.0' 'libglvnd' 'lua-sdl2')
makedepends=('git' 'cmake')
provides=(tic-80)

_gitname=TIC-80

source=("git+https://github.com/nesbox/TIC-80.git")
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$_gitname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir/$_gitname"
    git submodule update --init --recursive
}

build() {
    cd "$srcdir/$_gitname/build"
    cmake -DBUILD_PRO=true ..
    make -j4
}

package() {
    cd "$srcdir/$_gitname/build"
	install -Dm755 bin/tic80 "${pkgdir}/usr/bin/tic80"
	install -Dm755 bin/player-sdl "${pkgdir}/usr/bin/player-sdl"
	install -Dm755 bin/bin2txt "${pkgdir}/usr/bin/bin2txt"
}

