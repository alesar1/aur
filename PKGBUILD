 
# Maintainer: Jan Neumann <neum dot ja at gmail dot com>


pkgname=liquidshell-git
_gitname=liquidshell
pkgver=r266.d12f28a
pkgrel=1
pkgdesc='Alternative desktop replacement for Plasma, using QtWidgets instead of QtQuick to ensure hardware acceleration is not required'
arch=('x86_64')
url='https://cgit.kde.org/liquidshell.git/'
license=('GPL3')
depends=('networkmanager-qt' 'bluez-qt' 'kcmutils' 'knewstuff' 'packagekit-qt5' 'hicolor-icon-theme')
makedepends=('cmake' 'extra-cmake-modules' 'git' 'ruby' 'svn')
optdepends=('ksysguard' 'kconfig')
source=("git+git://anongit.kde.org/liquidshell.git")
sha256sums=('SKIP')

pkgver() {
   cd ${_gitname}
   
   printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

build() {
   cd ${_gitname}

   mkdir build && cd build
   cmake .. \
         -DCMAKE_INSTALL_PREFIX=/usr
   make fetch-translations

}

package() {

make -C ${_gitname}/build DESTDIR=${pkgdir} install

}
