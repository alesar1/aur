# Maintainer: Frank Fishburn <frankthefishburn@gmail.com>

## Configuration

## Specify Matlab path (/opt/matlab/R* will be auto-detected and latest one used if there are multiple)
#_MATLAB_DIR=

## You can override what gets built, otherwise it builds based on whats installed
#_BUILD_MATLAB=
#_BUILD_OCTAVE=

pkgname=spm12
pkgver=7487
pkgrel=1
pkgdesc="A MATLAB toolbox for the analysis of brain imaging data sequences"
arch=('i686' 'x86_64')
url="http://www.fil.ion.ucl.ac.uk/spm/"
license=('GPL2')
makedepends=(make)
source=("${pkgname}-r${pkgver}.tar.gz::https://github.com/spm/${pkgname}/archive/r${pkgver}.tar.gz")
sha512sums=('4c8d448771bc7e1c1923fd92138d736f3760542686942e02242b137e3aed8455098e247b5d903cfa5f1f573757fb6c1c220f47d4d2dd74002674aa7346315ae8')

prepare() {

  cd "${srcdir}/${pkgname}-r${pkgver}"

  # Try to auto-detect the matlab install directory
  if [ -z "${_MATLAB_DIR}" ]; then
    if [ -d "/opt/matlab" ]; then
      _MATLAB_DIR=$(find /opt/matlab/R*/bin -mindepth 1 -maxdepth 1 -name mex | sort | tail -n 1 | xargs dirname | xargs dirname)
    fi
    if [ -d "/opt/MATLAB" ]; then
      _MATLAB_DIR=$(find /opt/MATLAB/R*/bin -mindepth 1 -maxdepth 1 -name mex | sort | tail -n 1 | xargs dirname | xargs dirname)
    fi
  fi
  
  # Set _BUILD_MATLAB switch if unset
  if [ -z "${_BUILD_MATLAB}" ]; then
    if [ -f "${_MATLAB_DIR}/bin/mex" ]; then
      _BUILD_MATLAB=true
    else
      _BUILD_MATLAB=false
    fi
  fi

  # Set _BUILD_OCTAVE switch if unset
  if [ -z "${_BUILD_OCTAVE}" ]; then
    if [ -f "/usr/bin/octave" ]; then
      _BUILD_OCTAVE=true
    else
      _BUILD_OCTAVE=false
    fi
  fi
    
  echo "Using Matlab directory: ${_MATLAB_DIR}"

  sed -i "/^MEXBIN/c MEXBIN         = ${_MATLAB_DIR}/bin/mex" src/Makefile.var
  sed -i "s^largeArrayDims$^& CFLAGS=\"${CFLAGS} -fPIC\" CXXFLAGS=\"${CXXFLAGS} -fPIC\" LDFLAGS=\"${LDFLAGS}\"^g" src/Makefile.var
  find . -type f -name \*.mex\* -delete

}

build() {
  
  # Build Matlab
  if [ "${_BUILD_MATLAB}" = true ]; then
    cd "${srcdir}/${pkgname}-r${pkgver}/src"
    make clean
    make all
    make install

    cd "${srcdir}/${pkgname}-r${pkgver}/external"
    make clean
    make all
    make install
  fi

  # Build Octave
  if [ "${_BUILD_OCTAVE}" = true ]; then
    cd "${srcdir}/${pkgname}-r${pkgver}/src"
    make clean
    PLATFORM=octave make all
    PLATFORM=octave make install

    cd "${srcdir}/${pkgname}-r${pkgver}/external"
    make clean
    PLATFORM=octave make all
    PLATFORM=octave make install
  fi

}

package() {

  find "${srcdir}/${pkgname}-r${pkgver}" -type d -name src -prune -exec rm -rv "{}" \;
  find "${srcdir}/${pkgname}-r${pkgver}" -type f -name Makefile\* -delete

  mkdir "${pkgdir}/opt"
  mv "${srcdir}/${pkgname}-r${pkgver}" "${pkgdir}/opt/${pkgname}"

}
