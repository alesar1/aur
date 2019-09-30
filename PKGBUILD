# Maintainer: Oleg Shparber <oleg@zealdocs.org>

_appname=zeal
_builddir=build

pkgname=${_appname}-git
pkgver=0.6.1.r86.g9a394d3
pkgrel=1
pkgdesc="A simple documentation browser"
arch=('i686' 'x86_64')
url="https://zealdocs.org/"
license=('GPL3')
depends=('hicolor-icon-theme' 'libarchive' 'qt5-webkit' 'qt5-x11extras')
makedepends=('cmake' 'extra-cmake-modules' 'git' 'ninja')
conflicts=(${_appname})
source=("${_appname}::git+https://github.com/zealdocs/${_appname}")
sha1sums=('SKIP')

pkgver() {
    cd ${_appname}
    git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cmake -G Ninja -B "${_builddir}" \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=RelWithDebInfo \
        "${srcdir}/${_appname}"

    cmake --build "${_builddir}"
}

package() {
    cmake --install "${_builddir}" --prefix "${pkgdir}/usr"
}
