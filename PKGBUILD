# Maintainer: Étienne Deparis <etienne@depar.is>
pkgname=chwall
pkgver=0.5.0
pkgrel=2
pkgdesc="A tiny wallpaper changer, written in python"
arch=("any")
url="https://git.deparis.io/chwall/about/"
license=("WTFPL")
depends=("gtk3" "python-cssselect" "python-gobject" "python-lxml"
         "python-pillow" "python-requests" "python-xdg" "python-yaml")
makedepends=("python-setuptools" "imagemagick")
source=("https://git.deparis.io/${pkgname}/snapshot/${pkgname}-${pkgver}.tar.gz")
sha256sums=('2532e437035cda901d3fa93077054d2506d02b7491e6c4ae9f060a4e2f326195')

package() {
  cd "$srcdir/$pkgname-$pkgver"

  make dist DESTDIR="$pkgdir"
}
