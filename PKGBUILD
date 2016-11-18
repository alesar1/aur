# Maintainer: Maxime Gauduin <alucryd@archlinux.org>

pkgname=wingpanel-indicator-sound
pkgver=2.0.3
pkgrel=1
pkgdesc='Sound indicator for Wingpanel'
arch=('i686' 'x86_64')
url='https://launchpad.net/wingpanel-indicator-sound'
license=('GPL3')
groups=('pantheon')
depends=('cairo' 'gdk-pixbuf2' 'glib2' 'glibc' 'gtk3' 'libcanberra' 'libgee'
         'libnotify' 'libpulse'
         'libgranite.so' 'libwingpanel-2.0.so')
makedepends=('cmake' 'gobject-introspection' 'gtk2' 'vala')
source=("https://launchpad.net/wingpanel-indicator-sound/loki/${pkgver}/+download/wingpanel-indicator-sound-${pkgver}.tar.xz")
sha256sums=('064f1e831d6122144d7f1a66beb2f026cae6e4db531b0a5830ed545b553609f0')

prepare() {
  cd wingpanel-indicator-sound-${pkgver}

  if [[ -d build ]]; then
    rm -rf build
  fi
  mkdir build
}

build() {
  cd wingpanel-indicator-sound-${pkgver}/build

  cmake .. \
    -DCMAKE_BUILD_TYPE='Release' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -DCMAKE_INSTALL_LIBDIR='/usr/lib' \
    -DGSETTINGS_COMPILE='FALSE'
  make
}

package() {
  cd wingpanel-indicator-sound-${pkgver}/build

  make DESTDIR="${pkgdir}" install
}

# vim: ts=2 sw=2 et:
