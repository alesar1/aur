# Maintainer: Julian Thonhauser <julthon@gmail.com>
pkgname=gnome-mojave-timed-wallpaper
pkgver=v2
pkgrel=1
pkgdesc="Gnome time based mojave wallpaper"
url="https://github.com/julthon/gnome-mojave-timed-wallpaper"
arch=(any)
depends=(gnome-shell gnome-backgrounds)
source=("$pkgname-$pkgver.tar.gz::https://github.com/julthon/gnome-mojave-timed-wallpaper/releases/download/$pkgver/gnome-mojave-timed-wallpaper_$pkgver.tar.gz")
md5sums=('1ffc2b56f4a9c332c3c6d575c11e00dc')

package() {
  _instdir="$pkgdir/usr/share/backgrounds"
  _hookdir="$pkgdir/usr/share/libalpm/hooks"
  mkdir -p $_instdir $_hookdir
  cp -dpr --no-preserve=ownership "$srcdir/mojave" $_instdir
  cp -dp --no-preserve=ownership "$srcdir/adwaita-timed.xml" "$_instdir/mojave/adwaita-timed.xml"
  cp -dp --no-preserve=ownership $startdir/*.hook "$_hookdir"
}

