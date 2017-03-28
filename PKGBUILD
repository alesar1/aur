# Maintainer: Guilhem Saurel <saurel@laas.fr>

_pkgname=hpp-util
_pkgver=3.2
pkgname=${_pkgname}-git
pkgver=3.2.r108.caf207c
pkgrel=1
pkgdesc="This package gathers technical tools for the HPP project."
arch=('i686' 'x86_64')
depends=('boost-libs' 'tinyxml')
url="https://github.com/humanoid-path-planner/hpp-util"
license=('GPL3')
makedepends=('cmake' 'pkg-config')
source=("$_pkgname"::"git://github.com/humanoid-path-planner/$_pkgname.git")
md5sums=('SKIP')

pkgver() {
    cd "$_pkgname"
    echo "$_pkgver.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$_pkgname"
    git submodule update --init
}

build() {
    cd "$_pkgname"
    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=/usr/lib .
    make
}

package() {
    cd "$_pkgname"
    make DESTDIR="$pkgdir/" install
}
