
# Maintainer: Malte Veerman <maldela@halloarsch.de>

_srcname=fancontrol-gui
pkgname=${_srcname}-git
pkgver=0.1.r181.g2eaa157
pkgrel=1
pkgdesc="GUI for the fancontrol script and systemd service"
arch=('any')
url="https://github.com/Maldela/Fancontrol-GUI"
license=('GPL2')
depends=('qt5-quickcontrols' 'qt5-declarative' 'lm_sensors' 'kdeclarative' 'kauth' 'kpackage' 'ki18n' 'kconfig' 'systemd')
makedepends=('git' 'gcc' 'extra-cmake-modules' )
provides=('fancontrol-gui')
conflicts=('fancontrol-gui')
source=('git://github.com/Maldela/fancontrol-gui.git')
md5sums=('SKIP')


pkgver() {
  cd "$srcdir/$_srcname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  mkdir -p "$srcdir/$_srcname/build"
}


build() {
  msg "Starting build..."

  cd "$srcdir/$_srcname/build"

  cmake .. \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DLIB_INSTALL_DIR=lib \
        -DBUILD_TESTING=off
  make
}

package() {
  cd "$srcdir/$_srcname/build"
  make DESTDIR="$pkgdir/" install
}