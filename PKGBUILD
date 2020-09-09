# Maintainer: David Baum <david.baum@naraesk.eu>
pkgname=plasma-runners-translator
pkgver=1.2.1
pkgrel=1
pkgdesc="Translates words and sentences into any language"
arch=('i686' 'x86_64')
url="https://github.com/naraesk/krunner-translator"
license=('GPL3')
groups=()
depends=('krunner')
makedepends=('cmake' 'extra-cmake-modules' 'ki18n' 'qt5-base' 'qt5-tools')
optdepends=()
provides=()
conflicts=('kdeplasma-addons-runners-translator')
replaces=(plasma5-runners-translator)
backup=()
options=()
install=''
changelog=''
source=("$pkgname-$pkgver.tar.gz::https://github.com/naraesk/krunner-translator/archive/v1.2.1.tar.gz")
noextract=()
sha256sums=('ce4cde885c0bd0b1542dc5b17246a337b6657db0e976d77afb7e1858fc9867f8')

prepare() {
  cd krunner-translator-${pkgver}
  mkdir -p build
}

build() {
  cd krunner-translator-${pkgver}/build
  export QT_SELECT=5
  cmake ../ \
    -DCMAKE_INSTALL_PREFIX=`qtpaths --install-prefix` \
    -DKDE_INSTALL_QTPLUGINDIR=`qtpaths --plugin-dir` \
    -DCMAKE_BUILD_TYPE=Release
  make -j$(nproc)
}

package() {
  cd krunner-translator-${pkgver}/build
  make DESTDIR="${pkgdir}" install
}
