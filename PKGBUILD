# Maintainer: Grey Christoforo <first name at last name dot net>

pkgname=kicad-rc
_pkgver="5.1.6"
pkgver=${_pkgver//-/_}
pkgrel=1
epoch=0
pkgdesc="Official KiCad release candidates and dev snapshots"
arch=('any')
url="http://kicad-pcb.org/"
license=('GPL3')
depends=('glew' 'wxgtk3' 'desktop-file-utils' 'boost-libs' 'python' 'glm' 'curl' 'swig' 'python-wxpython' 'opencascade' 'ngspice')
makedepends=('cmake' 'git' 'zlib' 'mesa' 'boost')
optdepends=('kicad-symbols' 'kicad-packages3d' 'kicad-footprints' 'kicad-templates')
conflicts=('kicad' 'kicad-git' 'kicad-scripting-git' 'kicad-bzr')
provides=('kicad')
makedepends=('clang')
source=("https://gitlab.com/kicad/code/kicad/-/archive/${_pkgver}/kicad-${_pkgver}.tar.gz")
md5sums=('3fadd95d0aeb0cb85a7d0f69cf3724dd')

prepare() {
  cd "${srcdir}/kicad-${_pkgver}"
  #curl https://github.com/KiCad/kicad-source-mirror/commit/5685174808f5ca973e916a10f9f93660ee4dc4f2.patch | patch -p1
}

build() {
  cd "${srcdir}/kicad-${_pkgver}"
  mkdir -p build
  cd build
  cmake .. -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DKICAD_USE_OCC=ON \
    -DKICAD_USE_OCE=OFF \
    -DKICAD_SCRIPTING_WXPYTHON_PHOENIX=ON \
    -DPYTHON_EXECUTABLE:FILEPATH=/usr/bin/python \
    -DKICAD_SCRIPTING_PYTHON3=ON \
    -DwxWidgets_CONFIG_EXECUTABLE=/usr/bin/wx-config-gtk3 \
    -DUSE_WX_GRAPHICS_CONTEXT=ON \
    -DUSE_WX_OVERLAY=ON 

  make
}

package() {
  cd "${srcdir}/kicad-${_pkgver}"
  cd build
  make DESTDIR="${pkgdir}" install
}
