# Maintainer: Salamandar <felix@piedallu.me>


pkgname=freecad-linkstage3-git
pkgver=asm3.0.5.3.r1561.gc9cf1b71c
pkgrel=5
pkgdesc='A general purpose 3D CAD modeler - LinkStage3 dev branch, git checkout'
arch=('x86_64')
url='http://www.freecadweb.org/'
license=('LGPL')
conflicts=('freecad')
depends=(

  'boost-libs'

  'calculix'
  'coin'
  'gmsh'
  'med'
  'netcdf'
  'netgen-git'
  'opencascade'
  'vtk'
  'glew'
  'xerces-c'
  'libspnav'
  'shiboken2'
  'jsoncpp'

  # Qt5
  'qt5-base'
  'qt5-webkit'
  'qt5-svg'

  # libxmu-dev
  # libxmu-headers
  # libxmu6
  # libxmuu-dev
  # libxmuu1
  # python-pivy

  # automake
  # dictionaries-common
  # tcl8.5-dev
  # tk8.5-dev
  # libhdf5-dev
  # libfreetype6-dev
  # python-dev

  'python2-matplotlib'
  'python2-pyside2'
  'pyside2-tools'
  'python2-shiboken2'

)
makedepends=(
  'cmake' 'ninja'
  'gcc-fortran'
  'desktop-file-utils'
  'swig'
  'boost'
  'eigen'
)
optdepends=(

)
_gitname='FreeCAD'
source=(
  "git+https://github.com/realthunder/FreeCAD.git#branch=LinkStage3"
  'temporary_fixes.patch'
)
sha256sums=(
  'SKIP'
  '5075eecebc8c523fac521bcae35e0c31593cffcb9c8b731029bd685a9d5608ee'
)


pkgver() {
  cd "${srcdir}/${_gitname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/_//'
}

prepare() {
  cd "${srcdir}/${_gitname}"
  patch -Np1 -i "${srcdir}/temporary_fixes.patch"
}

build() {
  cd "${srcdir}/${_gitname}"

  rm build -rf
  mkdir build -p
  pushd build >/dev/null

  cmake .. \
    -DOpenGL_GL_PREFERENCE=GLVND \
    -DOCC_INCLUDE_DIR='/usr/include/opencascade' \
    -DOCC_LIBRARY_DIR='/usr/lib' \
    -DOpenCASCADE_DIR='/usr/lib/cmake/opencascade' \
    -DFREECAD_USE_OCC_VARIANT="Official Version" \
    -DBUILD_FEM_NETGEN=OFF \
    -DBUILD_QT5=ON \
    -DCMAKE_INSTALL_PREFIX='/usr/lib/freecad' \
    -DCMAKE_INSTALL_LIBDIR='/usr/lib' \
    -DCMAKE_INSTALL_DOCDIR='/usr/share/freecad/doc' \
    -DCMAKE_INSTALL_DATADIR='/usr/share/freecad' \
    -G Ninja

  ninja
}

package() {
  cd "${srcdir}/${_gitname}/build"

  DESTDIR="${pkgdir}" ninja install
  install -d "${pkgdir}/usr/bin/"
  ln -s /usr/lib/freecad/bin/FreeCAD "${pkgdir}/usr/bin/freecad"
}
