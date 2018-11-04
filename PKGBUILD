# Maintainer: 132ikl <132ikl@gmail.com>
_pkgname=mbs
pkgname="${_pkgname}-git"
pkgver=r11.060a1a9
pkgrel=1
pkgdesc="A simple cmake-based modular build system for C and C++"
arch=("i686" "x86_64")
url=https://github.com/john01dav/mbs
license=("LGPL3")
depends=("gcc-libs")
makedepends=("cmake")
provides=("mbs")
conflicts=("mbs")
source=("git+${url}.git"
    "git+https://github.com/jbeder/yaml-cpp")
md5sums=("SKIP" "SKIP")

pkgver()  {
    printf "r%s.%s" "$(git -C ${_pkgname} rev-list --count HEAD)" "$(git -C ${_pkgname} rev-parse --short HEAD)"
}

prepare() {
    cd "${_pkgname}"
    git submodule init
    git config yaml-cpp.git "${srcdir}/yaml-cpp/"
    git submodule update
}

build() {
    mkdir -p "${_pkgname}/build"
    cd "${_pkgname}/build"
    cmake .. -DCMAKE_BUILD_TYPE=Release
    make
}

package() {
    mkdir -p "${pkgdir}/usr/bin/"
    install "${_pkgname}/build/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
}

