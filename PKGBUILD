# Maintainer: Martin Sandsmark <martin.sandsmark@kde.org>

pkgname=ctranslate2-git
pkgver=1209.3190be5
pkgrel=1
pkgdesc='Fast inference engine for OpenNMT models'
arch=('x86_64' 'i686')
url='https://github.com/OpenNMT/ctranslate2'
license=('GPL3')
depends=("genieutils-git>=709" 'sfml')
makedepends=('git' 'cmake')
conflicts=(ctranslate2)
provides=(ctranslate2)
source=(
        'git+https://github.com/OpenNMT/ctranslate2.git'

        'git+https://github.com/jarro2783/cxxopts.git'
        'git+https://github.com/NVlabs/cub.git'
        'git+https://github.com/thrust/thrust.git'
        'git+https://github.com/google/googletest.git'

)
md5sums=(
    'SKIP'

    'SKIP'
    'SKIP'
    'SKIP'
    'SKIP'
)

pkgver() {
    cd ctranslate2
    printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    mkdir -p build
    cd ctranslate2
    git submodule init
    git config submodule.third_party/cxxopts.url "$srcdir/cxxopts"
    git config submodule.third_party/cub.url "$srcdir/cub"
    git config submodule.third_party/thrust.url "$srcdir/thrust"
    git config submodule.third_party/googletest.url "$srcdir/googletest"
    git submodule update
}

build() {
    cd build

    # CPU dispatch breaks with multiple definitions blah blah
    cmake ../ctranslate2 \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DWITH_MKL=False \
        -DENABLE_CPU_DISPATCH=False \
        -DOPENMP_RUNTIME=COMP

    # Not enabled/added as deps:
    #   WITH_MKL (seems to be incompatible with my version, at least)
    #   WITH_DNNL
    #   WITH_OPENBLAS
    #   WITH_CUDA

    make
}


package() {
    cd build
    make DESTDIR="$pkgdir" install
}
