# Maintainer: mnabila nblid48[at]gmail[dot]com

pkgname=sqls-git
pkgver=0.2.15.r1.g552c79a
pkgrel=1
pkgdesc="SQL language server written in Go."
url="https://github.com/lighttiger2505/sqls"
license=('MIT')
source=("${pkgname}::git+https://github.com/lighttiger2505/sqls.git")
arch=('x86_64')
sha256sums=('SKIP')
depends=('git' 'go')
conflicts=('sqls-bin')

pkgver() {
  cd "${pkgname}"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd $srcdir/$pkgname
    go build
}

package() {
    cd $srcdir/$pkgname
    install -Dm755 sqls "${pkgdir}/usr/bin/sqls"
}

#vim: syntax=sh
