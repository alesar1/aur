# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev@orum.in>

_basename=wildmidi
pkgname="lib32-$_basename"
pkgver=0.4.3
pkgrel=4
pkgdesc='Open Source MIDI Synthesizer (32-bit)'
arch=('x86_64')
url="http://www.mindwerks.net/projects/wildmidi/"
license=('LGPL3')
depends=('lib32-alsa-lib' 'wildmidi')
makedepends=('cmake')
source=(https://github.com/psi29a/wildmidi/archive/wildmidi-${pkgver}.tar.gz)
sha256sums=('498e5a96455bb4b91b37188ad6dcb070824e92c44f5ed452b90adbaec8eef3c5')

prepare() {
    cd "$_basename-$_basename-$pkgver/src"

    sed -i -e 's|IF (CMAKE_LIBRARY_ARCHITECTURE)|IF (false)|' CMakeLists.txt
}

build() {
    export CC='gcc -m32'
    export CXX='c++ -m32'
    export PKG_CONFIG_PATH=/usr/lib32/pkgconfig

    cmake -S "$_basename-$_basename-$pkgver" -B build \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DLIB_SUFFIX=32

    cmake --build build
}

package() {
    DESTDIR="${pkgdir}" cmake --install build

    cd "$pkgdir"/usr

    mv bin/wildmidi bin/wildmidi32
    rm -r share include

    ln -s wildmidi.pc "$pkgdir/usr/lib32/pkgconfig/WildMIDI.pc"
}
