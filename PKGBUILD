# Maintainer: cth451 <cth451@gmail.com>
pkgname=flatplat-theme
pkgver=3.14
pkgrel=1
pkgdesc="A Material Design-like flat theme for GTK3, GTK2, Metacity, and GNOME-Shell. This theme requires GNOME 3.14, and doesn't work properly with other versions."
arch=('any')
url="http://gnome-look.org/content/show.php/Flat-Plat+3.14?content=167704"
license=('GPL')
depends=('librsvg' 'gtk-engine-murrine')
optdepends=()
provides=()
conflicts=()
replaces=()
source=("https://dl.dropboxusercontent.com/s/xmd3o9uw9euloez/Flat-Plat.tar.gz")
sha256sums=('39984505fb570f5aaf82cde36688e0320f176c1f16a8b846b6eafd11a99ca221')

package() {
  cd "Flat-Plat"
  install -dm 755 "${pkgdir}"/usr/share/themes/Flat-Plat
  cp -dr --no-preserve='ownership,mode' * "${pkgdir}"/usr/share/themes/Flat-Plat
}
