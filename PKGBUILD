# Maintainer: Jose Riha <jose1711 gmail com>
# Contributor: Dennis Hamester <dennis.hamester@startmail.com>
# Contributor: rafasc

_pkgname=vifm
pkgname=$_pkgname-git
pkgver=0.12.r216.g85a70df1b
pkgrel=1
pkgdesc="Ncurses based file manager with vi like keybindings"
arch=('i686' 'x86_64')
url="http://vifm.info/"
license=('GPL')
depends=('ncurses' 'desktop-file-utils' 'file')
optdepends=('perl: vifm-convert-dircolors')
makedepends=('git')
install=$pkgname.install
conflicts=('vifm')
provides=('vifm')
source=("git+https://github.com/vifm/vifm.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}"/$_pkgname
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/v//g'
}

prepare() {
    cd "${srcdir}/${_pkgname}"
    autoreconf -fiv
}

build() {
    cd "${srcdir}"/$_pkgname
    ./configure --prefix=/usr \
                --sysconfdir=/etc
    make
}

package() {
    cd "${srcdir}"/$_pkgname
    make DESTDIR="${pkgdir}" install
}
