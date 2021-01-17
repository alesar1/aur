# Maintainer: Timo Sarawinsi <tino@it-kraut.net>

_pkgbase=dlib
pkgname=("dlib-sse" "dlib-sse-cuda")
pkgver=19.22
pkgrel=3
_commit=600e03655274f0e7f2013d8d3cd5a3799843186b
pkgdesc="A general purpose cross-platform C++ library designed using contract programming and modern C++ techniques"
arch=('x86_64')
url="http://dlib.net"
license=('custom')
depends=('cblas'
         'lapack'
         'blas'
         'libjpeg-turbo'
         'libpng'
         'libx11')
optdepends=('giflib: for GIF support'
            'sqlite: for sqlite support')
makedepends=('cmake' 'ccache-ext' 'ccache' 'cuda' 'cudnn')
provides=("dlib")
source=("https://github.com/davisking/dlib/archive/$_commit.tar.gz"
	"version.patch")
sha256sums=('ff6fbbb0032e973a32b9a3b525b507851326305a97b8892e90c519dc6b2490d7'
            'df6167bb6c9a258eebfed651bd4c8d4e5d89324dd10579057fa58e6d1f4d110d')
build() {
    mv -v "${srcdir}/${_pkgbase}-${_commit}" "${srcdir}/${_pkgbase}-${pkgver}"
    cd "${srcdir}/${_pkgbase}-${pkgver}"
    patch -p1 -i ../version.patch
    cd ..
    mkdir -p build && cd build
    #cmake -GNinja \
    cmake  \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=/usr/lib \
        -DBUILD_SHARED_LIBS=ON \
        -DCMAKE_BUILD_TYPE=Release \
	-DDLIB_ENABLE_ASSERTS=ON \
	-DDLIB_PNG_SUPPORT=ON \
	-DDLIB_JPEG_SUPPORT=ON \
        -DDLIB_GIF_SUPPORT=ON \
        -DUSE_AVX_INSTRUCTIONS=ON \
	-DDLIB_USE_LAPACK=ON \
	-DDLIB_USE_FFTW=ON \
        -DDLIB_LINK_WITH_SQLITE3=ON \
        -DUSE_SSE2_INSTRUCTIONS=ON \
        -DUSE_SSE4_INSTRUCTIONS=ON \
	-DDLIB_USE_BLAS=ON \
        -DDLIB_USE_CUDA=OFF \
        "../${_pkgbase}-${pkgver}"
    #ninja ${MAKEFLAGS:--j1}
    cmake --build . --config Release -- -j $(nproc)

    cd "${srcdir}"
    mkdir -p build-cuda && cd build-cuda
 #  cmake -GNinja \
     cmake  \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=/usr/lib \
        -DBUILD_SHARED_LIBS=ON \
        -DCMAKE_BUILD_TYPE=Release \
        -DUSE_AVX_INSTRUCTIONS=ON \
        -DDLIB_USE_LAPACK=ON \
        -DDLIB_ENABLE_ASSERTS=ON \
        -DDLIB_PNG_SUPPORT=ON \
	-DDLIB_JPEG_SUPPORT=ON \
        -DDLIB_GIF_SUPPORT=ON \
        -DDLIB_USE_BLAS=ON \
        -DUSE_SSE2_INSTRUCTIONS=ON \
        -DUSE_SSE4_INSTRUCTIONS=ON \
        -DDLIB_USE_FFTW=ON \
        -DDLIB_LINK_WITH_SQLITE3=ON \
        -DDLIB_USE_CUDA=ON \
        -DCUDA_NVCC_EXECUTABLE=/usr/lib/ccache/bin/nvcc-ccache \
        "../${_pkgbase}-${pkgver}"
    #inja ${MAKEFLAGS:--j1}
     cmake --build . --config Release  -- -j $(nproc)
}

package_dlib-sse() {
    cd "${srcdir}/build"
    #DESTDIR=${pkgdir} ninja install
    DESTDIR=${pkgdir} cmake --install "$DESTDIR"
    install -Dm644 "../${_pkgbase}-${pkgver}/dlib/LICENSE.txt" "${pkgdir}/usr/share/licenses/${_pkgbase}/LICENSE"
    # remove redundant external libraries
    rm -r "${pkgdir}/usr/include/dlib/external"
}

package_dlib-sse-cuda() {
    pkgdesc="A general purpose cross-platform C++ library designed using contract programming and modern C++ techniques (with CUDA)"
    depends+=(cuda cudnn)
    conflicts=(dlib)
    cd "${srcdir}/build-cuda"
    #DESTDIR=${pkgdir} ninja install
    DESTDIR=${pkgdir} cmake --install "$DESTDIR"
    install -Dm644 "../${_pkgbase}-${pkgver}/dlib/LICENSE.txt" "${pkgdir}/usr/share/licenses/${_pkgbase}/LICENSE"
    # remove redundant external libraries
    rm -r "${pkgdir}/usr/include/dlib/external"
}
