# Maintainer: Harry Jeffery <harry|@|exec64|.|co|.|uk>

pkgname=imv
pkgver=1.2.0
pkgrel=1
pkgdesc="Image viewer for Wayland and X11"
url="http://github.com/eXeC64/imv"
arch=('x86_64' 'i686')
license=('GPL')
depends=(
  'freeimage'
  'sdl2'
  'sdl2_ttf'
  'fontconfig'
)
optdepends=(
  'cmocka: for running unit tests'
)
conflicts=('renameutils')
source=("$pkgname::git+https://github.com/eXeC64/imv.git#tag=v${pkgver}")
sha1sums=('SKIP')

build() {
  cd "${srcdir}/${pkgname}"
  make
}

package() {
  cd "${srcdir}/${pkgname}"
  make DESTDIR="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:
