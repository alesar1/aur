# Maintainer: <waruqi@gmail.com>
# PKGBuild Create By: lumpyzhu <lumpy.zhu@gmail.com>

pkgname=xmake
pkgver=2.3.1
pkgrel=6
pkgdesc="A make-like build utility based on Lua"
arch=('i686' 'x86_64')
url="https://github.com/xmake-io/xmake"
license=('Apache')
makedepends=()
source=("$pkgname.tar.gz::https://github.com/xmake-io/xmake/releases/download/v${pkgver}/xmake-v${pkgver}.tar.gz")
sha256sums=('e6e2d3b6679ae6fa2663125d3b0d927ffe811e9d8da88b97209bc508f35df6d7')

build() {
    cd "$srcdir"
    make build
}

package() {
    cd "$srcdir"
    make install DESTDIR="${pkgdir}" PREFIX="/usr"
}
