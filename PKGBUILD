# Maintainer: LGuy9 <thelinuxguy9@gmail.com>

pkgname=htim
pkgver=3.0.6
pkgrel=1
pkgdesc="Htop improved, htop with vim key bindings"
arch=('x86_64' 'i686')
url="https://gitlab.com/thelinuxguy9/htim"
license=('GPL2')
depends=(ncurses libnl)
makedepends=()
optdepends=()
provides=('htop')
conflicts=('htop')
replaces=('htop')
source=(https://gitlab.com/thelinuxguy9/htim/-/archive/master/htim-master.tar.bz2)
md5sums=('3b0b1063647dc157302ae464242f6ad4')
validpgpkeys=()

prepare() {
        cd "$srcdir/htim-master"
        ./autogen.sh
        ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --enable-unicode
}

build() {
        cd "$srcdir/htim-master"
        make
}

package() {
        cd "$srcdir/htim-master"
        make DESTDIR="$pkgdir/" install
}
