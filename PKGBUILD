# Maintainer: Josep Oliver Arlès <josep.oliver at tutanota dot com>

pkgname=hek
pkgver=0.1.1
pkgrel=1
pkgdesc="Music library checker"
arch=("any")
url="https://github.com/dunon/hek"
license=("GPL3")
depends=("python" "python-mutagen")
source=("https://github.com/dunon/hek/archive/$pkgver.tar.gz")
md5sums=("7fc9514ce21386200294c073086736ab")

package() {
    cd "$pkgname-$pkgver"
    install -Dm755 $pkgname.py $pkgdir/usr/bin/$pkgname
}
