# $Id: pkgbuild-mode.el,v 1.23 2007/10/20 16:02:14 juergen Exp $
# Maintainer: Étienne Deparis <etienne@depar.is>
pkgname=hubic-gtk
pkgver=0.5
pkgrel=4
_fossilver=641a085d76
pkgdesc="An attempt to get a status icon for Hubic on Linux"
arch=('any')
url="http://projects.depar.is/divers/doc/tip/hubic-gtk/README.md"
license=('custom:WTFPL')
depends=('hubic' 'python2' 'pygtk' 'python2-dbus' 'python2-notify' 'python2-xdg')
install=$pkgname.install
source=($pkgname-$pkgver.tar.gz::http://projects.depar.is/divers/raw/hubic-gtk/archlinux/$pkgname-$pkgver.tar.gz?name=$_fossilver)
sha1sums=('641a085d766369b72db6b33d5388bd357cc2eebc')

build(){
  cd $srcdir/$pkgname
  make build
}

package() {
  cd $srcdir/$pkgname
  make install DEST=$pkgdir/usr
}

# vim:set ts=2 sw=2 et:
