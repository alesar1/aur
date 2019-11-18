# Maintainer: robertfoster

pkgname=xash3d-hlsdk
pkgver=r428.52b067fd
pkgrel=1
pkgdesc="Half-Life SDK from original Xash3D engine"
arch=('i686' 'x86_64')
url="http://xash.su/"
license=('GPL3')
makedepends=('make' 'binutils' 'cmake' 'gcc')
source=("$pkgname::git+https://github.com/FWGS/hlsdk-xash3d")

_args="--libdir=/usr/lib \
--enable-goldsrc-support \
--build-type=release"

if [ $CARCH == "x86_64" ]; then
    _args+=" -8"
fi

pkgver() {
    cd $srcdir/$pkgname
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd $srcdir/$pkgname
    git submodule init && git submodule update
    ./waf configure ${_args}
}

build() {
    cd $srcdir/$pkgname
    ./waf build
}

package() {
    cd $srcdir/$pkgname/
    ./waf install --destdir="$pkgdir/usr/lib"
}

md5sums=('SKIP')
