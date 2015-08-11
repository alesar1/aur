# Maintainer: Sebastian Gumprich <sebastian.gumprich@38.de>
pkgname=tuxemon-git
pkgver=r34.fcee2e8
pkgrel=2
pkgdesc="A free, open source monster-fighting RPG."
arch=('i686' 'x86_64')
url="http://www.tuxemon.org"
license=('GPL3')
groups=('games')
depends=('python2' 'python2-pygame' 'python2-pytmx' 'python2-yapsy')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
install=${pkgname}.install
source=('git://github.com/Tuxemon/Tuxemon.git')
md5sums=('SKIP')

_gitname=Tuxemon

pkgver() {
  cd "${srcdir}/${_gitname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    install -d ${pkgdir}/usr/share/
    mv ${srcdir}/${_gitname}/tuxemon/ ${pkgdir}/usr/share/${_gitname}
}
