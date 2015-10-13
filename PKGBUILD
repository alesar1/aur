# Maintainer: willemw <willemw12@gmail.com>
# Contributor: Vladimir Chizhov <jagoterr@gmail.com>

pkgname=decibel-audio-player
pkgver=1.08
pkgrel=4
pkgdesc="GTK+ audio player"
arch=('i686' 'x86_64')
url="http://decibel.silent-blade.org/"
license=('GPL')
depends=('desktop-file-utils' 'gstreamer0.10-python' 'mutagen' 'pygtk' 'python2-dbus' 'python2-notify')
#cddb-py
optdepends=('python2-imaging: to display coverart')
install=$pkgname.install
source=(http://decibel.silent-blade.org/uploads/Main/decibel-audio-player-$pkgver.tar.gz)
md5sums=('e8ebaf819c198ff9951903e7c4056aef')

package() {
  cd $pkgname-$pkgver
  make CONFIGURE_IN='sed -e "s|prefix|$(prefix)|g;s|^python |python2 |"' \
       prefix=/usr DESTDIR="$pkgdir/" install
}

