# Maintainer: physkets <physkets // at // tutanota dot com>
# Contributor: xpt <user.xpt@gmail.com>

### BUILD OPTIONS
# Set these variables to '1' to enable them
# Doing so will add the requisite build commands,
# as well as add the needed dependencies

# HTML documentation
_BUILD_DOC=0
# Copy 'examples' to /usr/share/examples/lammps
_INSTALL_EXAMPLES=0
# Use Intel compilers
_ENABLE_INTEL_COMPILER=0
# USER-INTEL package
_ENABLE_INTEL=0
# USER-OMP package
_ENABLE_OMP=0
# KIM package
_ENABLE_KIM=0

_pkgname=lammps
pkgname=${_pkgname}-beta
pkgver=20191120
_pkgver="20Nov2019"
#_pkgver=$(date -d ${pkgver} +%-d%b%Y)
pkgrel=1
pkgdesc="Large-scale Atomic/Molecular Massively Parallel Simulator"
url="https://lammps.sandia.gov/"
arch=('x86_64')
license=('GPL')
depends=('fftw' 'openmpi')
makedepends=('cmake')
conflicts=('lammps')
provides=('lammps')
source=("git+https://github.com/${_pkgname}/${_pkgname}#tag=patch_${_pkgver}?signed")
sha512sums=('SKIP')

# Make sure you have imported Axel Kohlmeyer's PGP key
#   wget https://github.com/akohlmey.gpg
#   gpg --import akohlmey.gpg

# process the build settings from above
if (( $_ENABLE_INTEL_COMPILER )); then
    _feature_args+=('-DCMAKE_C_COMPILER=mpiicc')
    _feature_args+=('-DCMAKE_C_FLAGS=-xHost -O2 -fp-model fast=2 -no-prec-div -qoverride-limits -qopt-zmm-usage=high')
    _feature_args+=('-DCMAKE_CXX_COMPILER=mpiicpc')
    _feature_args+=('-DCMAKE_CXX_FLAGS=-fp-model fast=2 -no-prec-div -qoverride-limits -qopt-zmm-usage=high -qno-offload -fno-alias -ansi-alias -O2 -std=c++11 -DLMP_INTEL_USELRT -DLMP_USE_MKL_RNG -I${MKLROOT}/include')
    _feature_args+=('-DCMAKE_Fortran_COMPILER=mpiifort')
fi
if (( $_BUILD_DOC )); then
    makedepends+=('python-sphinx')
fi
if (( $_ENABLE_KIM )); then
    depends+=('kim-api>=2.0.2')
    _feature_args+=('-DPKG_KIM=yes')
fi
if (( $_ENABLE_INTEL )); then
    _feature_args+=('-DINTEL_ARCH=cpu')
    _feature_args+=('-DPKG_USER-INTEL=yes')
fi
if (( $_ENABLE_OMP )); then
    _feature_args+=('-DBUILD_OMP=yes')
    _feature_args+=('-DPKG_USER-OMP=yes')
fi

prepare(){
  cd "${_pkgname}"
  mkdir -p build
}

build() {
  cd "${_pkgname}/build"
  cmake ../cmake \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_INSTALL_LIBDIR="lib" \
        -DCMAKE_INSTALL_LIBEXECDIR="/usr/lib" \
        "${_feature_args[@]}" #\
        # Add options for additional packages
        #-DPKG_<NAME>=yes

  make

  if (( $_BUILD_DOC )) ; then
    export PYTHONPATH=$PWD/../doc/utils/converters/
    # Generate HTML from ReStructuredText files
    mkdir -p html
    sphinx-build -b html -c "../doc/utils/sphinx-config" -d "doctrees" "../doc/src" html
  fi
}

package() {
  cd "${_pkgname}/build"
  make DESTDIR="${pkgdir}" install
  if (( $_BUILD_DOC )) ; then
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html" "html/"*.html
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html" "html/"*.js
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html/_images" "html/_images/"*
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html/_static" "html/_static/"*.png
    #install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html/_static" "html/_static/"*.gif
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html/_static" "html/_static/"*.js
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html/_static/css" "html/_static/css/"*.css
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html/_static/fonts" "html/_static/fonts/"*
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}/html/_static/js" "html/_static/js/"*.js
  fi
  if (( $_INSTALL_EXAMPLES )) ; then
    mkdir -p "${pkgdir}/usr/share/examples/lammps"
    cp -r "../examples/." "${pkgdir}/usr/share/examples/lammps/"
    find "${pkgdir}/usr/share/examples/lammps/" -type f -exec chmod 644 '{}' +
  fi
  install -Dm644 "../tools/vim/lammps.vim" "${pkgdir}/usr/share/vim/vimfiles/syntax/lammps.vim"
  install -Dm644 "../tools/vim/filetype.vim" "${pkgdir}/usr/share/vim/vimfiles/ftdetect/lammps.vim"
}
