# Maintainer: michaelchou <michaeljchou at the hotmail domain which is .com>
# Contributor: Ray Rashif <schiv@archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>

pkgbase=opencv3-opt
pkgname=($pkgbase $pkgbase-samples)
pkgver=3.4.12
pkgrel=2
pkgdesc="Open Source Computer Vision Library (Legacy Version & /opt directory version)"
arch=(x86_64)
license=(BSD)
url="http://opencv.org/"
depends=(intel-tbb openexr gst-plugins-base libdc1394 cblas lapack libgphoto2 jasper ffmpeg)
makedepends=(cmake python-numpy python-setuptools mesa eigen hdf5 lapacke gtk3 vtk glew double-conversion)
optdepends=('opencv-samples: samples'
            'gtk3: for the HighGUI module'
            'vtk: for the viz module'
            'hdf5: support for HDF5 format'
            'opencl-icd-loader: For coding with OpenCL'
            'python-numpy: Python interface')
source=(
"opencv-$pkgver.tar.gz::https://github.com/opencv/opencv/archive/$pkgver.zip"
"opencv_contrib-$pkgver.tar.gz::https://github.com/opencv/opencv_contrib/archive/$pkgver.tar.gz"
"opencv-lapack-3.9.1.patch::https://raw.githubusercontent.com/archlinux/svntogit-packages/packages/opencv/trunk/opencv-lapack-3.9.1.patch"
)
sha256sums=('1d9ed46728ecfab579c540f9da4e0cc599a822b49ca406edeee7fefceea6be34'
            'b207024589674dd2efc7c25740ef192ee4f3e0783e773e2d49a198c37e3e7570'
            '5233d9b4b8e3f4600e3f4ebef2b0ad5621faf25efbdfee96ee720a83cc81d0cc')

prepare() {
  patch -d opencv-$pkgver -p1 < opencv-lapack-3.9.1.patch # Fix build with LAPACK 3.9.1
  mkdir -p build
}

build() {
  cd build
  # cmake's FindLAPACK doesn't add cblas to LAPACK_LIBRARIES, so we need to specify them manually
  cmake ../opencv-$pkgver \
    -DWITH_OPENCL=ON \
    -DWITH_OPENGL=ON \
    -DWITH_TBB=ON \
    -DOpenGL_GL_PREFERENCE=GLVND \
    -DBUILD_WITH_DEBUG_INFO=OFF \
    -DBUILD_TESTS=OFF \
    -DBUILD_PERF_TESTS=OFF \
    -DBUILD_EXAMPLES=OFF \
    -DINSTALL_C_EXAMPLES=ON \
    -DINSTALL_PYTHON_EXAMPLES=ON \
    -DCMAKE_INSTALL_PREFIX=/opt/opencv3 \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DCPU_BASELINE_DISABLE=SSE3 \
    -DCPU_BASELINE_REQUIRE=SSE2 \
    -DOPENCV_EXTRA_MODULES_PATH="$srcdir/opencv_contrib-$pkgver/modules" \
    -DLAPACK_LIBRARIES="/usr/lib/liblapack.so;/usr/lib/libblas.so;/usr/lib/libcblas.so" \
    -DLAPACK_CBLAS_H="/usr/include/cblas.h" \
    -DLAPACK_LAPACKE_H="/usr/include/lapacke.h"
  make
}

package_opencv3-opt() {
  options=(staticlibs)
  provides=(opencv3)

  cd build
  make DESTDIR="$pkgdir" install

  # install license file
  install -Dm644 "$srcdir"/opencv-$pkgver/LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname

  mkdir -p "$pkgdir"/usr/lib/pkgconfig
  cd "$pkgdir"/usr/lib/pkgconfig
  ln -s /opt/opencv3/lib/pkgconfig/opencv.pc opencv3.pc
  ln -s /opt/opencv3/lib/pkgconfig/opencv.pc opencv3-opt.pc

  mkdir -p "$pkgdir"/etc/ld.so.conf.d
  echo /opt/opencv3/lib > "$pkgdir"/etc/ld.so.conf.d/opencv3-opt.conf

  # install python bindings
  # cd python_loader
  # python setup.py install --root="$pkgdir"
  # rm -r "$pkgdir"/usr/python

  cd "$pkgdir"/opt/opencv3/share

  # separate samples package
  rm -rf "$srcdir"/samples
  mv OpenCV/samples "$srcdir"
  mv OpenCV opencv3 # otherwise folder naming is inconsistent
  ln -sf /opt/opencv3/share/opencv3 OpenCV # fix some compatibility problems
}

package_opencv3-opt-samples() {
  pkgdesc+=" (samples)"
  depends=("$pkgbase=$pkgver")
  unset optdepends
  provides=(opencv3-samples)

  mkdir -p "$pkgdir"/opt/opencv3/share/opencv3
  cp -r "$srcdir/"samples "$pkgdir"/opt/opencv3/share/opencv3/samples

  # install license file
  install -Dm644 "$srcdir"/opencv-$pkgver/LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
}
