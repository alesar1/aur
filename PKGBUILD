# Maintainer: Quey-Liang Kao<s101062801@m101.nthu.edu.tw>

pkgname=todolist-git
pkgver=r84.c3c8817
pkgrel=1
pkgdesc="A light-weight and simple task manager based upon GTD"
depends=('go')
makedepends=('git')
arch=('x86_64')
source=("git+https://github.com/gammons/todolist")
url="https://http://todolist.site/"
license=("MIT")
options=('!strip')
sha256sums=('SKIP')

prepare() {
    cd $srcdir
    export GOPATH=$srcdir/go/
    export TODOPATH=$GOPATH/src/github.com/gammons/
    mkdir -p $TODOPATH
    rm -fr $TODOPATH/todolist
    mv $srcdir/todolist $TODOPATH
}

build() {
    export GOPATH=$srcdir/go/
    export TODOPATH=$GOPATH/src/github.com/gammons/
    cd $TODOPATH/todolist
    go install
}

package() {
    export GOPATH=$srcdir/go/
    mkdir -p $pkgdir/bin
    cp $GOPATH/bin/todolist $pkgdir/bin/
}

pkgver() {
    export GOPATH=$srcdir/go/
    export TODOPATH=$GOPATH/src/github.com/gammons/
    cd $TODOPATH/todolist
    ( set -o pipefail
        git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
        printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}
