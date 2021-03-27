# Maintainer: mnabila nblid48[at]gmail[dot]com

pkgname=sqls-bin
pkgver=0.2.18
pkgrel=1
pkgdesc="SQL language server written in Go."
url="https://github.com/lighttiger2505/sqls"
license=('MIT')
source=("$pkgname-$pkgver.tar.gz::https://github.com/lighttiger2505/sqls/releases/download/v$pkgver/sqls_${pkgver}_Linux_x86_64.tar.gz")
arch=('x86_64')
sha256sums=('SKIP')
depends=('git' 'go')
conflicts=('sqls-git')

package() {
    cd $srcdir
    install -Dm755 sqls "${pkgdir}/usr/bin/sqls"
}

#vim: syntax=sh
