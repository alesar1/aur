# Maintainer: zoe <chp321@gmail.com>
# Contributor : enckse <enckse [at] gmail [dot] com>
pkgname=kxstitch
pkgver=2.1.1
pkgrel=1
pkgdesc="The program that lets you create cross stitch patterns and charts."
arch=('i686' 'x86_64')
depends=('plasma-workspace' 'imagemagick')
conflicts=('libmagick6')
makedepends=('cmake' 'automoc4' 'doxygen' 'patch' 'extra-cmake-modules' 'kdoctools')
url="https://userbase.kde.org/KXStitch"
license=('GPL')
source=("https://download.kde.org/stable/${pkgname}/${pkgver}/${pkgname}-${pkgver}.tar.xz"
       "${pkgname}.install"
       #"imagemagick.patch::https://github.com/KDE/kxstitch/commit/295773f44bfda1227d85edf065a8de14dc889159.diff"
       )
sha1sums=('6f712bca3173b90149b67640fb1b63d02725c9ef'
          '8e58ce0776eff7ef29394a2f7a089191a4af0b1d'
          #'e2d3c7ee0d9b62b7e0b1e4bcb327ee90f6edce3a'
          )
install=${pkgname}.install

build() {
    cd "${srcdir}/kxstitch-${pkgver}"
    #sed -i 's/-DMAGICKCORE_HDRI_ENABLE=0/-DMAGICKCORE_HDRI_ENABLE=1/' CMakeLists.txt
    
    # Avoid bug in cmake :
    #sed -i '5i\cmake_policy(SET CMP0002 OLD)' CMakeLists.txt
   
    #cp ../imagemagick.patch .
    #patch -p1 < imagemagick.patch
    rm -rf build
    mkdir build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=`qtpaths --install-prefix` .. \
          -DCMAKE_BUILD_TYPE="Release"
    make
}


package() {
    cd "${srcdir}/kxstitch-${pkgver}/build"
    make DESTDIR="${pkgdir}" install
}
