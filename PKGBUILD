# Maintainer: Yiyao Yu <yuydevel at protonmail dot com>
# Contributor: Moritz Lipp <mlq@pwmt.org>

pkgname=bear
_pkgname=Bear
pkgver=3.0.13
pkgrel=2
pkgdesc="tool to generate compilation database for clang tooling"
arch=('i686' 'x86_64')
url="https://github.com/rizsotto/Bear"
license=('GPL3')
makedepends=('cmake' 'ninja' 'nlohmann-json')
depends=('grpc' 'fmt' 'spdlog')
conflicts=('bear' 'interception-tools')
provides=('bear')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/rizsotto/$_pkgname/archive/$pkgver.tar.gz"
        "00-nlohmann-310.patch")
sha256sums=('b57d9b139acbbad6439f5b1133266fa5afc5eb095a61cfa07cd9e8941943ae22'
            'b3c825ccf7544b95e6c842fd2c43b4dded6f6078904f6b08b61f00a01c625a6a')
prepare() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    for p in ${srcdir}/*.patch; do
        patch -Np1 -i "$p"
    done
}

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    cmake -DCMAKE_INSTALL_PREFIX=/usr \
          -DCMAKE_INSTALL_SYSCONFDIR=/etc \
          -DCMAKE_INSTALL_LIBEXECDIR="lib/${pkgname}" \
          -DENABLE_UNIT_TESTS=OFF \
          -DENABLE_FUNC_TESTS=OFF \
          .

    make all
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    DESTDIR="${pkgdir}" make install
}
