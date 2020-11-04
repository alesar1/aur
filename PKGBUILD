# Maintainer: Cirk2 <privat+aur at cirk2 dot de> 

pkgname=sdbus-cpp-git
pkgver=r230.b190646
pkgrel=1
pkgdesc="sdbus-c++ is a high-level C++ D-Bus library for Linux designed to provide expressive, easy-to-use API in modern C++"
url="https://github.com/Kistler-Group/sdbus-cpp"
arch=('i686' 'x86_64')
license=('LGPLv2.1' 'custom:sdbus-c++ LGPL Exception 1.0')
depends=('systemd-libs')
makedepends=('cmake' 'doxygen')
provides=('sdbus-cpp')
conflicts=('sdbus-cpp')
source=("${pkgname}::git+https://github.com/Kistler-Group/sdbus-cpp.git")
sha256sums=('SKIP')

pkgver() {
    cd "${pkgname}"
    echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
    cmake "$srcdir/${pkgname}" \
        -DCMAKE_INSTALL_PREFIX=/ \
        -DCMAKE_BUILD_TYPE=Release \
        -DBUILD_CODE_GEN=ON \
        -DBUILD_DOXYGEN_DOC=ON
    make
    make doc
}

package() {
    make DESTDIR="$pkgdir" install
    install -Dm644 "$srcdir/${pkgname}/COPYING-LGPL-Exception" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

