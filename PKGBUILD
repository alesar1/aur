# Maintainer: Ingo Bürk <admin at airblader dot de>
_pkgname=util-xrm
pkgname=xcb-${_pkgname}-git
pkgver=0.0.1
pkgrel=1
pkgdesc='XCB utility functions for the X resource manager'
arch=('i686' 'x86_64')
url="https://github.com/Airblader/xcb-util-xrm"
license=('MIT')
depends=('libxcb')
makedepends=('git' 'xorg-util-macros')
provides=("xcb-${_pkgname}")
conflicts=("xcb-${_pkgname}")
source=("$_pkgname::git+http://github.com/Airblader/xcb-util-xrm")
md5sums=('SKIP')

pkgver() {
    cd "$_pkgname"
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$_pkgname"
    git submodule update --init
    ./autogen.sh --prefix=/usr
    make
}

package() {
    cd "$_pkgname"
    make DESTDIR="$pkgdir" install
    mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"
    cp "$srcdir/$_pkgname/COPYING" "$pkgdir/usr/share/licenses/$pkgname/"
}
