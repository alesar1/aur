# Maintainer: PenguinSnail

pkgname=quick-back
pkgver=1.0
pkgrel=1
pkgdesc="Quick, simple command line backup tool"
arch=('any')
url="https://github.com/PenguinSnail/Quick-Back"
license=('GPL3')
depends=('rsync')
makedepends=() 
provides=('quick-back')
conflicts=('quick-back-git')
options=()
source=('https://github.com/PenguinSnail/Quick-Back/archive/'$pkgver'.tar.gz')
md5sums=('SKIP')

_gitname='Quick-Back'

pkgver() {
echo $pkgver
   }

package() {
    mkdir $pkgdir/usr
    mkdir $pkgdir/usr/bin
    cd $srcdir/${_gitname}-${pkgver}
    cp quick-back $pkgdir/usr/bin
    chmod +x $pkgdir/usr/bin/quick-back
}

