# Maintainer: Sebastian Gsänger <sebastian_gsaenger@web.de>
pkgname=vipster-git
pkgver=r1177.42b677e
pkgrel=1
pkgdesc="Molecule editor based on Qt, specialized on periodic structures, development version"
arch=('x86_64')
url="https://sgsaenger.github.io/vipster"
license=('GPL3')
groups=()
depends=('qt5-base' 'python')
# pybind11 has currently no compatible release, using git submodule
#makedepends=('cmake' 'git' 'pybind11')
makedepends=('cmake' 'git')
conflicts=('vipster')
source=("git+https://github.com/sgsaenger/vipster#branch=testing")
md5sums=('SKIP')

pkgver() {
    cd vipster
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd vipster
    mkdir -p build
    cd build

    git submodule update --init
    cmake -D CMAKE_INSTALL_PREFIX=/usr -D CMAKE_BUILD_TYPE=Release -D PYBIND=ON -D PYSHELL=ON -D DESKTOP=ON -D TESTS=ON ..
    make vipster pyvipster
}

check() {
    cd vipster/build

    make test_lib
    ./test_lib
}

package() {
    cd vipster/build

    make DESTDIR=$pkgdir install
}
