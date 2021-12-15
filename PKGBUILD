# Maintainer dpetrov <petrov.dimp@gmail.com>

pkgname=warpd
_gitname=warpd
pkgver=0.9a
pkgrel=1
pkgdesc="A small X program which facilitates recursively warping the pointer to different quadrants on the screen. The program was inspired by the mousekeys feature of Kaleidoscope, the firmware for the Keyboardio"
url="https://github.com/rvaiya/warpd"
license=('GPLV3')
arch=('x86_64')
md5sums=('SKIP')
depends=()
conflicts=()
makedepends=(git make libxinerama libxft libxfixes libxtst libx11)
provides=(warpd)
source=("git+$url")

package() {
    cd ${_gitname}
    pwd
    ls -altr
    make
    # make DESTDIR="{pkgdir}" install
    # echo "${pkgdir}"
    # echo "${_gitname}"
    # ls -altr
    install -Dm755 -t "${pkgdir}"/usr/bin bin/warpd
    install -Dm644 -t "${pkgdir}"/usr/lib/systemd/user ../../warpd.service
}
