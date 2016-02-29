# Maintainer: Benoit Favre <benoit.favre@gmail.com>
# Contributor: Alexander Rødseth <rodseth@gmail.com>
# Contributor: Kamil Biduś <kamil.bidus@gmail.com>

pkgname=aseprite-git
name=aseprite
pkgver=v1.1.2.r32.g733ca44
pkgrel=2
pkgdesc='Create animated sprites and pixel art'
arch=('x86_64' 'i686')
url='http://www.aseprite.org/'
license=('GPL')
depends=('pixman' 'curl' 'giflib' 'zlib' 'libpng' 'libjpeg-turbo' 'tinyxml' 'freetype2')
makedepends=('cmake')
conflicts=('aseprite')
source=("git+https://github.com/aseprite/aseprite.git"
        "aseprite.desktop")
sha256sums=('SKIP'
        'c9e624b9fd095ebb3eec8220a58d4a9422f39d68477bafcc0047d773814ba0aa')

pkgver() {
    cd "$name"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${name}"
  mkdir -p build && cd build
  git submodule update --init --recursive
  cmake -DUSE_SHARED_PIXMAN=ON \
    -DUSE_SHARED_CURL=ON \
    -DUSE_SHARED_GIFLIB=ON \
    -DUSE_SHARED_JPEGLIB=ON \
    -DUSE_SHARED_ZLIB=ON \
    -DUSE_SHARED_LIBPNG=ON \
    -DUSE_SHARED_LIBLOADPNG=OFF \
    -DUSE_SHARED_TINYXML=ON \
    -DENABLE_UPDATER=OFF \
    -DUSE_SHARED_FREETYPE=ON \
    -DFREETYPE_INCLUDE_DIR=/usr/include/freetype2 \
    -DCMAKE_INSTALL_PREFIX:STRING=/usr ..
  make aseprite
}

package() {
  cd "${name}"/build

  make DESTDIR="$pkgdir/" install/fast
  install -Dm644 "$srcdir/$name.desktop" \
    "$pkgdir/usr/share/applications/$name.desktop"
  install -Dm644 "../data/icons/ase48.png" \
    "$pkgdir/usr/share/pixmaps/$name.png"
}

# vim:set ts=2 sw=2 et:
