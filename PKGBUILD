# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev@orum.in>

_basename=chromaprint
pkgname="lib32-$_basename"
pkgver=1.5.0
pkgrel=4
pkgdesc="Library for extracting fingerprints from any audio source (32-bit)"
url="https://acoustid.org/chromaprint"
arch=('x86_64')
license=('LGPL2.1' 'MIT')
depends=('lib32-ffmpeg' 'chromaprint')
makedepends=('cmake' 'gtest')
# upstream signs with DSA key: https://github.com/acoustid/chromaprint/issues/81
source=("${_basename}-${pkgver}.tar.gz::https://github.com/acoustid/${_basename}/archive/v${pkgver}.tar.gz"
        "fix_build_32bit.patch")
sha512sums=('333114949928abdf5d4b11aba1db6ec487eebe526324c68d903b3fa80a3af87a28d942af765a2f873e63a1bf222b658b6438cd10cde4446f61b26ea91f537469'
            'd67e955398cf50e96e3ff5c16544c11745dad84c19d2ea965759f71c05c84cd1b0299becb287575135f8d921c906b2dbfa87ab3da659af3bcc203205e96af5b1')
b2sums=('930d1a7b8fa30dc726f78e3fc93c4e1aef5036b60ceee003c36ce7ea344523ce8b3abc294a4204e9acb6472600e7cfa5b15b1ca27c2917bd161b59cac1e7120c'
        '8a0e13c019df0d745ecd7eb4b2a49f1e8a2918c86d751ffadcc033899c091e37434a2e319f820a7f63da841984cf4a36e1849782dabc9a2503ab10ba546efb45')

prepare() {
    cd "${_basename}-${pkgver}"

    patch -Np1 -i ../fix_build_32bit.patch
    rm -v cmake/modules/FindGTest.cmake
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cd "${_basename}-${pkgver}"

    cmake -S . -B build \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE='None' \
        -DBUILD_TESTS=ON \
        -DGTEST_SOURCE_DIR=/usr/src/googletest/ \
        -Wno-dev

    make VERBOSE=1 -C build
}

check() {
    cd "${_basename}-${pkgver}"

    make VERBOSE=1 -C build check
}

package() {
    cd "${_basename}-${pkgver}"

    make VERBOSE=1 DESTDIR="${pkgdir}" install -C build

    install -vDm 644 LICENSE.md -t "${pkgdir}/usr/share/licenses/${pkgname}"

    cd "$pkgdir"/usr

    sed -e "s|/usr/lib|/usr/lib32|" -i lib/pkgconfig/libchromaprint.pc

    rm -r include
    mv lib lib32
}
