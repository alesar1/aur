# Maintainer: <waruqi@gmail.com>
# PKGBuild Create By: lumpyzhu <lumpy.zhu@gmail.com>

pkgname=xmake
pkgver=2.7.3
pkgrel=1
pkgdesc="A cross-platform build utility based on Lua"
arch=('i686' 'x86_64')
url="https://github.com/xmake-io/xmake"
license=('Apache')
makedepends=('ncurses' 'readline')
source=("https://github.com/xmake-io/xmake/releases/download/v${pkgver}/xmake-v${pkgver}.tar.gz")
sha256sums=('3e71437ad2a59d1fbbc9fba75ab4ca8d428c49beefcce86c11f6c4710dd4b6f2')

build() {
    cd "$srcdir"
    make build
}

package() {
    cd "$srcdir"
    make install DESTDIR="${pkgdir}" PREFIX="/usr"
}
