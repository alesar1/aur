# Maintainer: Christopher Snowhill <kode54@gmail.com>
# Contributor: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>

pkgname=eaglemode
pkgver=0.95.2
pkgrel=1
pkgdesc="Visit almost everything in your PC simply by zooming in"
arch=('i686' 'x86_64')
url="http://eaglemode.sourceforge.net/"
license=('GPL3')
depends=('desktop-file-utils' 'gtk2' 'hicolor-icon-theme' 'libtiff'
         'libpng' 'librsvg' 'poppler-glib' 'xdg-utils' 'xine-lib' 'xz')
makedepends=('perl')
source=(https://downloads.sourceforge.net/$pkgname/$pkgname-$pkgver.tar.bz2)
sha256sums=('0c99daf98dd2569adc8e572f7735ad8a6b3574bd358cc9a3d66714950e25edb4')

build() {
  cd "${srcdir}"/$pkgname-$pkgver

  perl make.pl build continue=yes
}

package() {
  cd "${srcdir}"/$pkgname-$pkgver

  perl make.pl install dir=/opt/$pkgname root="${pkgdir}" menu=yes bin=yes

# icons
  install -Dm644 "${srcdir}"/$pkgname-$pkgver/res/icons/${pkgname}32.png \
    "${pkgdir}"/usr/share/icons/hicolor/32x32/apps/$pkgname.png
  install -Dm644 "${srcdir}"/$pkgname-$pkgver/res/icons/${pkgname}48.png \
    "${pkgdir}"/usr/share/icons/hicolor/48x48/apps/$pkgname.png
}
