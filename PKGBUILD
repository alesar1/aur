# $Id$
# Contributor: dibblethewrecker dibblethewrecker.at.jiwe.dot.org

pkgname=magickthumbnail
pkgver=1.0
pkgrel=1
pkgdesc="Helper program for ROX-Filer that provides thumbnails for image and font files"
arch=('i686' 'x86_64')
url="http://roxos.sunsite.dk/dev-contrib/guido/"
license=("GPL2")
depends=('rox' 'rox-lib')
install=magickthumbnail.install
source=(http://roxos.sunsite.dk/dev-contrib/guido/MagickThumbnail.tar.bz2)
md5sums=('7407cd73f085d13682ac82516988c37c')

build() {
  mkdir -p $startdir/pkg/usr/share
  cp -rp MagickThumbnail $startdir/pkg/usr/share

   # create a shellscript which is known in the PATH
  mkdir -p $startdir/pkg/usr/bin
  echo "#!/bin/sh" > "$startdir/pkg/usr/bin/magickthumbnail"
  echo "exec /usr/share/MagickThumbnail/AppRun \"\$@\"" >> "$startdir/pkg/usr/bin/magickthumbnail"
  chmod a+x $startdir/pkg/usr/bin/magickthumbnail
}
