# Contributor: Pedram Pourang <tsujan2000@gmail.com>
# Maintainer: Jan Neumann <neum DOT ja AT gmail DOT com

pkgname=kvantum-qt6-git
_gitname=Kvantum
pkgver=1.0.0.r20.gafc4ad0a
pkgrel=1
pkgdesc="Qt6 component of the Kvantum theme engine"
arch=('x86_64')
url="https://github.com/tsujan/Kvantum"
license=('GPL3')
groups=('qt')
depends=('kvantum-qt5-git' 'qt6-svg' 'qt5-x11extras' 'hicolor-icon-theme' 'kwindowsystem')
makedepends=('cmake' 'qt6-tools' 'git')
conflicts=('kvantum-qt5')
provides=('kvantum-qt6')
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
   cd ${srcdir}/${_gitname}

   git describe --long --tags | sed 's/^V//;s/\([^-]*-g\)/r\1/;s/-/./g'

}

prepare() {
  # Fix Qt6 build with Qt5 installed
  sed 's|Qt6 Qt5|Qt6|' -i ${srcdir}/${_gitname}/${_gitname}/style/CMakeLists.txt
}

## Thanks ArchangeGabriel

build() {
   cd ${srcdir}/${_gitname}/${_gitname}
   mkdir -p build && cd build
   cmake .. \
         -DCMAKE_INSTALL_PREFIX=/usr \
         -DENABLE_QT5=OFF
   make
   
}

package() {
   make -C ${srcdir}/${_gitname}/${_gitname}/build DESTDIR=${pkgdir}/ install
    
}
