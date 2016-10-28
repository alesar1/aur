# Maintainer: Chocobo1

pkgname=igb
pkgver=5.3.5.4
pkgrel=1
pkgdesc="Linux* Base Driver for Intel(R) Ethernet Network Connection"
arch=('i686' 'x86_64')
url="https://sourceforge.net/projects/e1000/files/igb%20stable/"
license=('GPL')
depends=('linux>=2.6.30')
makedepends=('linux-headers>=2.6.30')
install=$pkgname.install
source=("$pkgname-$pkgver-src.tar.gz::https://downloads.sourceforge.net/project/e1000/igb%20stable/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('804fe3c5c3a65b4ce8681569175b62efd648240f5fbbc349689f14de0d3dee6d')


build() {
    cd "$srcdir/$pkgname-$pkgver/src"

    make
}

package() {
    cd "$srcdir/$pkgname-$pkgver/src"

    _kernver=$(pacman -Q linux | grep -Po '(?<= )\d+\.\d+')
    _extramodules="/usr/lib/modules/extramodules-$_kernver-ARCH"

    find './' -name '*.ko' -exec gzip --force --fast {} \;
    install -Dm644 'igb.ko.gz' "$pkgdir/$_extramodules/igb.ko.gz"

    install -Dm644 '../COPYING' "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
