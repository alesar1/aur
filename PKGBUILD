# Maintainer: Michele Mocciola <mickele>

pkgname=salome-smesh
pkgver=7.6.0
pkgrel=4
pkgdesc="Generic platform for Pre and Post-Processing for numerical simulation - SMESH Module"
url="http://www.salome-platform.org"
depends=('salome-geom>=7.6.0' 'salome-geom<7.7.0' 'salome-med>=7.6.0' 'salome-med<7.7.0')
makedepends=('boost' 'swig2' 'python2-sphinx' 'optipng')
arch=('i686' 'x86_64')
conflicts=()
provides=()
license=('LGPL')
source=("salome-smesh.profile")

_source=smesh
_installdir=/opt/salome
_paraviewrootdir=/usr
_paraviewver=4.2

prepare() {
  msg "Connecting to git server..."

  if [[ -d ${_source} ]] ; then
     rm -rf ${_source}
  fi

  git clone git://git.salome-platform.org/modules/${_source}.git
  cd ${_source}
  git checkout V${pkgver:0:1}_${pkgver:2:1}_${pkgver:4:1}

  msg "GIT checkout done or server timeout"
    
  # python -> python2
  for _FILE in `grep -Rl "/usr/bin/env python" * `
  do
	sed -e "s|/usr/bin/env python|/usr/bin/env python2|" -i ${_FILE}
  done
}

build() {
  source /opt/salome/env.d/salome-kernel.sh
  source /opt/salome/env.d/salome-gui.sh
  source /opt/salome/env.d/salome-geom.sh
  source /opt/salome/env.d/salome-med.sh

  rm -rf "${srcdir}/${_source}/build"
  mkdir -p "${srcdir}/${_source}/build"
  cd "${srcdir}/${_source}/build"

  cmake .. \
     -DCMAKE_INSTALL_PREFIX=$_installdir \
     -DCMAKE_CXX_STANDARD=98 \
     -DHDF5_ROOT_DIR=/opt/hdf5-1.8 \
     -DPYTHON_EXECUTABLE=/usr/bin/python2 \
     -DVTK_DIR="${_paraviewrootdir}/lib/cmake/paraview-${_paraviewver}" \
     -DSPHINX_EXECUTABLE=/usr/bin/sphinx-build2 \
     -DSPHINX_APIDOC_EXECUTABLE=/usr/bin/sphinx-apidoc2 \
     -DSWIG_EXECUTABLE=/usr/bin/swig-2

  make
}

package() {
  cd "${srcdir}/${_source}/build"

  make DESTDIR="${pkgdir}" install

  for _FILE in `find -L ${pkgdir}${_installdir} -iname *.py`
  do
    sed -i -e "s|${srcdir}||" ${_FILE}
    sed -i -e "s|${pkgdir}||" ${_FILE}
  done

  for _FILE in share/doc/salome/gui/SMESH/a-deflection1d.png share/doc/salome/gui/SMESH/automaticlength.png share/doc/salome/gui/SMESH/a-maxelarea.png share/doc/salome/gui/SMESH/failed_computation.png share/doc/salome/gui/SMESH/mesh_for_extr_along_path.png share/doc/salome/gui/SMESH/straight_before.png share/doc/salome/gui/SMESH/straight_after.png share/doc/salome/gui/SMESH/curvi_simple_before.png share/doc/salome/gui/SMESH/curvi_simple_after.png share/doc/salome/gui/SMESH/curvi_angles_after.png share/doc/salome/gui/SMESH/circle_simple_before.png share/doc/salome/gui/SMESH/circle_simple_after.png share/doc/salome/gui/SMESH/circle_angles_after.png share/doc/salome/gui/SMESH/length-crit.png share/doc/salome/gui/SMESH/a-maxelvolume.png share/doc/salome/gui/SMESH/meshtrianglemergeelem1.png share/doc/salome/gui/SMESH/mesh_cylinder_hexa.png
  do
    optipng -quiet -force -fix ${pkgdir}${_installdir}/${_FILE}
  done

  install -D -m755 "${srcdir}/${pkgname}.profile" \
                   "${pkgdir}${_installdir}/env.d/${pkgname}.sh"

  rm -f "${pkgdir}${_installdir}/bin/salome/VERSION"
  rm -f "${pkgdir}${_installdir}/bin/salome/test/CTestTestfile.cmake"
}
md5sums=('d339c1021bc8797c7877581b75e5ef23')
