# Maintainer: Tilman BLUMENBACH <tilman+aur AT ax86 DOT net>

pkgname=barrier
pkgver=2.0.0
pkgrel=1
pkgdesc="Open-source KVM software based on Synergy"
url="https://github.com/debauchee/barrier"
license=("custom:GPL2WithOpenSSLException")
source=("https://github.com/debauchee/barrier/archive/v${pkgver?}.tar.gz")
arch=(x86_64)
depends=(curl libx11 libxrandr libxext libxinerama xorgproto libxtst libxi avahi libsm libice openssl qt5-base
         hicolor-icon-theme)
makedepends=(cmake)

build() {
    cd "barrier-${pkgver?}"

    mkdir -p build
    cd build

    cmake -G "Unix Makefiles" \
        -D CMAKE_BUILD_TYPE:STRING=Release \
        -D CMAKE_INSTALL_PREFIX:STRING=/usr \
        -D BARRIER_REVISION:STRING=00000000 \
        -D BARRIER_VERSION_STAGE:STRING=RELEASE \
        ..
    make
}

package() {
    # Install binaries:
    cd "barrier-${pkgver?}/build"
    DESTDIR="${pkgdir?}" make install

    # Install the license:
    cd ..
    install -m 644 -D LICENSE "${pkgdir?}/usr/share/licenses/${pkgname?}/LICENSE"

    # Install the manpages:
    mkdir -p "${pkgdir?}/usr/share/man/man1"
    install -m 644 doc/*.1 "${pkgdir?}/usr/share/man/man1"

    # Install the examples:
    mkdir -p "${pkgdir?}/usr/share/doc/${pkgname?}"
    install -m 644 doc/barrier.conf* "${pkgdir?}/usr/share/doc/${pkgname?}"
}

sha256sums=('713b0850895eac184ecf30b002da0be9bf90dda3ba0b68a0f6ba6c6ecc06806f')
