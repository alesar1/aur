# Maintainer: Kartik Mohta <kartikmohta@gmail.com>
pkgname=gtsam
pkgver=4.0.2
pkgrel=2
pkgdesc="A library of C++ classes that implement smoothing and mapping (SAM) in\
  robotics and vision, using factor graphs and Bayes networks as the underlying\
  computing paradigm rather than sparse matrices."
url="https://gtsam.org/"
arch=('x86_64' 'i686')
license=('BSD')
depends=('boost-libs')
makedepends=('boost' 'cmake')
optdepends=('intel-tbb: Use Intel TBB to accelerate computations (add this to the depends section of the PKGBUILD and rebuild the package)'
            'intel-mkl: Use Intel MKL to accelerate computations (add this to the depends section of the PKGBUILD and rebuild the package)')
source=("https://github.com/borglab/${pkgname}/archive/${pkgver}.tar.gz"
        "rename-included-libmetis.patch")
md5sums=('6f5689c5c060d6cb29fe7c49b05e1571'
         '63093f474f5574e8dd3e300289dab47f')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p1 -i ../rename-included-libmetis.patch
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DGTSAM_BUILD_EXAMPLES_ALWAYS=OFF \
    -DGTSAM_BUILD_TESTS=ON \
    -DGTSAM_BUILD_WRAP=OFF \
    -DGTSAM_BUILD_DOCS=OFF \
    -DGTSAM_INSTALL_CPPUNITLITE=OFF \
    -DGTSAM_INSTALL_GEOGRAPHICLIB=OFF \
    -DGTSAM_USE_SYSTEM_EIGEN=ON \
    ..
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  make DESTDIR="${pkgdir}" install
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# check() {
#   cd "${srcdir}/${pkgname}-${pkgver}/build"
#   make check
# }

# vim:set ts=2 sw=2 et:
