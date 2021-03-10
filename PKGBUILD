#!/hint/bash
# Maintainer : bartus <arch-local-repo(at).bartus.33mail.com>
# Contributor : Rafał Kozdrój <kozeid2+aur@gmail.com>
# Contributor : kikadf <kikadf.01@gmail.com>
# Contributor : Daniel Henry <d at hackr dot pl>
# Contributor : Miguel Revilla <yo at  miguelrevilla dot com>
# Contributor : Alfonso Saavedra "Son Link" <sonlink.dourden@gmail.com>
# Contributor : Hexchain Tong <i at hexchain dot org>
# shellcheck disable=SC2034,SC2154 # unused/uninitialized variables
# shellcheck disable=SC2164 # cd safe

pkgname=megasync-nopdfium
pkgver=4.4.0.0
pkgrel=2
pkgdesc="Easy automated syncing between your computers and your MEGA cloud drive(stripped of pdfium dependency)"
arch=('i686' 'x86_64')
provides=(megasync=$pkgver)
conflicts=(megasync)
url="https://github.com/meganz/MEGAsync"
license=('custom:MEGA LIMITED CODE REVIEW LICENCE')
depends=('c-ares' 'crypto++' 'libsodium' 'libuv'
         'libmediainfo' 'libraw' 'qt5-base' 'qt5-svg' 'qt5-x11extras' 'ffmpeg')
makedepends=('qt5-tools' 'swig' 'doxygen' 'lsb-release' 'git')
_extname="_Win"
source=("git+https://github.com/meganz/MEGAsync.git#tag=v${pkgver}${_extname}"
        "meganz-sdk::git+https://github.com/meganz/sdk.git")
sha256sums=('SKIP'
            'SKIP')

prepare() {
    cd "MEGAsync"
    git config submodule.src/MEGASync/mega.url "../meganz-sdk"
    git submodule update --init

    cd "src/MEGASync"
    sed -i '/DEFINES += REQUIRE_HAVE_PDFIUM/d' MEGASync.pro
    sed -i '/CONFIG += USE_PDFIUM/d' MEGASync.pro
}

build() {
    # build sdk
    cd "MEGAsync/src/MEGASync/mega"
    ./autogen.sh
    ./configure \
        --disable-shared \
        --enable-static \
        --disable-silent-rules \
        --disable-curl-checks \
        --disable-megaapi \
        --with-cryptopp \
        --with-sodium \
        --with-zlib \
        --with-sqlite \
        --with-cares \
        --with-curl \
        --without-freeimage \
        --with-libuv \
        --disable-posix-threads \
        --disable-examples \
        --with-libzen \
        --with-libmediainfo \
        --prefix="${srcdir}/MEGAsync/src/MEGASync/mega/bindings/qt/3rdparty"

    # build megasync
    cd "../.."
    qmake-qt5 "CONFIG += FULLREQUIREMENTS" MEGA.pro
    lrelease-qt5 MEGASync/MEGASync.pro
    make
}

package () {
    cd "MEGAsync"
    install -Dm 644 LICENCE.md "${pkgdir}/usr/share/licenses/$pkgname/LICENCE"
    install -Dm 644 installer/terms.txt "${pkgdir}/usr/share/licenses/$pkgname/terms.txt"
    install -Dm 644 src/MEGASync/mega/LICENSE "${pkgdir}/usr/share/licenses/$pkgname/SDK-LICENCE"
    
    cd "src"
    install -dm 755 "${pkgdir}/usr/bin"
    make INSTALL_ROOT="${pkgdir}" TARGET="${pkgdir}/usr/bin/megasync" install

    install -Dm 755 "MEGASync/megasync" "${pkgdir}/usr/bin/megasync"
}
