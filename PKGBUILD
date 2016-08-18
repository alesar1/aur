# Maintainer: Quey-Liang Kao<s101062801@m101.nthu.edu.tw>
# Contributor: Iwan Timmer <irtimmer@gmail.com>

pkgname=runc-git
pkgver=v0.0.5.r785.g6df383c
pkgrel=1
pkgdesc="Container CLI tools"
depends=('glibc')
makedepends=('git' 'godep' 'go')
arch=('x86_64' 'i686')
source=("git+https://github.com/opencontainers/runc.git")
url="http://runc.io/"
provides=('runc')
conflicts=('runc')
license=("APACHE")
sha256sums=('SKIP')

prepare() {
    cd $srcdir/runc
    mkdir -p Godeps/_workspace/src/github.com/opencontainers
    ln -sfT ../../../../../ Godeps/_workspace/src/github.com/opencontainers/runc
}

build() {
    cd $srcdir/runc
    godep go build -o runc .
}

package() {
    cd $srcdir/runc
    install -Dm755 runc $pkgdir/usr/bin/runc
}

pkgver() {
    cd $srcdir/runc
    ( set -o pipefail
        git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
        printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}
