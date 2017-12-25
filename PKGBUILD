# Contributor: royrocks <royrocks13@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=tuxpaint-stamps-git
pkgver=1516.689013db5
pkgrel=2
arch=('any')
pkgdesc="Additional stamps for Tux Paint, cvs version"
url="http://www.newbreedsoftware.com/tuxpaint/"
license=('GPL')
provides=('tuxpaint-stamps')
conflicts=('tuxpaint-stamps')
makedepends=('git')
source=("git+https://git.code.sf.net/p/tuxpaint/tuxpaint-stamps")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  printf "%s.%s" $(git rev-list --count HEAD) $(git rev-parse --short HEAD)
}

build() {
  cd "${pkgname%-git}"
  make PREFIX=/usr
}

package() {
  cd "${pkgname%-git}"
  make DATA_PREFIX=$pkgdir/usr/share/tuxpaint/ install-all
} 
