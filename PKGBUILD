# Maintainer: Mike Roll <scaryspiderpig@gmail.com>

_pkgname=nvidia-texture-tools
pkgname="${_pkgname}-git"
pkgver=2.0.8.e965a66
pkgrel=1
pkgdesc="Texture processing tools with support for Direct3D 10 and 11 formats"
arch=('i686' 'x86_64')
url="https://github.com/castano/nvidia-texture-tools"
license=('MIT')
depends=('libpng' 'libjpeg' 'libtiff' 'openexr')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
makedepends=('cmake')
source=(git+https://github.com/castano/nvidia-texture-tools.git)
md5sums=('SKIP')

pkgver() {    
    cd "${srcdir}/${_pkgname}"
    echo "$(git tag | tail -1).$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_pkgname}"
    ./configure --prefix=/usr --release
    make
}

package() {
    cd ${srcdir}/${_pkgname}
    make DESTDIR=${pkgdir} install
}
