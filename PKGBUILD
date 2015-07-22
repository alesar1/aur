# Maintainer: Adrien Oliva <yapbreak@yapbreak.fr>
pkgname="pacmanhealth-git"
pkgver="0.1.0.11g60afd6b"
pkgrel="2"
pkgdesc="Pacman health monitoring system"
arch=('any')
url="https://redmine.yapbreak.fr/projects/pacman-health"
license=('GPL3')
depends=('pacman' 'sed' 'coreutils')
optdepends=('postfix: send report by mail'
            'libnotify: get desktop notification')
makedepends=()
conflicts=('pacmanhealth')
replaces=()
backup=('/etc/pacmanhealth.conf')
source=('git://redmine.yapbreak.fr/pacmanhealth.git')
noextract=()
md5sums=('SKIP')

build() {
    cd "${srcdir}/pacmanhealth"
    ./autogen.sh
    ./configure
    make
}

package() {
    cd "${srcdir}/pacmanhealth"
    make DESTDIR="${pkgdir}/" install
}
