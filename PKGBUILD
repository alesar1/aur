# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=libjpeg-xl-git
pkgver=r6.g50bbf27
pkgrel=1
pkgdesc='JPEG XL image format reference implementation (git version)'
arch=('x86_64')
url='https://jpeg.org/jpegxl/'
license=('Apache')
depends=('gcc-libs')
optdepends=('giflib: for CLI tools'
            'gperftools: for CLI tools'
            'libjpeg-turbo: for CLI tools'
            'libpng: for CLI tools'
            'openexr: for CLI tools')
makedepends=('git' 'cmake' 'clang' 'giflib' 'gperftools' 'libjpeg-turbo'
             'libpng' 'openexr' 'zlib' 'libgl' 'freeglut' 'gtest' 'python'
             'doxygen')
provides=('libjpeg-xl')
conflicts=('libjpeg-xl')
source=('git+https://gitlab.com/wg1/jpeg-xl.git'
        'git+https://github.com/google/brotli.git'
        'git+https://github.com/lvandeve/lodepng.git'
        'git+https://github.com/mm2/Little-CMS.git'
        'git+https://github.com/google/googletest'
        'git+https://github.com/google/brunsli.git'
        'git+https://github.com/webmproject/sjpeg.git'
        'git+https://skia.googlesource.com/skcms.git'
        'git+https://github.com/meganz/mingw-std-threads.git'
        '010-libjpeg-xl-git-remove-werror.patch'
        '020-libjpeg-xl-git-fix-headers-install-path.patch'
        '030-libjpeg-xl-git-fix-highway-build.patch')
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            '1688c7e887a771801af60c915c793c285ee5318c15c76fd5ba06e2b0918adf47'
            '86868318bd3252d689e51aecf1e2a480cf2e2ef3fb2c238171a6cb3a2cdf6506'
            '322ea656cceda16567caff9093acbcd398f055878d47340a7695deac1ce6902b')

prepare() {
    local _mingw_commit
    _mingw_commit="$(git -C jpeg-xl submodule | awk '/mingw-std-threads/ { sub(/^-/, "", $1); print $1 }')"
    git -C mingw-std-threads remote add upstream https://github.com/meganz/mingw-std-threads.git
    git -C mingw-std-threads fetch upstream "$_mingw_commit"
    git -C jpeg-xl submodule init
    git -C jpeg-xl config --local submodule.third_party/brotli.url "${srcdir}/brotli"
    git -C jpeg-xl config --local submodule.third_party/lodepng.url "${srcdir}/lodepng"
    git -C jpeg-xl config --local submodule.third_party/lcms.url "${srcdir}/Little-CMS"
    git -C jpeg-xl config --local submodule.third_party/googletest.url "${srcdir}/googletest"
    git -C jpeg-xl config --local submodule.third_party/brunsli.url "${srcdir}/brunsli"
    git -C jpeg-xl config --local submodule.third_party/sjpeg.url "${srcdir}/sjpeg"
    git -C jpeg-xl config --local submodule.third_party/skcms.url "${srcdir}/skcms"
    git -C jpeg-xl config --local submodule.third_party/mingw-std-threads.url "${srcdir}/mingw-std-threads"
    git -C jpeg-xl submodule update
    patch -d jpeg-xl -Np1 -i "${srcdir}/010-libjpeg-xl-git-remove-werror.patch"
    patch -d jpeg-xl -Np1 -i "${srcdir}/020-libjpeg-xl-git-fix-headers-install-path.patch"
    patch -d jpeg-xl -Np1 -i "${srcdir}/030-libjpeg-xl-git-fix-highway-build.patch"
}

pkgver() {
    printf 'r%s.g%s' "$(git -C jpeg-xl rev-list --count HEAD)" "$(git -C jpeg-xl rev-parse --short HEAD)"
}

build() {
    cmake -B build -S jpeg-xl \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DJPEGXL_ENABLE_BENCHMARK:BOOL='false' \
        -DJPEGXL_ENABLE_FUZZERS:BOOL='false' \
        -DJPEGXL_ENABLE_PLUGINS:BOOL='false' \
        -DJPEGXL_ENABLE_VIEWERS:BOOL='false' \
        -Wno-dev
    make -C build
}

check() {
    make -C build test
}

package() {
    make -C build DESTDIR="$pkgdir" install
    install -D -m644 jpeg-xl/plugins/mime/image-jxl.xml -t "${pkgdir}/usr/share/mime/packages"
    rm "${pkgdir}/usr/bin/"{cbrunsli,butteraugli_main,decode_and_encode,epf_main,fuzzer_corpus,ssimulacra_main,xyb_range}
    rm "${pkgdir}/usr/lib/"{libhwy.a,pkgconfig/libhwy{,-test}.pc}
    rm -r "${pkgdir}/usr/include/hwy"
}
