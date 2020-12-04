# Maintainer: Stefano Marsili <efanomars@gmx.ch>

pkgname=stmm-games
pkgver=0.30
pkgrel=1
pkgdesc="C++ 2D games library"
url='https://efanomars.com/libraries/stmm-games'
arch=('x86_64' 'aarch64')
license=('LGPL3')

depends=(
    'stmm-input-au>=0.9'
    'stmm-input>=0.16'
    'gtkmm3' 'librsvg' 'libxml++2.6')
makedepends=('cmake' 'doxygen' 'graphviz' 'python')
optdepends=()

#provides=("stmm-games")
#replaces=("stmm-games")
#conflicts=("stmm-games")

source=('https://efanomars.com/sources/stmm-games-0.30.tar.gz')
sha256sums=('8af841b9172a732955393f74831abb77fca47ec6f95a4ee44fa664a98c372863')

build() {
  cd "${srcdir}/stmm-games"

  ./scripts/install_stmm-games-all.py -b=Release -s=Off -t=Off -d=Off --installdir="/usr" --no-install --no-sudo
}

package() {
  cd "${srcdir}/stmm-games"

  ./scripts/priv/dd_install_stmm-games-all.py -b=Release -s=Off -t=Off -d=Off --installdir="/usr" --destdir="${pkgdir}" --no-configure --no-make --no-sudo
}
