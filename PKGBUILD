# Maintainer: kevku <kevku@gmx.com>
pkgname=libdigidocpp
pkgver=3.13.7.1377
pkgrel=1
pkgdesc="Library for creating, signing and verification of digitally signed documents, according to XAdES and XML-DSIG standards"
arch=('x86_64' 'i686')
url="http://www.id.ee/"
license=('LGPL')
depends=('xml-security-c>=2.0')
makedepends=('cmake' 'xsd>=4.0' 'xxd')
source=("https://installer.id.ee/media/ubuntu/pool/main/libd/$pkgname/${pkgname}_$pkgver.orig.tar.xz")
sha256sums=('09979248196673acfc0655c45e875abd14235407d83459493293e666573c9442')

prepare() {
    [[ -d "$pkgname-build" ]] && rm -r "$pkgname-build"
    mkdir "$pkgname-build"
    sed -i 's|#{ENV\["BUILD_NUMBER"\]}|1377|g' cmake/modules/VersionInfo.cmake
}

build() {
    cd "$pkgname-build"
    cmake .. -DCMAKE_C_FLAGS:STRING="${CFLAGS} -ffile-prefix-map=$srcdir=." \
             -DCMAKE_CXX_FLAGS:STRING="${CXXFLAGS} -ffile-prefix-map=$srcdir=." \
             -DCMAKE_EXE_LINKER_FLAGS:STRING="${LDFLAGS}" \
             -DCMAKE_INSTALL_PREFIX="/usr" \
             -DCMAKE_INSTALL_LIBDIR="lib" \
             -DCMAKE_INSTALL_SYSCONFDIR="/etc" \
             -DSWIG_EXECUTABLE="" \
             -DBoost_INCLUDE_DIR="" \
             -DMINIZIP_INCLUDE_DIR="" \
             -DPODOFO_INCLUDE_DIR="" \
             -DLIBDIGIDOC_INCLUDE_DIR=""
    make
}

package() {
    cd "$pkgname-build"
    make DESTDIR="$pkgdir/" install
}
