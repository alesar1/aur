# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>
# Contributor: Atterratio <atterratio@gmail.com>

pkgname=q4wine-git
pkgver=v1.3.1.9.g14e98d4
pkgrel=1
pkgdesc="A Qt GUI for Wine. (GIT Version)"
arch=('i686' 'x86_64')
url='http://sourceforge.net/projects/q4wine'
license=('GPL3')
depends=('qt-solutions-git'
         'icoutils'
         'wine'
         'which'
         'desktop-file-utils'
         'hicolor-icon-theme'
         )
depends_i686=('lib32-mesa-libgl') #(?)
makedepends=('cmake'
             'git'
             'qt5-tools'
             )
optdepends=('winetricks: Tweak wine'
            'fuseiso: Mount ISO files'
            )
conflicts=('q4wine')
provides=('q4wine')
source=('git://github.com/brezerk/q4wine.git')
sha1sums=('SKIP')

pkgver() {
  cd q4wine
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../q4wine \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DLIBS_ENTRY_PATH=/usr/lib \
    -DQT5=ON \
    -DWITH_SYSTEM_SINGLEAPP=ON
  make
}

package() {

  make -C build DESTDIR="${pkgdir}" install
}
