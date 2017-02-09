# Maintainer: Frantisek Fladung <ametisf@gmail.com>

pkgname=velox-ametisf-git
pkgver=462.e533638
pkgrel=1
pkgdesc="Ametisf's fork of velox."
arch=('i686' 'x86_64')
url="https://github.com/ametisf/velox"
license=('MIT')
depends=('swc')
makedepends=('tup')
optdepends=('terminus-font: bitmap font for nicer rendering'
            'dstatus: status bar for velox')
conflicts=('velox')
provides=('velox')
source=("$pkgname::git+https://github.com/ametisf/velox.git")
md5sums=('SKIP')

pkgver() {
    cd $pkgname
    echo $(git rev-list --count master).$(git rev-parse --short master)
}

build() {
    cd $pkgname
    tup init
    tup upd
}

package() {
    mkdir -p $pkgdir/usr/{bin,share/velox}
    install -m 755 $pkgname/velox $pkgdir/usr/bin
    install -m 644 $pkgname/velox.xml $pkgdir/usr/share/velox
}
