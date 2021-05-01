# Maintainer: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: Dumitru Ursu <dima@ceata.org>

pkgname=opencolorio-qfix
pkgver=2.0.0
pkgrel=2
pkgdesc="A color management framework for visual effects and animation"
arch=('x86_64')
url="https://opencolorio.org"
license=('BSD')
depends=('freeglut' 'glew' 'lcms2' 'tinyxml' 'yaml-cpp' 'openexr' 'pystring')
makedepends=('boost' 'cmake' 'python' 'pybind11' 'ninja')
optdepends=('python: python bindings')
source=($pkgname-$pkgver.tar.gz::https://github.com/AcademySoftwareFoundation/OpenColorIO/archive/v$pkgver.tar.gz
        opencolorio-openexr3.patch)
sha512sums=('7110a1a30a5fa64b81d7fc5e33234673aaddbad5e19ce7f21436c590edd7d2ce767650c9a934011a96e53132c030bd0b654fcf93ad79c1bfc8c050762c57f6d0'
            '269a86e4020d272b64af631ba01f9b1e644bde119e9bfb1d5ec3fd62579d5d3f7ab31295fb6cffc51d7349c469e2ca6e12f69310317266eda602541e9fcff94f')

prepare() {
  patch -d OpenColorIO-$pkgver -p1 < opencolorio-openexr3.patch
}

build() {
  cd OpenColorIO-$pkgver

  cmake \
    -GNinja \
    -Bbuild \
    -DCMAKE_INSTALL_PREFIX=/opt/ocio \
    -DCMAKE_INSTALL_LIBDIR=lib
  ninja -C build
}

package() {
  cd OpenColorIO-$pkgver

  DESTDIR="$pkgdir" ninja -C build install
  install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:
