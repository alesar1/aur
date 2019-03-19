# Maintainer: Shatur <genaloner@gmail.com>

# Use KDE API for tray for additional feautures (this also add knotifier dependency, recommended for Plasma users).
PLASMA=true

pkgname=optimus-manager-qt-git
pkgver=1.0.0.r21.g25206c8
pkgrel=1
pkgdesc="A Qt interface for Optimus Manager that allows to configure and switch GPUs on Optimus laptops using the tray menu"
arch=('x86_64')
url="https://github.com/Shatur95/optimus-manager-qt"
license=('GPL3')
depends=('qt5-base' 'optimus-manager')
makedepends=('qt5-tools' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+https://github.com/Shatur95/optimus-manager-qt")
sha256sums=('SKIP')

if [ ${PLASMA} == true ]; then
  depends+=('knotifications' 'kiconthemes')
fi

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

# Clone submodules
prepare() {
  cd "${pkgname%-git}"
  
  git submodule init
  git submodule update
}

build() {
  cd "${pkgname%-git}"
  
  if [ ${PLASMA} == true ]; then
    qmake "DEFINES += PLASMA"
  else
    qmake
  fi
  
  make
}

package() {
  cd "${pkgname%-git}"
  
  make INSTALL_ROOT="$pkgdir/" install
} 
