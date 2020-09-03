# Maintainer: Pellegrino Prevete <pellegrinoprevete@gmail.com>

pkgname=barrier-git
pkgver=2.3
pkgrel=2
pkgdesc="Open-source KVM software based on Synergy"
url="https://github.com/debauchee/barrier"
license=("custom:GPL2WithOpenSSLException")
source=(
    "barrier-git::git+https://github.com/debauchee/barrier.git"
)
sha256sums=('SKIP')
arch=(x86_64)
depends=(
    # Barrier core dependencies:
    curl
    avahi
    libx11
    libxrandr
    libxext
    libxinerama
    xorgproto
    libxtst
    libxi
    libsm
    libice
    openssl
)
makedepends=(
    cmake
    gmock
    gtest

    # Barrier GUI dependencies:
    qt5-base
    hicolor-icon-theme
)

prepare() {
    cd "barrier-git"

    for patch in "${srcdir?}"/*.patch; do
        if [ -f "${patch?}" ]; then
            patch -Np1 -i "${patch?}"
        fi
    done
}

build() {
    cd "barrier-git"

    mkdir -p build
    cd build

    cmake -G "Unix Makefiles" \
        -D CMAKE_BUILD_TYPE:STRING=Release \
        -D CMAKE_INSTALL_PREFIX:STRING=/usr \
        -D BARRIER_REVISION:STRING=00000000 \
        -D BARRIER_VERSION_STAGE:STRING=RELEASE \
        -D BARRIER_USE_EXTERNAL_GTEST:bool=true \
        ..
    make
}

_package_common() {
    # Install binaries:
    cd "barrier-git/build"
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

package_barrier-git() {
    pkgdesc="Open-source KVM software based on Synergy (GUI)"
    depends=(
        "barrier-headless-git=${pkgver?}-${pkgrel?}"
        qt5-base
        hicolor-icon-theme
    )

    # Install all the files:
    _package_common

    # Now go and delete files that are already in
    # barrier-headless:
    for file in \
        /usr/share/doc \
        /usr/share/man \
        /usr/bin/barrier{s,c} \
    ;do
        rm -rf "${pkgdir:?}/${file:?}"
    done
}
