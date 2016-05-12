#Maintainer: M0Rf30

pkgname=openbazaard-standalone
pkgver=0.2.0
pkgrel=1
pkgdesc="Server daemon for communication between client and OpenBazaar network"
arch=(any)
url="http://openbazaar.org"
license=('MIT')
depends=(python2)
makedepends=(git upx ucl python2-virtualenv)
source=("https://github.com/OpenBazaar/OpenBazaar-Server/archive/v$pkgver.tar.gz"
	"${pkgname}.service"
	"${pkgname}.conf"
	"${pkgname}.spec"
)
install=${pkgname}.install
options=('!strip')
provides=('openbazaard')
replaces=('openbazaard-git' 'openbazaard-standalone-git')
backup=("var/lib/${pkgname}/ob.cfg"
	"etc/conf.d/${pkgname}.conf")

_srcfolder=OpenBazaar-Server-$pkgver

package(){
  cd $srcdir/${_srcfolder}

  cp ../${pkgname}.spec .

msg2 "Creating an optimized standalone executable"
  virtualenv2 env
  source env/bin/activate
  pip2 install --upgrade -r requirements.txt
  pip2 install https://github.com/pyinstaller/pyinstaller/archive/develop.zip
  env/bin/pyinstaller -F ${pkgname}.spec

msg2 "Symlinking to allow gui to automatically call daemon"
  install -dm755 $pkgdir/opt
  ln -sr /var/lib/openbazaard $pkgdir/opt/OpenBazaar-Server

msg2 "Install systemd service"
  install -Dm644 $srcdir/${pkgname}.service $pkgdir/usr/lib/systemd/system/openbazaard.service

msg2 "Install conf file"
  install -Dm644 $srcdir/${pkgname}.conf $pkgdir/etc/conf.d/openbazaard.conf

msg2 "Install ${_pkgname} scripts"
  install -Dm755 dist/${pkgname} $pkgdir/var/lib/openbazaard/openbazaard
  install -Dm755 ob.cfg $pkgdir/var/lib/openbazaard/ob.cfg
}

md5sums=('297d833b462d1f6a8beb60bc26bde425'
         '58f846fbc1742fea9d245b6f93f6db15'
         'd66496060ae2a28c6f755a1fb29e3f37'
         '6d5c84bead900b863b864f075bac98e4')
