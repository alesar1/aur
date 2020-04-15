# Maintainer: Kav <hello [at] properlypurple [dot] com

pkgname=plasma5-applets-nx-audio
_pkgname=${pkgname%-git}
_repodir=nx-audio-applet
pkgver=r20.c06a670
pkgrel=1
pkgdesc="Audio applet from NX Desktop, by Nitrux SA."
arch=('any')
url="https://github.com/nx-desktop/nx-audio-applet.git"
license=('GPL')
depends=('plasma-workspace' 'qt5-base')
makedepends=('git' 'extra-cmake-modules' 'kdesdk-meta')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
source=("git+https://github.com/nx-desktop/nx-audio-applet.git#branch=master")
md5sums=('SKIP')

pkgver() {
  cd "${_repodir}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${_repodir}"

  mkdir -p build
  cd build
  rm -rf *

  cmake -DCMAKE_INSTALL_PREFIX=`kf5-config --prefix` -DCMAKE_BUILD_TYPE=Release -DLIB_INSTALL_DIR=lib -DKDE_INSTALL_USE_QT_SYS_PATHS=ON ../
  make
}

package() {
  cd "${_repodir}"/build

  make install DESTDIR="${pkgdir}"
}
