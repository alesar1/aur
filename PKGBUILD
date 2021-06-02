# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgbase=libjxl-git
pkgname=('libjxl-git' 'libjxl-doc-git')
pkgver=0.3.7.r58.g1e296c5
pkgrel=1
pkgdesc='JPEG XL image format reference implementation (git version)'
arch=('x86_64')
url='https://jpeg.org/jpegxl/'
license=('BSD')
makedepends=('git' 'cmake' 'clang' 'brotli' 'gdk-pixbuf2' 'giflib' 'gimp'
             'libjpeg-turbo' 'libpng' 'openexr' 'zlib' 'libgl' 'freeglut'
             'gtest' 'gmock' 'python' 'asciidoc' 'doxygen' 'graphviz')
source=('git+https://github.com/libjxl/libjxl.git'
        'git+https://github.com/google/brotli.git'
        'git+https://github.com/lvandeve/lodepng.git'
        'git+https://github.com/mm2/Little-CMS.git'
        'git+https://github.com/google/googletest.git'
        'git+https://github.com/webmproject/sjpeg.git'
        'git+https://skia.googlesource.com/skcms.git'
        'git+https://github.com/veluca93/IQA-optimization.git'
        'git+https://github.com/Netflix/vmaf.git'
        'git+https://github.com/thorfdbg/difftest_ng.git'
        'git+https://github.com/google/highway.git')
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

prepare() {
    git -C libjxl submodule init
    git -C libjxl config --local submodule.third_party/brotli.url "${srcdir}/brotli"
    git -C libjxl config --local submodule.third_party/lodepng.url "${srcdir}/lodepng"
    git -C libjxl config --local submodule.third_party/lcms.url "${srcdir}/Little-CMS"
    git -C libjxl config --local submodule.third_party/googletest.url "${srcdir}/googletest"
    git -C libjxl config --local submodule.third_party/sjpeg.url "${srcdir}/sjpeg"
    git -C libjxl config --local submodule.third_party/skcms.url "${srcdir}/skcms"
    git -C libjxl config --local submodule.third_party/IQA-optimization.url "${srcdir}/IQA-optimization"
    git -C libjxl config --local submodule.third_party/vmaf.url "${srcdir}/vmaf"
    git -C libjxl config --local submodule.third_party/difftest_ng.url "${srcdir}/difftest_ng"
    git -C libjxl config --local submodule.third_party/highway.url "${srcdir}/highway"
    git -C libjxl submodule update
}

pkgver() {
    git -C libjxl describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    export CC='clang'
    export CXX='clang++'
    cmake -B build -S libjxl \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DJPEGXL_ENABLE_BENCHMARK:BOOL='false' \
        -DJPEGXL_ENABLE_FUZZERS:BOOL='false' \
        -DJPEGXL_ENABLE_PLUGINS:BOOL='true' \
        -DJPEGXL_ENABLE_VIEWERS:BOOL='false' \
        -DJPEGXL_ENABLE_GIMP_SAVING:BOOL='ON' \
        -DJPEGXL_FORCE_SYSTEM_BROTLI:BOOL='true' \
        -DJPEGXL_FORCE_SYSTEM_GTEST:BOOL='true' \
        -DJPEGXL_FORCE_SYSTEM_HWY:BOOL='false' \
        -DJPEGXL_WARNINGS_AS_ERRORS:BOOL='false' \
        -Wno-dev
    make -C build all doc
}

check() {
    make -C build test
}

package_libjxl-git() {
    depends=('brotli')
    optdepends=('gdk-pixbuf2: for gdk-pixbuf loader'
                'giflib: for CLI tools'
                'gimp: for gimp plugin'
                'libjpeg-turbo: for CLI tools'
                'libpng: for CLI tools'
                'openexr: for CLI tools')
    provides=('libjxl' 'libjpeg-xl-git' 'libjxl.so')
    conflicts=('libjxl' 'libjpeg-xl-git')
    replaces=('libjpeg-xl-git')
    
    make -C build DESTDIR="$pkgdir" install
    install -D -m644 libjxl/plugins/mime/image-jxl.xml -t "${pkgdir}/usr/share/mime/packages"
}

package_libjxl-doc-git() {
    pkgdesc="$(sed 's/\((git\)/(documentation) \1/' <<< "$pkgdesc")"
    arch=('any')
    provides=('libjxl-doc' 'libjpeg-xl-doc-git')
    conflicts=('libjxl-doc' 'libjpeg-xl-doc-git')
    replaces=('libjpeg-xl-doc-git')
    
    mkdir -p "${pkgdir}/usr/share/doc"
    cp -dr --no-preserve='ownership' build/html "${pkgdir}/usr/share/doc/libjxl"
}
