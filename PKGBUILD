# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=intel-compute-runtime-bin
pkgver=21.35.20826
_gmmver=21.2.1
_igcver=1.0.8517
_lzver="1.2.${pkgver##*.}"
pkgrel=1
pkgdesc='Intel Graphics Compute Runtime for oneAPI Level Zero and OpenCL Driver (pre-compiled binaries)'
arch=('x86_64')
url='https://github.com/intel/compute-runtime/'
license=('MIT')
depends=("intel-graphics-compiler-bin=1:${_igcver}")
optdepends=('libva: for cl_intel_va_api_media_sharing'
            'libdrm: for cl_intel_va_api_media_sharing')
makedepends=('cmake')
provides=('intel-compute-runtime' 'intel-gmmlib' 'level-zero-driver' 'opencl-driver')
conflicts=('intel-compute-runtime' 'intel-gmmlib')
options=('!strip' '!emptydirs')
source=("https://github.com/intel/compute-runtime/releases/download/${pkgver}/intel-opencl_${pkgver}_amd64.deb"
        "https://github.com/intel/compute-runtime/releases/download/${pkgver}/intel-ocloc_${pkgver}_amd64.deb"
        "https://github.com/intel/compute-runtime/releases/download/${pkgver}/intel-level-zero-gpu_${_lzver}_amd64.deb"
        "${pkgname}-${pkgver}-gmmlib-${_gmmver}_amd64.deb"::"https://github.com/intel/compute-runtime/releases/download/${pkgver}/intel-gmmlib_${_gmmver}_amd64.deb"
        "https://github.com/intel/gmmlib/archive/intel-gmmlib-${_gmmver}/intel-gmmlib-${_gmmver}.tar.gz"
        'LICENSE')
noextract=("intel-opencl_${pkgver}_amd64.deb"
           "intel-ocloc_${pkgver}_amd64.deb"
           "intel-level-zero-gpu_${_lzver}_amd64.deb"
           "${pkgname}-${pkgver}-gmmlib-${_gmmver}_amd64.deb")
sha256sums=('046d2cf7b81cb74b78701875a10ceeacfe5d5a63fcfca52a00256aefeebb6fea'
            '9e01461fed82b221a6c4ec017ac5c9de637d609608631c26920f48ecba1dcfca'
            '7e23d638e1e2231ae6d1d22fdb57a611bac8f562a2da938991fb755c204da426'
            '646f56c2092c4ae9b4775ee8eccc90771d282dc1d83cfad9bb020b41cbc0e080'
            '912cd86e4cb564b6fa549d69a28b72b9cdcb5a3eab9320955ed70ac37381fc2f'
            '73783f7cd3b35aa7d23fa64e400c8c6a6cf6256b62b35e4827094719a9acb172')

prepare() {
    mkdir -p {opencl,ocloc,level-zero-gpu,gmmlib}-"$pkgver"
    bsdtar -xf "intel-opencl_${pkgver}_amd64.deb" -C "opencl-${pkgver}"
    bsdtar -xf "intel-ocloc_${pkgver}_amd64.deb" -C "ocloc-${pkgver}"
    bsdtar -xf "intel-level-zero-gpu_${_lzver}_amd64.deb" -C "level-zero-gpu-${pkgver}"
    bsdtar -xf "${pkgname}-${pkgver}-gmmlib-${_gmmver}_amd64.deb" -C "gmmlib-${pkgver}"
}

build() {
    # only for installing the gmmlib headers (need to build for some headers to be correct)
    cmake -B build-gmmlib -S "gmmlib-intel-gmmlib-${_gmmver}" \
        -DBUILD_TYPE='None' \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DRUN_TEST_SUITE:BOOL='ON' \
        -Wno-dev
    make -C build-gmmlib package
}

package() {
    mkdir -p gmmlib-devel
    bsdtar -xf "opencl-${pkgver}/data.tar.xz" -C "$pkgdir"
    bsdtar -xf "ocloc-${pkgver}/data.tar.xz" -C "$pkgdir"
    bsdtar -xf "level-zero-gpu-${pkgver}/data.tar.xz" -C "$pkgdir"
    bsdtar -xf "gmmlib-${pkgver}/data.tar.xz" -C "$pkgdir"
    bsdtar -xf build-gmmlib/intel-gmmlib-devel-*-${CARCH}.tar.xz -C gmmlib-devel
    mv "${pkgdir}/usr/local"/{bin,include,lib} "${pkgdir}/usr"
    cp -dr --no-preserve='ownership' gmmlib-devel/usr/include/* "${pkgdir}/usr/include"
    cp -dr --no-preserve='ownership' gmmlib-devel/usr/lib/pkgconfig "${pkgdir}/usr/lib"
    chown -R root:root "$pkgdir"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s "$(find "${pkgdir}/usr/lib" -regex '.*libigdgmm.so.[0-9]*' -exec basename {} \;)" "${pkgdir}/usr/lib/libigdgmm.so"
    ln -s "$(find "${pkgdir}/usr/lib" -regex '.*libze_intel_gpu.so.[0-9]*' -exec basename {} \;)" "${pkgdir}/usr/lib/libze_intel_gpu.so"
    sed -i 's|/usr/local|/usr|' "${pkgdir}/etc/OpenCL/vendors/intel.icd"
    
    local _gmmlibver
    _gmmlib="$(find "${pkgdir}/usr/lib" -type f -name 'libigdgmm.so.*.*.*' -exec basename {} +)"
    sed -i "/^Version:/s/^.*$/Version: ${_gmmlib#*.so.}/" "${pkgdir}/usr/lib/pkgconfig/igdgmm.pc"
}
