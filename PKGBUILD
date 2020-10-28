# Maintainer: Yiyao Yu <yuydevel at protonmail dot com>
# Contributor: Moritz Lipp <mlq@pwmt.org>

pkgname=bear
_pkgname=Bear
pkgver=3.0.0
pkgrel=2
pkgdesc="tool to generate compilation database for clang tooling"
arch=('i686' 'x86_64')
url="https://github.com/rizsotto/Bear"
license=('GPL3')
makedepends=('cmake' 'ninja')
depends=('python' 'grpc' 'fmt' 'spdlog' 'nlohmann-json')
# Needed for cmake to build correctly
options=('!buildflags')
conflicts=('bear')
provides=('bear')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/rizsotto/$_pkgname/archive/$pkgver.tar.gz"
        "00-libexec-fix.patch")
sha256sums=('7b68aad69e887d945ad20f8e9f3a8c33cf2d59cc80da7e52d931d8c685fe2f79'
            'a759e7b9d7e6b4e776fc224b62decda5460bd654e716ab9be39b55f56947e3a7')

prepare() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    # Patch for fixing Bear 3.0.0 not exporting CMAKE_LIBEXEC_DIR
    # Thanks to ArchLinuxCN for pointing this out!
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

    # Workaround for including compile dir in package
    rm -rf "$pkgdir/${srcdir:1}"
    find "$pkgdir" -empty -type d -delete
}
