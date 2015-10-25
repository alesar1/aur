# Maintainer: mickele <mimocciola[at]yahoo[dot]com>
pkgname=python2-ifcopenshell-git
pkgver=0.r355.gc6a265a
pkgrel=1
pkgdesc="Open source IFC library and geometry engine. GIT version for python2."
url="http://ifcopenshell.org/"
arch=('x86_64' 'i686')
license=('GPL3')
depends=('opencascade' 'opencollada' 'boost-libs>=1.58.0' 'python2')
optdepends=()
makedepends=('cmake' 'boost>=1.58.0' 'swig')
conflicts=()
replaces=()
backup=()
source=('IfcOpenShell::git://github.com/IfcOpenShell/IfcOpenShell.git')

pkgver() {
  cd IfcOpenShell

  if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
    echo "$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG}).r$(git rev-list --count ${GITTAG}..).g$(git log -1 --format="%h")"
  else
    echo "0.r$(git rev-list --count master).g$(git log -1 --format="%h")"
  fi
}

prepare(){
  cd "${srcdir}/IfcOpenShell"

  for _FILE in `grep -Rl "COMMAND python" *`; do
    sed -e "s|COMMAND python|COMMAND python2|" -i ${_FILE}
  done

  sed -e 's|#include "SvgSerializer.h"|#include "SvgSerializer.h"\n#include <Standard_Version.hxx>|' -i src/ifcconvert/SvgSerializer.cpp
  
  sed -e 's|\t#include "../ifcgeom/IfcGeom.h"|\t// #include "../ifcgeom/IfcGeom.h"|' -i src/ifcwrap/IfcPython.i
  sed -e 's|\t#include "../ifcgeom/IfcGeomIterator.h"|\t#include "../ifcgeom/IfcGeomIterator.h"\n\t#include "../ifcgeom/IfcGeom.h"|' -i src/ifcwrap/IfcPython.i
}

build() {
  cd "${srcdir}/IfcOpenShell"

  mkdir -p build
  cd "${srcdir}/IfcOpenShell/build"
  local _pythonver=$(python2 --version 2>&1)
  cmake ../cmake \
  	-DCMAKE_INSTALL_PREFIX=/usr \
	-DOCC_INCLUDE_DIR=/opt/opencascade/inc \
	-DOCC_LIBRARY_DIR=/opt/opencascade/lib \
	-DOPENCOLLADA_INCLUDE_DIR=/usr/include/opencollada \
	-DOPENCOLLADA_LIBRARY_DIR=/usr/lib/opencollada \
        -DPYTHON_INCLUDE_DIR:PATH=/usr/include/python${_pythonver:7:3} \
        -DPYTHON_LIBRARY:FILEPATH=/usr/lib64/libpython${_pythonver:7:3}.so
  make
}

package() {
  cd "${srcdir}/IfcOpenShell/build"
  make DESTDIR="${pkgdir}" install

  cd "${srcdir}/IfcOpenShell"
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"

  # file already provided by ifcopenshell/ifcopenshell-git
  rm -f "${pkgdir}"/usr/lib/libIfc*.a
  rm -rf "${pkgdir}/usr/bin"
  rm -rf "${pkgdir}/usr/include"
}

md5sums=('SKIP')
