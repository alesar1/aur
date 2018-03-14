# Maintainer: degreeme <suratovvlad@gmail.com>

pkgname=texstudio-dark-git
pkgver=2.12.8.r18.g71585dcf
pkgrel=1
pkgdesc="Integrated writing environment for creating LaTeX documents. Dark version."
arch=('i686' 'x86_64')
url="http://texstudio.sourceforge.net/"
license=('GPL')
depends=('poppler-qt5' 'qt5-svg' 'qt5-script' 'libxkbcommon-x11' 'libqdark-git')
makedepends=('qt5-tools')
optdepends=('evince: pdf reader'
            'okular: alternate pdf reader')
conflicts=('texstudio')
source=("${pkgname%-*}::git+https://github.com/suratovvlad/texstudio.git#branch=darktheme")
sha512sums=('SKIP')

pkgver() {
  cd ${pkgname%-*}

  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}


build() {
    cd ${pkgname%-*}
    qmake-qt5 CONFIG-="debug" texstudio.pro
    make
}

package() {
    cd ${pkgname%-*}
    make INSTALL_ROOT="$pkgdir" install
}