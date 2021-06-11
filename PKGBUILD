# Maintainer: database64128 <free122448@hotmail.com>
pkgname=qjsonstruct-git
pkgver=1.0.0
pkgrel=1
pkgdesc="JSON helper library for Qt apps"
arch=(x86_64)
url="https://github.com/moodyhunter/QJsonStruct"
license=('GPL3')
depends=('qt6-base' 'grpc' 'protobuf')
makedepends=('git' 'qt6-tools' 'grpc-cli' 'cmake' 'ninja')
provides=('qjsonstruct')
conflicts=('qjsonstruct')
source=("$pkgname::git+$url")
sha512sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
    cd "$srcdir/$pkgname"
    mkdir -p build && cd build
    cmake .. -GNinja \
        -DCMAKE_INSTALL_PREFIX=${pkgdir}/usr \
        -DCMAKE_BUILD_TYPE=Release
    ninja
}

package() {
    cd "$srcdir/$pkgname"
    ninja -C "build" install
}
