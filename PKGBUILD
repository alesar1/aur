# Maintainer: Michele Mocciola <mickele>

pkgname=salome-yacs
pkgver=7.8.0
pkgrel=1
pkgdesc="Generic platform for Pre and Post-Processing for numerical simulation - YACS Module"
url="http://www.salome-platform.org"
depends=("salome-gui>=${pkgver}" 'salome-gui<${pkgver:0:2}$((${pkgver:2:1}+1)).0' 'graphviz' 'qscintilla')
makedepends=('doxygen' 'swig2' 'python2-sphinx')
arch=('i686' 'x86_64')
license=('LGPL')
source=("${pkgname}.sh" "http://files.salome-platform.org/Salome/Salome${pkgver}/src${pkgver}.tar.gz")

# _source=yacs
_source=YACS_SRC
_basedir=/opt/salome
_installdir=${_basedir}
_profiledir=${_basedir}/env.d
_paraviewrootdir=/usr
_paraviewver=5.0

prepare() {
#  msg "Connecting to git server..."
#  if [[ -d ${_source} ]] ; then
#     rm -rf ${_source}
#  fi
#  git clone git://git.salome-platform.org/modules/${_source}.git
#  cd ${_source}
#  git checkout V${pkgver:0:1}_${pkgver:2:1}_${pkgver:4:1}
#  msg "GIT checkout done or server timeout"

  cd ${_source}
  
  for _FILE in {"src/runtime/Test/CMakeLists.txt","src/yacsloader/pmml/CMakeLists.txt","src/yacsloader/Test/CMakeLists.txt"}
  do
    sed -e "s|\${CPPUNIT_INCLUDE_DIRS}|\${CPPUNIT_INCLUDE_DIRS}\n  \${LIBXML2_INCLUDE_DIR}|" -i ${_FILE}
  done

  sed -e "s|\${PYTHON_INCLUDE_DIR}|\${PYTHON_INCLUDE_DIR}\n  \${LIBXML2_INCLUDE_DIR}|" -i src/yacsloader/CMakeLists.txt
  sed -e "s|\${PYTHON_INCLUDE_DIRS}|\${PYTHON_INCLUDE_DIRS}\n  \${LIBXML2_INCLUDE_DIR}|" -i src/yacsloader_swig/CMakeLists.txt
  sed -e "s|\${PYTHON_INCLUDE_DIR}|\${PYTHON_INCLUDE_DIR}\n  \${LIBXML2_INCLUDE_DIR}|" -i src/evalyfx/CMakeLists.txt
  
  # python -> python2
  for _FILE in `grep -Rl "/usr/bin/env python" * `
  do
	sed -e "s|/usr/bin/env python|/usr/bin/env python2|" -i ${_FILE}
  done
}

build() {
  source ${_profiledir}/salome-kernel.sh
  source ${_profiledir}/salome-gui.sh

  rm -rf "$srcdir/$_source/build"
  mkdir -p "$srcdir/$_source/build"
  cd "$srcdir/$_source/build"

  # generic options
  cmake_options+=" -DCMAKE_BUILD_TYPE=Release"
  cmake_options+=" -DCMAKE_INSTALL_PREFIX=${_installdir}"

  # debug options
  cmake_options+=" -DCMAKE_VERBOSE_MAKEFILE:BOOL=OFF"
  cmake_options+=" -DSALOME_CMAKE_DEBUG:BOOL=OFF"

  # mpi
  cmake_options+=" -DSALOME_USE_MPI:BOOL=ON"

  # python2
  cmake_options+=" -DPYTHON_EXECUTABLE=/usr/bin/python2"

  # sphinx-2
  cmake_options+=" -DSPHINX_EXECUTABLE=/usr/bin/sphinx-build2"
  cmake_options+=" -DSPHINX_APIDOC_EXECUTABLE=/usr/bin/sphinx-apidoc2"

  # swig2
  cmake_options+=" -DSWIG_EXECUTABLE=/usr/bin/swig-2"

  # libxml2
  cmake_options+=" -DLIBXML2_ROOT_DIR=/usr"
  cmake_options+=" -DLibXml2_DIR=/usr/lib/cmake/libxml2"
  cmake_options+=" -DLIBXML2_INCLUDE_DIR=/usr/include/libxml2"

  cmake ${cmake_options} ..
     
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

  # install profile
  install -D -m755 "${srcdir}/${pkgname}.sh" \
                   "${pkgdir}${_profiledir}/${pkgname}.sh"

  rm -f "${pkgdir}${_installdir}/bin/salome/test/CTestTestfile.cmake"
}
md5sums=('b32e732d5f5633ecc8484bb33a731cd0'
         '0f6de10ad9d9c646fce3ca21a7dab46a')
