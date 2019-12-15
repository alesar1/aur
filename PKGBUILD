pkgname=kicad-library-digikey-git
pkgver=r228.0802230
pkgrel=1
pkgdesc="Part footprints and symbols for KiCAD from Digi-Key"
arch=('any')
url="https://github.com/digikey/digikey-kicad-library"
license=('CC-BY-SA 4.0')
makedepends=('git')
depends=('kicad')
conflicts=('digikey-kicad-library' 'kicad-digikey-library')
provides=('kicad-library-digikey')
_reponame=digikey-kicad-library
source=("git+https://github.com/digikey/${_reponame}.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_reponame"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

#build() {
#  cd "$srcdir"
#  mkdir -p "$srcdir/build/"
#  cd "$srcdir/build"
#  cmake ../${_reponame} -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
#}

package() {
  # footprints
  _DEST_DIR="usr/share/kicad/modules"
  mkdir -p "${pkgdir}/${_DEST_DIR}"
  cp -a "${srcdir}/${_reponame}"/digikey-footprints.pretty "${pkgdir}/${_DEST_DIR}/."
  
  # symbols
  _DEST_DIR="usr/share/kicad/library"
  mkdir -p "${pkgdir}/${_DEST_DIR}"
  cp -a "${srcdir}/${_reponame}"/digikey-symbols/* "${pkgdir}/${_DEST_DIR}/."
}
