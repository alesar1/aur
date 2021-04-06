# Maintainer: Mitch Bigelow <ipha00@gmail.com>
# Contributor: Utkan Güngördü <utkan@freeconsole.org>
# Maintainer: Hurricane Pootis <hurricanepootis@protonmail.com>

pkgname=ncnn-git
_pkgname=ncnn
pkgver=20210322.r16.gcc8e7a13
pkgrel=2
pkgdesc="High-performance neural network inference framework optimized for the mobile platform"
url="https://github.com/Tencent/ncnn"
license=('BSD')
depends=()
makedepends=('git' 'cmake' 'vulkan-icd-loader')
conflicts=('ncnn')
provides=('ncnn')
arch=('i686' 'x86_64')
source=("git://github.com/Tencent/ncnn.git"
	"https://sdk.lunarg.com/sdk/download/1.2.154.0/linux/vulkansdk-linux-x86_64-1.2.154.0.tar.gz?Human=true")
sha256sums=('SKIP'
            '6d8828fa9c9113ef4083a07994cf0eb13b8d239a5263bd95aa408d2f57585268')
pkgver() {
    cd "${srcdir}/ncnn"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {


export VULKAN_SDK=$srcdir/1.2.154.0/x86_64
    cd "${srcdir}/ncnn"

    # init glslang submodule
     git submodule update --init --recursive

    # fix for system glslang
    # sed -i'' 's|#include "glslang/glslang|#include "glslang|' ./src/gpu.cpp
}

build() {
    cd "${srcdir}/ncnn"
    mkdir -p build
    cd build
    cmake \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DNCNN_BUILD_EXAMPLES=OFF \
        -DNCNN_VULKAN=ON \
        ..
    make
}

package() {
    cd "${srcdir}/ncnn/build"
    make DESTDIR="${pkgdir}" install
    install -Dm644 "${srcdir}/ncnn/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    rm -rf "$pkgdir/usr/include/glslang"
    rm -rf "$pkgdir/usr/lib/cmake/OGLCompilerTargets-release.cmake" "$pkgdir/usr/lib/cmake/OGLCompilerTargets.cmake" "$pkgdir/usr/lib/cmake/OSDependentTargets-release.cmake" "$pkgdir/usr/lib/cmake/OSDependentTargets.cmake" "$pkgdir/usr/lib/cmake/SPIRVTargets-release.cmake" "$pkgdir/usr/lib/cmake/SPIRVTargets.cmake" "$pkgdir/usr/lib/cmake/glslangTargets-release.cmake" "$pkgdir/usr/lib/cmake/glslangTargets.cmake"
    rm -rf "$pkgdir/usr/lib/libGenericCodeGen.a" "$pkgdir/usr/lib/libMachineIndependent.a" "$pkgdir/usr/lib/libOGLCompiler.a" "$pkgdir/usr/lib/libOSDependent.a" "$pkgdir/usr/lib/libSPIRV.a" "$pkgdir/usr/lib/libglslang.a" 
}
