# Maintainer: easymodo <easymodofrf@gmail.com>
pkgname=qimgv-git
_pkgname=qimgv
pkgver=v0.9.r0.g440e262
pkgrel=1
pkgdesc="Qt5 image viewer. Fast, configurable, easy to use. Supports video playback."
arch=('i686' 'x86_64')
url="https://github.com/easymodo/qimgv"
license=('GPL3')
depends=('qt5-base' 'qt5-imageformats' 'qt5-svg' 'mpv' 'exiv2' 'opencv')
makedepends=('git' 'cmake' 'pkgconf' 'qt5-tools' 'mpv' 'exiv2' 'opencv')
#checkdepends=()
optdepends=('kimageformats: support for more image formats'
            'qt5-apng-plugin: apng support'
            'qtraw-git: raw support')
provides=("qimgv")
conflicts=("qimgv")
source=('git+https://github.com/easymodo/qimgv.git')
md5sums=('SKIP')

pkgver() {
    cd ${_pkgname}
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/${_pkgname}"
    install -d build
}

build() {
    cd "${srcdir}/${_pkgname}/build"
    cmake .. \
        -DCMAKE_INSTALL_PREFIX:PATH=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DCMAKE_BUILD_TYPE=Release
    make
}

package() {
    cd "${srcdir}/${_pkgname}/build"
	make DESTDIR=${pkgdir} install
}
