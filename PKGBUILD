# Contributor: naelstrof <naelstrof@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Paul Bienkowski <opatutlol@aol.com>
# Contributor: Christoph Zeiler <archNOSPAM_at_moonblade.dot.org>
pkgname=mingw-w64-bullet
pkgver=2.88
pkgrel=1
pkgdesc="A 3D Collision Detection and Rigid Body Dynamics Library for games and animation (mingw-w64)"
arch=('any')
url="http://www.bulletphysics.com/Bullet/"
license=('custom:zlib')
depends=('mingw-w64-crt')
options=('!strip' '!buildflags' 'staticlibs')
makedepends=('mingw-w64-cmake')
source=("https://github.com/bulletphysics/bullet3/archive/${pkgver}.tar.gz")
sha256sums=('21c135775527754fc2929db1db5144e92ad0218ae72840a9f162acb467a7bbf9')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare () {
  cd ${srcdir}/bullet3-${pkgver}
#   echo "target_link_libraries (BulletRobotics ws2_32 winmm)" >> Extras/BulletRobotics/CMakeLists.txt
}

build() {
  cd ${srcdir}/bullet3-${pkgver}
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake \
      -DBUILD_CPU_DEMOS=OFF \
      -DBUILD_BULLET2_DEMOS=OFF \
      -DBUILD_OPENGL3_DEMOS=OFF \
      -DBUILD_UNIT_TESTS=OFF \
      -DBUILD_EXTRAS=OFF \
      -DINSTALL_LIBS=1 \
      -DUSE_GLUT=0 \
      -DINSTALL_EXTRA_LIBS=1 \
      ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/bullet3-${pkgver}/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
