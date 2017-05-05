# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=audiotk
pkgname="${_pkgname}-git"
pkgver=2.0.2.r1502.305ee21
pkgrel=1
pkgdesc="A C++ library plus Python 3 bindings with a set of audio filters (git version)"
arch=('i686' 'x86_64')
license=('BSD')
url='https://github.com/mbrucher/AudioTK'
depends=('fftw' 'libsndfile' 'python')
makedepends=('git' 'cmake')
source=("${_pkgname}::git+https://github.com/mbrucher/AudioTK.git"
        'audiotk-cmakelists.diff')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
md5sums=('SKIP'
         '9ba195731f5d64b58e668639b7e0bfe8')


pkgver() {
  cd "${srcdir}/${_pkgname}"
  local version="$(grep ^PROJECT_NUMBER Doxyfile | awk '{ print $3 }')"
  local revision=$(git rev-list --count HEAD)
  local hash=$(git rev-parse --short HEAD)
  echo $version.r$revision.$hash
}

prepare() {
  cd "${srcdir}/${_pkgname}"

  if [[ -d build ]]; then
    rm -rf build
  fi

  mkdir build
  git checkout develop
  patch -p1 -i "${srcdir}/audiotk-cmakelists.diff"
}

build() {
  cd "${srcdir}/${_pkgname}/build"

  local py_ver=$(python -c 'import sys; print("%s.%s" % sys.version_info[:2])')
  cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_CXX_FLAGS="-std=c++11" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DENABLE_PYTHON=1 \
    -DPYTHON_INSTALL_FOLDER=/usr/lib/python${py_ver} \
    -DENABLE_TESTS=1 \
    -DBUILD_DOC=1
  make
}

check() {
  cd "${srcdir}/${_pkgname}/build"

  make test
}

package() {
  cd "${srcdir}/${_pkgname}/build"

  make DESTDIR="${pkgdir}" install

  cd ..
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -dm755 "${pkgdir}/usr/share/doc/${pkgname}"
  cp -r Examples "${pkgdir}/usr/share/doc/${pkgname}"
  cp -r Doxygen/html "${pkgdir}/usr/share/doc/${pkgname}/API"
}

# vim:set ts=2 sw=2 et:
