# Maintainer: David Rosenstrauch <darose@darose.net>
pkgname=wallpaper-lightning
pkgver=1
pkgrel=4
pkgdesc="'Lightning' wallpaper that used to be included in kdeartwork-weatherwallpapers"
arch=('any')
url="http://kde-look.org/content/show.php/Lightning002?content=78438"
license=('GPL')
source=('https://dl.opendesktop.org/api/files/downloadfile/id/1460899772/s/4273874cc768ee958875f4faf33ff859/t/1523385906/u/94773/78438-Lightning1920.jpg')
md5sums=('5ec093bbe2b9d1d1c44d61078ea4949b')

package() {
  cd "$srcdir"
  install -d $pkgdir/usr/share/wallpapers/Lightning/
  cp 78438-Lightning1920.jpg $pkgdir/usr/share/wallpapers/Lightning/Lightning1920.jpg
}
