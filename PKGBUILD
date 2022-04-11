# Maintainer: Mitch Bigelow <ipha00@gmail.com>
# Contributor: Utkan Güngördü <utkan@freeconsole.org>
# Maintainer: Hurricane Pootis <hurricanepootis@protonmail.com>

pkgname=ncnn-git
_pkgname=ncnn
pkgver=20220216.r57.g3d169b323
pkgrel=1
pkgdesc="High-performance neural network inference framework optimized for the mobile platform"
url="https://github.com/Tencent/ncnn"
license=('BSD')
depends=('glslang')
makedepends=('git' 'cmake' 'vulkan-icd-loader' 'protobuf' 'vulkan-headers')
conflicts=('ncnn')
provides=('ncnn')
arch=('i686' 'x86_64')
source=("git+https://github.com/Tencent/ncnn.git"
        "git+https://github.com/KhronosGroup/glslang"
        "git+https://github.com/pybind/pybind11")
sha256sums=('SKIP' 'SKIP' 'SKIP')
pkgver() {
    cd "${srcdir}/ncnn"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {

    cd "${srcdir}/ncnn"

    # init submodules
    git submodule init glslang
    git config submodule.glslang.url "$srcdir/glslang"
    git submodule update

    git submodule init python/pybind11
    git config submodule.python/pybind11.url "$srcdir/pybind11"
    git submodule update
}

build() {
    cd "${srcdir}/ncnn"
    mkdir -p build
    cd build
    cmake \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DNCNN_BUILD_EXAMPLES=OFF \
        -DNCNN_VULKAN=ON \
        -DNCNN_SYSTEM_GLSLANG=ON \
        -DGLSLANG_TARGET_DIR=/usr/lib/cmake \
        ..
    make
}

package() {
    cd "${srcdir}/ncnn/build"
    make DESTDIR="${pkgdir}" install
    install -Dm644 "${srcdir}/ncnn/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
