# Maintainer: zoe <chp321@gmail.com>
pkgname=kxstitch
pkgver=1.2.0
pkgrel=7
pkgdesc="The program that lets you create cross stitch patterns and charts."
arch=('i686' 'x86_64')
depends=('kdebase-runtime' 'imagemagick')
makedepends=('cmake' 'automoc4' 'doxygen' 'patch')
url="http://kxstitch.sourceforge.net/"
license=('GPL')
source=(http://www-ftp.lip6.fr/pub/X11/kde/stable/kxstitch/${pkgver}/src/kxstitch-${pkgver}.tar.bz2 kxstitch.install)
md5sums=('b6b33dcfc30ec9df81b9df2c4edd4d24' '5b554364ee8db32e0bb1e881bf0bca34')
install=kxstitch.install

build() {
    cd "$srcdir/kxstitch-${pkgver}"
    sed -i 's/-DMAGICKCORE_HDRI_ENABLE=0/-DMAGICKCORE_HDRI_ENABLE=1/' CMakeLists.txt
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/CMakeLists.txt
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/ca/CMakeLists.txt
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/cs/CMakeLists.txt
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/da/CMakeLists.txt
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/de/CMakeLists.txt
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/en_GB/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/es/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/et/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/fr/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/hu/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/it/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/lt/CMakeLists.txt
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/nl/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/pl/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/pt/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/pt_BR/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/sk/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/sv/CMakeLists.txt    
    sed -i '1i\cmake_policy(SET CMP0002 OLD)' po/uk/CMakeLists.txt    
    rm -rf build
    mkdir build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=`kde4-config --prefix` .. \
          -DCMAKE_BUILD_TYPE="Release"
    make
}

package() {
    cd "$srcdir/kxstitch-${pkgver}/build"
    make DESTDIR="${pkgdir}" install

    # this one is unnecessary and namcap hates this dangling link
    #rm "${pkgdir}/usr/share/doc/kde/html/en/kxstitch/common"
}