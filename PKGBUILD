# Maintainer: acxz <akashpatel2008 at yahoo dot com>
pkgname=openvsp
pkgver=3.21.2
pkgrel=2
pkgdesc='OpenVSP allows the user to create a 3D model of an aircraft defined by
         common engineering parameters.'
arch=('i686' 'x86_64')
url='http://www.openvsp.org'
license=('NASA OPEN SOURCE AGREEMENT VERSION 1.3')
depends=('cblas'
         'cminpack'
         'code-eli'
         'cpptest'
         'eigen'
         'fltk'
         'freeglut'
         'gcc'
         'glew'
         'glm'
         'libxml2')
optdepends=('doxygen: generate documentation'
            'graphviz: generate documentation'
            'python: python API module'
            'swig: build interface to APIs')
makedepends=('cmake')
_name=OpenVSP-OpenVSP_${pkgver}
source=("${pkgname}-${pkgver}"::"https://github.com/OpenVSP/OpenVSP/archive/OpenVSP_${pkgver}.tar.gz"
        "browser-launch.patch"::"https://github.com/OpenVSP/OpenVSP/commit/970d41dd53bd7307da597a72cde7a1b2b7595b33.patch")
sha256sums=('8abda9fe84dd9414e43bd781625e66e64c729ccd096cf187e0fbfe28ae59c880'
            'b7a8cf2275974a2c6acc907ef0d9a934d984a32ab498c87060033f00c81ac0fb')

prepare() {

  # Add -lcblas to cmake flags
  sed -i -e 's/X_FLAGS} -fPIC/X_FLAGS} -lcblas -fPIC/g' ${srcdir}/${_name}/SuperProject/CMakeLists.txt

  cd "${srcdir}/${_name}"
  patch --forward --strip=1 --input="${srcdir}/browser-launch.patch"

}

build() {

  # Create a build directory
  mkdir -p "${srcdir}/${_name}/SuperProject/build"
  cd "${srcdir}/${_name}/SuperProject/build"

  cmake .. \
        -DCMAKE_PREFIX_PATH='/usr' \
        -DVSP_USE_SYSTEM_CPPTEST=true \
        -DVSP_USE_SYSTEM_LIBXML2=true \
        -DVSP_USE_SYSTEM_EIGEN=true \
        -DVSP_USE_SYSTEM_CODEELI=true \
        -DVSP_USE_SYSTEM_FLTK=true \
        -DVSP_USE_SYSTEM_GLM=true \
        -DVSP_USE_SYSTEM_GLEW=true \
        -DVSP_USE_SYSTEM_CMINPACK=true

  make || return 0
}

package() {
  cd "${srcdir}/${_name}/SuperProject/build/OpenVSP-prefix/src/OpenVSP-build/_CPack_Packages/Linux/ZIP/OpenVSP-${pkgver}-Linux"

  msg "Installing files"

  # binary
  mkdir -p ${pkgdir}/usr/bin
  cp vsp vspaero vspscript vspslicer vspviewer ${pkgdir}/usr/bin/

  # misc
  mkdir -p ${pkgdir}/usr/share/${pkgname}
  cp README.md ${pkgdir}/usr/share/${pkgname}
  cp LICENSE ${pkgdir}/usr/share/${pkgname}
  cp -r CustomScripts ${pkgdir}/usr/share/${pkgname}
  cp -r airfoil ${pkgdir}/usr/share/${pkgname}
  cp -r matlab ${pkgdir}/usr/share/${pkgname}
  cp -r scripts ${pkgdir}/usr/share/${pkgname}
  cp -r textures ${pkgdir}/usr/share/${pkgname}

}
