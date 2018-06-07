# Maintainer : Sapphira Armageddos <shadowkyogre.public@gmail.com>
# Contributor: OS Hazard <oshazard+aur@gmail.com>
# Contributor: Ronald van Haren <ronald.archlinux.org>
# Contributor: JJDaNiMoTh <jjdanimoth@gmail.com>
# Contributor: nesl247 <nesl247@gmail.com>

_upstream="ccsm"
_pkgver=0.8.14
_micro=""

pkgname=ccsm-gtk3
pkgver="${_pkgver}${_micro}"
pkgrel=2
pkgdesc="Compizconfig Settings Manager in Python2"
arch=('any')
url="https://gitlab.com/compiz/${_upstream}/"
license=('GPL')
depends=('compizconfig-python' 'python-gobject' 'python-cairo' 'gtk3')
makedepends=('intltool')
optdepends=('compiz-gtk-standalone: option 1' 'compiz-core: option 2')
groups=('compiz-fusion')
conflicts=('ccsm-git')
provides=("ccsm=$pkgver")
source=("${url}-/archive/v${pkgver}/${_upstream}-v${pkgver}.tar.bz2")

package() {
  cd "${srcdir}/${_upstream}-v${pkgver}"
  python ./setup.py install --prefix=/usr --with-gtk=3.0 --root="${pkgdir}"
}

sha256sums=('63d8a672a63dfda05a556ec1b5df0b9406602b82825d2910f8870bf1cb3300d8')
