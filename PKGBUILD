# Maintainer: Sajaysurya Ganesh <sajay.surya@gmail.com>

pkgname="grpc-cpp-git"
pkgver="1"
pkgrel=1
pkgdesc="GRPC-C++"
arch=('any')
url="https://github.com/grpc/grpc"
license=('Apache 2.0')
depends=('python-setuptools' 'python-numpy' 'python-scipy')
makedepends=('git')
source=('git+https://github.com/grpc/grpc.git')
md5sums=('SKIP')

pkgver() {
    cd "$srcdir"

# Git, tags available
    printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
    git submodule update --init
    make
}

package() {
    make install
}
