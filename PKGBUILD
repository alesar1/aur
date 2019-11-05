# Maintainer: Jon Noble <jonnobleuk@gmail.com>
pkgname=mediahandling
pkgver=0.0.1
pkgrel=2
pkgdesc="A library solely intended for the use in the project Chestnut by handling all media-file operations"
arch=(x86_64)
url="https://github.com/jonno85uk/mediahandling"
license=('MIT')
depends=('ffmpeg')
makedepends=('cmake') 
provides=("${pkgname%}")
source=("https://github.com/jonno85uk/mediahandling/archive/0.0.1.tar.gz")
md5sums=('cdfb633ecdca02c4f53caf36bcbdc877')

prepare() {
    rm -rf "mediahandling"
    rm -rf ${pkgdir}
    tar xaf ${pkgver}.tar.gz
    mv mediahandling-${pkgver} mediahandling
    cd "$srcdir/mediahandling"
    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX:PATH=${pkgdir}/usr/
}

build() {
    cd "$srcdir/mediahandling"
    CORES=$(cat /proc/cpuinfo | grep -c "vendor_id")
    make -j${CORES} -l${CORES} VERBOSE=1
}


package() {
    cd "$srcdir/mediahandling"
    make install
    # Temporary until CMakeLists.txt and api is updated
    mkdir -p ${pkgdir}/usr/include/mediahandling/
    cp Include/* ${pkgdir}/usr/include/mediahandling/
    cp ffmpeg/*.h ${pkgdir}/usr/include/mediahandling/
}
