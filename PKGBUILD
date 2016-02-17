
pkgname=tribler
pkgver=6.5.0
pkgrel=1
pkgdesc="Privacy with BitTorrent and resilient to shut down"
url="http://www.tribler.org/"
arch=(any)
license=('LGPL')
depends=('python2-cryptography' 'python2-feedparser' 'python2-apsw' 'python2-cherrypy' 'python2-plyvel' 'python2-pillow'
'python2-decorator' 'python2-netifaces' 'python2-requests' 'python2-twisted' 'wxpython2.8' 'libsodium' 'libtorrent-rasterbar' 'python2-m2crypto')
optdepends=('vlc: for internal video player')
makedepends=('python2-setuptools')
source=("https://github.com/Tribler/tribler/releases/download/v${pkgver}/Tribler-v${pkgver}.tar.xz")
sha1sums=('2896529b7041e37b4feefd7cf906879dfcd288f8')

package() {
  cd "${srcdir}/tribler"
  install -d "${pkgdir}"/usr/{bin,share/tribler}
  cp -r Tribler "${pkgdir}"/usr/share/tribler
  install -m644 logger.conf "${pkgdir}"/usr/share/tribler/
  install -d "${pkgdir}"/usr/share/{applications,pixmaps}
  install -m644 Tribler/Main/Build/Ubuntu/tribler.desktop "${pkgdir}"/usr/share/applications
  install -m644 Tribler/Main/Build/Ubuntu/tribler.xpm "${pkgdir}"/usr/share/pixmaps
  install -m644 Tribler/Main/Build/Ubuntu/tribler_big.xpm "${pkgdir}"/usr/share/pixmaps
  install -m755 debian/bin/tribler "${pkgdir}"/usr/bin
}

