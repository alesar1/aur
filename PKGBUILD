# Maintainer: Arne Hoch <arne@derhoch.de>

pkgname=dbeaver
pkgver=3.5.5
pkgrel=1
pkgdesc="A free universal database tool for developers and database administrators"
arch=('i686' 'x86_64')
url="http://dbeaver.jkiss.org/"
license=("GPL2")
depends=('java-runtime>=1.6' 'gtk2' 'gtk-update-icon-cache')
#makedepends=('unzip')
install=dbeaver.install

source=(dbeaver.desktop dbeaver.install)
source_i686=("http://dbeaver.jkiss.org/files/$pkgver/dbeaver-ce-$pkgver-linux.gtk.x86.tar.gz")
source_x86_64=("http://dbeaver.jkiss.org/files/$pkgver/dbeaver-ce-$pkgver-linux.gtk.x86_64.tar.gz")

sha256sums=('cf1e850dcb3544507eeb59b8d2e84b67cd25b546e3eaf03a0ab27ca841361478'
            '0c2a75baa39459fa56159e982d9f28c966837561bd52dffd24bac87b8d65555f')
sha256sums_i686=('ede6e83a07844a5f54ab6794c327a37d0eee2b1293635034108cfc1084d59d37')
sha256sums_x86_64=('a544767c25551ce64f653394e79797d35544e1e61cfa65c627db0d21805f204a')

package() {
  cd $pkgdir
  mkdir -p opt/
  mkdir -p usr/bin
  mkdir -p usr/share/applications
  mkdir -p usr/share/icons/hicolor/48x48/apps

  cp -r $srcdir/$pkgname opt/
  cp opt/dbeaver/icon.xpm usr/share/icons/hicolor/48x48/apps/dbeaver.xpm
  ln -s /opt/dbeaver/dbeaver usr/bin/dbeaver
  install -m 644 $srcdir/dbeaver.desktop $pkgdir/usr/share/applications/
}
