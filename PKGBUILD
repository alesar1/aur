pkgname=yup-bin
_pkgname=yup
pkgver="0.2.1_beta"
_pkgver="0.2.1-beta"
pkgrel=1
pkgdesc="Arch Linux AUR Helper with ncurses functionality and better searching and sorting"
arch=('x86_64')
url="https://github.com/ericm/yup"
license=('GPL3')
source=("https://github.com/ericm/yup/releases/download/v${_pkgver}/yup")
sha256sums=('SKIP')

depends=('pacman>=5.1' 'git' 'ncurses' 'sudo')

package() {
    install -Dm755 yup ${pkgdir}/usr/local/bin/yup
}
