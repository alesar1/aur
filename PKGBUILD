# Maintainer: Stuart Mumford <stuart@cadair.com>
pkgname=krunner-pass-git
pkgver=1.3.0
pkgrel=1
pkgdesc="A krunner plugin to retrieve a password from the password-store (https://www.passwordstore.org/)"
arch=('any')
url="https://github.com/akermu/krunner-pass"
license=('GPL')
depends=('krunner' 'qt5-base' 'ki18n')
makedepends=('cmake' 'extra-cmake-modules')
source=("git://github.com/akermu/krunner-pass")
md5sums=('SKIP')

build() {
  mkdir -p build
  cd build
  cmake ../krunner-pass -DCMAKE_INSTALL_PREFIX=`kf5-config --prefix` -DQT_PLUGIN_INSTALL_DIR=`kf5-config --qt-plugins` -DCMAKE_BUILD_TYPE=Release
  make
}

package() {
  cd build
  make install DESTDIR="${pkgdir}"
}
