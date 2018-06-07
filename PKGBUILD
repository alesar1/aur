# $Id$
# Maintainter: martadinata666 <martadinata666@gmail.com>
# Maintainer: Ronald van Haren <ronald.archlinux.org>
# Contributor: JJDaNiMoTh <jjdanimoth@gmail.com>
# Contributor: nesl247 <nesl247@gmail.com>

_upstream="compiz-plugins-main"
_pkgver=0.8.14
_micro=""

pkgname=compiz-fusion-plugins-main
pkgver="${_pkgver}${_micro}"
pkgrel=2
pkgdesc="Compiz Main plugins"
arch=('i686' 'x86_64')
url="https://gitlab.com/compiz/${_upstream}/"
license=('GPL')
depends=("compiz-core>=${_pkgver}" 'libjpeg>=7' 'librsvg' 'compiz-bcop' 'libxdamage' 'libxcomposite'
	'libxinerama' 'startup-notification')
makedepends=('intltool' 'pkgconfig' 'gettext')
groups=('compiz-fusion')
conflicts=('compiz-fusion-plugins-main-git')
source=("${url}-/archive/v${pkgver}/${_upstream}-v${pkgver}.tar.bz2")
options=(!libtool)


build() {
  cd "${srcdir}/${_upstream}-v${pkgver}"
  
  NOCONFIGURE=1 ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc

  make
}

package() {
  cd "${srcdir}/${_upstream}-v${pkgver}"
  make DESTDIR="${pkgdir}" install
}

sha256sums=('9a3aa53316e609f4cd5cffc10fba0a8cd53117ab8f6717eadb22a63691baed86')
