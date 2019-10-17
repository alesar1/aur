# Maintainer: Rafał Kozdrój <kozeid2+aur@gmail.com>
# Contributor: kikadf <kikadf.01@gmail.com>
# Contributor: Daniel Henry <d at hackr dot pl>
# Contributor: Miguel Revilla <yo at  miguelrevilla dot com>
# Contributor: Alfonso Saavedra "Son Link" <sonlink.dourden@gmail.com>
# Contributor: Hexchain Tong <i at hexchain dot org>

pkgname=megasync
pkgver=4.2.5
pkgrel=4
pkgdesc="Easy automated syncing between your computers and your MEGA cloud drive"
arch=('i686' 'x86_64')
url="https://github.com/meganz/MEGAsync"
license=('custom:MEGA LIMITED CODE REVIEW LICENCE')
depends=('c-ares' 'crypto++' 'libsodium' 'hicolor-icon-theme' 'libuv'
         'qt5-svg' 'libmediainfo' 'libraw' 'qt5-base' 'ffmpeg')
makedepends=('qt5-tools' 'swig' 'doxygen' 'lsb-release' 'git')
optdepends=('sni-qt: fix systray issue on KDE and LXQt')
_extname=".0_Linux"
source=("git+https://github.com/meganz/MEGAsync.git#tag=v${pkgver}${_extname}"
        "meganz-sdk::git+https://github.com/meganz/sdk.git"
        "fix-double-declaration-of-tgkill.patch")
sha256sums=('SKIP'
            'SKIP'
            'a4ee87777bc055bc98dc9b044734d24e0ec17124389fedcf45e6a67cfe2fb061')

prepare() {
    cd "MEGAsync"
    git submodule init
    git config submodule.src/MEGASync/mega.url "../meganz-sdk"
    git submodule update
    
    patch -Np1 -i "../fix-double-declaration-of-tgkill.patch"
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
    install -Dm 644 LICENCE.md "${pkgdir}/usr/share/licenses/megasync/LICENCE"
    install -Dm 644 installer/terms.txt "${pkgdir}/usr/share/licenses/megasync/terms.txt"
    install -Dm 644 src/MEGASync/mega/LICENSE "${pkgdir}/usr/share/licenses/megasync/SDK-LICENCE"
    
    cd "src"
    make INSTALL_ROOT="${pkgdir}" install

    install -Dm 755 "MEGASync/megasync" "${pkgdir}/usr/bin/megasync"
}
