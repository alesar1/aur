# Maintainer: neodarz <neodarz@neodarz.net>

_pkgname=grv
pkgname=$_pkgname-git
pkgver=r227.4ecb757
pkgrel=2
pkgdesc="terminal interface for viewing git repositories"
arch=('i686' 'x86_64')
url="https://github.com/rgburke/$_pkgname"
license=('GPL-3.0')
depends=(ncurses readline curl)
makedepends=(cmake go)
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/rgburke/$_pkgname.git")
noextract=()
md5sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
    export GOROOT=/usr/lib/go
    export GOPATH="$srcdir"
    go get -d github.com/rgburke/grv/cmd/$_pkgname
    cd $GOPATH/src/github.com/rgburke/$_pkgname
    make
}

package() {
    export GOROOT="$GOPATH"
    install -Dm755 "$(pwd)/src/github.com/rgburke/grv/grv" "$pkgdir/usr/bin/$_pkgname"
}

