# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev at orum.in>
# contributer: yannleretaille <yleretaille at gmail.com>

_basename=opencv
pkgname=lib32-opencv
pkgver=3.4.4
pkgrel=1
pkgdesc="Open Source Computer Vision Library (32-bit)"
arch=('x86_64')
license=('BSD')
url="https://opencv.org"
depends=('lib32-ffmpeg' 'lib32-gst-plugins-base' 'lib32-gtk3' 'lib32-hdf5' 'lib32-intel-tbb'
        'lib32-jasper' 'lib32-libdc1394' 'lib32-libgphoto2' 'lib32-openexr' 'lib32-tesseract' 'opencv')
makedepends=('cmake' 'eigen' 'hdf5' 'lib32-libaec')
source=("$_basename-$pkgver.tar.gz::https://github.com/opencv/opencv/archive/$pkgver.zip"
        "opencv_contrib-$pkgver.tar.gz::https://github.com/opencv/opencv_contrib/archive/$pkgver.tar.gz")
sha256sums=('b5755384cbadf67f55838c6cfd9ae1aad0ebad2c7cfe4c1174417c80d2ed15a9'
            '765446d994713363554978d1da447fef77a2cdf9e38742f0a98b13b92652626d')

prepare() {
    mkdir -p build
}

build() {
    cd build

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake ../$_basename-$pkgver \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DWITH_OPENCL=ON \
        -DWITH_OPENGL=ON \
        -DWITH_TBB=ON \
        -DOpenGL_GL_PREFERENCE=GLVND \
        -DBUILD_WITH_DEBUG_INFO=OFF \
        -DBUILD_TESTS=OFF \
        -DBUILD_PERF_TESTS=OFF \
        -DBUILD_EXAMPLES=OFF \
        -DINSTALL_C_EXAMPLES=OFF \
        -DBUILD_opencv_python2=OFF \
        -DBUILD_opencv_python3=OFF \
        -DINSTALL_PYTHON_EXAMPLES=OFF \
        -DCPU_BASELINE_DISABLE=SSE3 \
        -DCPU_BASELINE_REQUIRE=SSE2 \
        -DOPENCV_EXTRA_MODULES_PATH="$srcdir/opencv_contrib-$pkgver/modules"

    make
}

package() {
    cd build

    make DESTDIR="$pkgdir" install

    rm -r "$pkgdir/usr/bin"
    rm -r "$pkgdir/usr/include"
    rm -r "$pkgdir/usr/share"

    install -Dm644 "$srcdir/$_basename-$pkgver/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}
