# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=libkdcraw-frameworks-git
pkgver=5.0.0.r1065.e1a7d02
pkgrel=1
pkgdesc="A C++ interface used to decode RAW picture. KF5 Frameworks branch. (GIT version)"
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/kde/kdegraphics/libs/libkdcraw'
license=('GPL' 'LGPL' 'FDL')
depends=('kconfig' 'ki18n' 'libraw' 'hicolor-icon-theme')
makedepends=('extra-cmake-modules' 'kdoctools' 'git' 'python')
conflicts=('libkdcraw')
source=('git://anongit.kde.org/libkdcraw#branch=frameworks')
sha1sums=('SKIP')
install=libkdcraw-frameworks-git.install

pkgver() {
  cd libkdcraw
  _ver="$(cat CMakeLists.txt | grep -m3 -e KDCRAW_LIB_MAJOR_VERSION -e KDCRAW_LIB_MINOR_VERSION -e KDCRAW_LIB_PATCH_VERSION | cut -d '"' -f2 | paste -sd'.')"
  echo "${_ver}.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../libkdcraw \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIB_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  make -C build DESTDIR="${pkgdir}" install
}
