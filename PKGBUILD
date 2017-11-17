# Maintainer: Pierpaolo Valerio <gondsman@techgeek.co.in>
pkgname=cirkuit-kf5-git
pkgver=r406.d9ff4c1
pkgrel=2
pkgdesc="Small application helping you to create circuit diagrams"
arch=('i686' 'x86_64')
url="git://anongit.kde.org/cirkuit.git"
license=('GPL')
depends=('poppler-qt5' 'm4' 'ghostscript' 'texlive-pstricks' 'netpbm' 'knewstuff' 'ktexteditor' 'kdelibs4support' 'hicolor-icon-theme')
optdepends=('dpic' 'gnuplot')
makedepends=('git' 'texlive-core' 'automoc4' 'cmake' 'extra-cmake-modules' 'kdesignerplugin')
provides=('cirkuit')
conflicts=('cirkuit')
source=("git://anongit.kde.org/cirkuit.git#branch=frameworks")
md5sums=('SKIP')
_gitname=cirkuit
options=('!makeflags')

pkgver() {
  cd "$_gitname"
  printf "r%s.%s" $(git rev-list --count HEAD) $(git rev-parse --short HEAD)
}

prepare() {
  cd "$_gitname"/src/backends
  sed -i 's/SERVICE_TYPES cirkuit_backend.desktop/DEFAULT_SERVICE_TYPE/g' circuitmacros/CMakeLists.txt
  sed -i 's/SERVICE_TYPES cirkuit_backend.desktop/DEFAULT_SERVICE_TYPE/g' gnuplot/CMakeLists.txt
  sed -i 's/SERVICE_TYPES cirkuit_backend.desktop/DEFAULT_SERVICE_TYPE/g' null/CMakeLists.txt
  sed -i 's/SERVICE_TYPES cirkuit_backend.desktop/DEFAULT_SERVICE_TYPE/g' pstricks/CMakeLists.txt
  sed -i 's/SERVICE_TYPES cirkuit_backend.desktop/DEFAULT_SERVICE_TYPE/g' tikz/CMakeLists.txt
  cd ..
  sed -i 's/loadFile(filename)/loadFile(KUrl(filename))/g' mainwindow.cpp
}

build() {
  cd "$_gitname"
  rm -rf build
  mkdir  build
  cd build
  cmake .. -DCMAKE_INSTALL_PREFIX=/usr
  make clean
  make
}

package() {
  cd "$_gitname"/build
  make DESTDIR=${pkgdir} install
  mv ${pkgdir}/usr/lib64/* ${pkgdir}/usr/lib
  rmdir ${pkgdir}/usr/lib64
  rm -rf ${pkgdir}/usr/share/apps/katepart/syntax/gnuplot.xml
}

