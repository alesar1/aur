# Maintainer: Sergey A. <murlakatamenka@disroot.org>
# Contributor: Magnus Boman

_pkgname=replay-sorcery
pkgname=$_pkgname-git
pkgver=r282.d8d5921
pkgrel=2
pkgdesc='Open-source, instant-replay solution for Linux'
url='https://github.com/matanui159/ReplaySorcery'
arch=(x86_64 i686)
license=(GPL3)
depends=(ffmpeg libx11 gcc-libs)
optdependss=('pulseaudio: recording audio'
             'libdrm: listing kms devices')
makedepends=(git cmake)
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+${url}.git"
        'git+https://github.com/ianlancetaylor/libbacktrace.git')
sha256sums=('SKIP'
            'SKIP')

pkgver() {
    cd "$_pkgname"

    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$_pkgname"

    git submodule init
    git config submodule."dep/libbacktrace".url ../libbacktrace
    git submodule update

    git apply ../../0000-include-avutil-ch-layout.patch
}

build() {
    cd "$_pkgname"

    cmake -B build \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr
    make -C build
}

package() {
    cd "$_pkgname"
    
    DESTDIR=${pkgdir} make -C build install
}
