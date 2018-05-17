# Maintainer: Valerii Huz <ghotrix at gmail dot com>
pkgname=lc0-cudnn-git
_pkgname=lc0-cudnn
pkgver=1026
pkgrel=1
pkgdesc="CudNN version of Leela Chess Zero."
arch=('i686' 'x86_64')
url="https://lczero.org/"
license=('GPLv3')
depends=('cuda' 'cudnn')
makedepends=('git' 'meson>=0.46' 'ninja')
source=("${_pkgname}::git+https://github.com/glinscott/leela-chess#branch=next")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git rev-list --count HEAD
}

build() {
    cd ${srcdir}/${_pkgname}/lc0
    ./build.sh release || return 1
}

package() {
    cd "$srcdir/$_pkgname/lc0/build/release"
    install -Dm755 lc0 $pkgdir/usr/bin/lc0
}
