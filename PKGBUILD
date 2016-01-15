# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>
# Contributor: A Rojas < nqn1976 @ gmail.com >

pkgname=partitionmanager-git
pkgver=2.0.0.r948.15b7fa3
pkgrel=1
pkgdesc="A KDE utility that allows you to manage disks, partitions, and file systems. (GIT version)"
arch=('i686' 'x86_64')
url='http://kde.org/applications/system/kdepartitionmanager'
license=('GPL2')
depends=('kpmcore-git' 'hicolor-icon-theme')
conflicts=('partitionmanager')
provides=('partitionmanager')
makedepends=('extra-cmake-modules' 'kdoctools' 'git' 'python')
source=('git://anongit.kde.org/partitionmanager')
sha1sums=('SKIP')
install=partitionmanager-git.install

pkgver() {
  cd partitionmanager
  _ver="$(cat CMakeLists.txt | grep -m3 -e VERSION_MAJOR -e VERSION_MINOR -e VERSION_RELEASE | cut -d '"' -f2 | paste -sd'.')"
  echo "${_ver}.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../partitionmanager \
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
