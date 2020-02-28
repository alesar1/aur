# Maintainer: Aleksandar Trifunović <akstrfn at gmail dot com>

pkgname=cpp-taskflow
pkgver=2.3.0
pkgrel=1
pkgdesc="Modern C++ Parallel Task Programming Library"
arch=('any')
url="https://github.com/cpp-taskflow/cpp-taskflow"
license=('MIT')
makedepends=('cmake')
source=("$url/archive/v${pkgver}.tar.gz")
sha256sums=('ab4cbe9230877225bc95d89c8efe29bf35886ef91dc8d59e4244576230141385')

prepare() {
    cd "${pkgname}-${pkgver}"
    cmake -H. -Bbuild \
        -DCMAKE_C_FLAGS:STRING="${CFLAGS}" \
        -DCMAKE_CXX_FLAGS:STRING="${CXXFLAGS}" \
        -DCMAKE_EXE_LINKER_FLAGS:STRING="${LDFLAGS}" \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DTF_BUILD_EXAMPLES=OFF
}

build() {
    cd "${pkgname}-${pkgver}"
    cmake --build build
}

check() {
    cd "${pkgname}-${pkgver}"
    cmake --build build -- test
}

package() {
    cd "${pkgname}-${pkgver}"
    cmake --build build -- DESTDIR="${pkgdir}" install
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
