#!/hint/bash
# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>

_name=openmvs
_fragment="#tag=v1.0"
pkgname=${_name}
pkgver=1.0
pkgrel=1
pkgdesc="Open Multi-View Stereo reconstruction library with simple and automatic set of tools"
arch=(i686 x86_64)
url="http://cdcseacave.github.io/openMVS"
license=(GPL)
depends=(glew glfw suitesparse blas google-glog opencv boost-libs)
makedepends=(git cmake cuda boost gflags eigen ceres-solver cgal nvidia-utils)
optdepends=('nvidia-utils: GPU optimized mesh reconstruction code')
options=()
source=("${pkgname}::git+https://github.com/cdcseacave/openMVS.git${_fragment}"
        "vcglib::git+https://github.com/cdcseacave/VCG.git"
        )
sha256sums=('SKIP'
            'SKIP'
           )

pkgver() {
  cd "$pkgname"
  # cutting off 'v' prefix that presents in the git tag
  git describe --tag | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'

}

#prepare() {
#  cd ${srcdir}/${pkgname}
#}


build() {
  cd ${srcdir}
  mkdir -p build
  cd build
  cmake ../${pkgname} -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DINSTALL_BIN_DIR=/usr/bin -DVCG_DIR="../vcglib"
  make
}

package() {
  cd "$srcdir/build"
  make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
