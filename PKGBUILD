# Maintainer: FFY00 <filipe.lains@gmail.com>

pkgname=tribler
pkgver=7.1.0
_ever=exp3
_gver=$pkgver-$_ever
pkgrel=1
pkgdesc="Privacy enhanced BitTorrent client with P2P content discovery"
url="http://www.tribler.org/"
arch=(any)
license=('LGPL3')
depends=('python2-cryptography' 'python2-feedparser' 'python2-apsw' 'python2-cherrypy' 'python2-plyvel' 'python2-pillow' 'python2-pyqt5' 'qt5-svg' 'phonon-qt5-vlc' 'python2-feedparser' 'python2-chardet' 'python2-psutil' 'python2-meliae'
'python2-decorator' 'python2-netifaces' 'python2-requests' 'python2-twisted' 'libsodium' 'libtorrent-rasterbar' 'python2-m2crypto' 'python2-configobj' 'python2-matplotlib' 'python2-service_identity' 'python2-keyring' 'python2-keyring.alt')
optdepends=('vlc: for internal video player')
makedepends=('python2-setuptools')
provides=('tribler' 'python2-pyipv8')
conflicts=('tribler' 'python2-pyipv8')
source=("git+https://github.com/Tribler/tribler.git#tag=v$_gver")
sha256sums=('SKIP')

prepare() {
  cd $srcdir/$pkgname
  git submodule update --init --recursive
}

build () {
  cd $srcdir/$pkgname
  python2 setup.py build
}

package() {
  cd $srcdir/$pkgname

  python2 setup.py install --root=$pkgdir --optimize=1

  install -dm 755 $pkgdir/usr/{bin,share/tribler}
  cp -dr --no-preserve=ownership Tribler $pkgdir/usr/share/tribler
  cp -dr --no-preserve=ownership TriblerGUI $pkgdir/usr/share/tribler
  ln -s Tribler/Core/CacheDB/schema_sdb_v*.sql $pkgdir/usr/share/tribler/Tribler

  install -dm 644 $pkgdir/usr/share/{applications,pixmaps}
  install -Dm 644 Tribler/Main/Build/Ubuntu/tribler.desktop $pkgdir/usr/share/applications
  install -Dm 644 Tribler/Main/Build/Ubuntu/tribler.xpm $pkgdir/usr/share/pixmaps
  install -Dm 644 Tribler/Main/Build/Ubuntu/tribler_big.xpm $pkgdir/usr/share/pixmaps
  install -Dm 755 debian/bin/tribler $pkgdir/usr/bin
  install -Dm 644 logger.conf $pkgdir/usr/share/tribler/
  install -Dm 644 run_tribler.py $pkgdir/usr/share/tribler/
  install -Dm 644 check_os.py $pkgdir/usr/share/tribler/

  cp -dr --no-preserve=ownership twisted $pkgdir/usr/share/tribler
  cp -dr --no-preserve=ownership electrum $pkgdir/usr/share/tribler
}

