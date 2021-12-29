pkgname="tldr-page"
_pkgname="tldr-page-creator"
pkgrel=1
pkgver=1.4.r4.gcc42370
pkgdesc="Generate tldr-pages using Go"
url="https://github.com/CleanMachine1/tldr-page-creator"
source=('git+https://github.com/CleanMachine1/tldr-page-creator')
arch=('any')
license=('MIT')
makedepends=('go')

pkgver() {
  cd ${_pkgname}
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build(){
    cd ${_pkgname}
    go build -o ${pkgname} ./${pkgname}.go
}

package(){
    cd ${_pkgname}
    install -Dm755 ${pkgname} "${pkgdir}/usr/bin/tldr-page"
}
sha256sums=('SKIP')
