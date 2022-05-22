# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=intel-compute-runtime-git
pkgver=22.20.23198.r107.gb3d9893df
pkgrel=1
pkgdesc='Intel(R) Graphics Compute Runtime for oneAPI Level Zero and OpenCL(TM) Driver (git version)'
arch=('x86_64')
url='https://01.org/compute-runtime/'
license=('MIT')
depends=('intel-gmmlib' 'intel-graphics-compiler')
makedepends=('git' 'cmake' 'igsc' 'libva' 'level-zero-headers')
optdepends=('libva: for cl_intel_va_api_media_sharing'
            'libdrm: for cl_intel_va_api_media_sharing')
provides=('intel-compute-runtime' 'opencl-driver' 'level-zero-driver')
conflicts=('intel-compute-runtime')
options=('!lto')
source=('git+https://github.com/intel/compute-runtime.git')
sha256sums=('SKIP')

pkgver() {
    git -C compute-runtime describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cmake -B build -S compute-runtime \
        -DCMAKE_BUILD_TYPE='Release' \
        -DCMAKE_INSTALL_PREFIX='/usr' \
        -DCMAKE_INSTALL_LIBDIR='lib' \
        -DNEO_OCL_VERSION_MAJOR="${pkgver%%.*}" \
        -DNEO_OCL_VERSION_MINOR="$(echo "$pkgver" | cut -d '.' -f2)" \
        -DNEO_VERSION_BUILD="$(echo "$pkgver" | cut -d '.' -f3)" \
        -DSUPPORT_DG1='ON' \
        -DSKIP_UNIT_TESTS='1' \
        -Wno-dev
    make -C build
}

package() {
    make -C build DESTDIR="$pkgdir" install
    install -D -m644 compute-runtime/LICENSE.md -t "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s "$(find "${pkgdir}/usr/lib" -regex '.*libze_intel_gpu.so.[0-9]*' -exec basename {} +)" "${pkgdir}/usr/lib/libze_intel_gpu.so"
}
