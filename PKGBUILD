# Maintainer: Maxime Vincent (maximevince) <maxime [dot] vince [at] gmail [dot] com>

pkgname=radare2-cutter-ghidra
pkgver=1.9.r1209.gb4535227
pkgrel=1
pkgdesc='A Qt and C++ GUI for radare2 reverse engineering framework with Python and Ghidra support'
url='https://github.com/radareorg/cutter'
arch=('i686' 'x86_64')
license=('GPL')
depends=('python' 'radare2' 'capstone' 'qt5-base' 'qt5-svg' 'qt5-webengine' 'icu' 'pyside2' 'shiboken2')
makedepends=('git' 'cmake')
optdepends=()
provides=('radare2-cutter')
backup=()
source=("${pkgname}::git+https://github.com/radareorg/cutter.git")
md5sums=('SKIP')

pkgver() {
  cd ${pkgname}
  # Remove 'v' prefix on tags; prefix revision with 'r'; replace all '-' with '.'
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd ${pkgname}
  git submodule update --init --recursive

  mkdir -p build
  cd build
  git clone --depth 1 --recurse-submodules https://github.com/radareorg/r2ghidra-dec.git
  qmake-qt5 ../src/Cutter.pro CUTTER_ENABLE_PYTHON=true CUTTER_ENABLE_PYTHON_BINDINGS=true CUTTER_R2GHIDRA_STATIC=true R2GHIDRA_SOURCE=`pwd`/r2ghidra-dec
}

build() {
  cd "${pkgname}/build"
  make 
}

package() {
  cd ${pkgname}

  install -DTm755 build/Cutter "${pkgdir}/usr/bin/Cutter"
  install -DTm644 src/org.radare.Cutter.desktop "${pkgdir}/usr/share/applications/org.radare.Cutter.desktop"
  install -DTm644 src/img/cutter.svg "${pkgdir}/usr/share/icons/hicolor/scalable/apps/cutter.svg"
  install -DTm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -dm755 docs/ "${pkgdir}/usr/share/doc/${pkgname}/"
  cp -a docs/* "${pkgdir}/usr/share/doc/${pkgname}/"
}
