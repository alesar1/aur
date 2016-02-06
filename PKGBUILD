# Maintainer: Michael Spencer <sonrisesoftware@gmail.com>

_pkgname=libpapyros
pkgname=${_pkgname}-git
pkgver=0.1.0.r10.g9bf92f6
pkgrel=1
pkgdesc="Library of common classes for Papyros"
arch=("i686" "x86_64")
url="https://github.com/papyros/libpapyros"
license=("LGPL")
depends=("qt5-base-dev-git" "qt5-declarative" "kconfig" "kwallet" )
makedepends=("git" "qt5-tools" "cmake" "extra-cmake-modules")
provides=("${_pkgname}")
conflicts=("${_pkgname}" )
source=("${_pkgname}::git+https://github.com/papyros/libpapyros.git#branch=develop")
sha256sums=("SKIP")

pkgver() {
  cd "$srcdir/${_pkgname}"
  (set -o pipefail
  git describe --long --tags 2>/dev/null | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake $srcdir/${_pkgname} \
    -DCMAKE_BUILD_TYPE=RelWithDebInfo \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIB_INSTALL_DIR=lib \
    -DLIBEXEC_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}

# Additional functions to generate a changelog

changelog() {
  cd "$srcdir/${_pkgname}"
  git log $1..HEAD --no-merges --format=" * %s"
}

gitref() {
  cd "$srcdir/${_pkgname}"
  git rev-parse HEAD
}
