# Maintainer: kachelaqa <kachelaqa at gmail dot com>

pkgname='pkgbrowser'
pkgver=0.15
pkgrel=1
pkgdesc='A utility for browsing pacman databases and the AUR'
arch=('i686' 'x86_64')
url="https://bitbucket.org/kachelaqa/$pkgname"
license=('GPL2')
depends=('pacman>=4.1' 'pacman<4.2' 'python>=3.2' 'python-pyqt4')
install="$pkgname.install"
source=("$url/downloads/$pkgname-$pkgver.tar.gz")
md5sums=('52a1d735513cd2537b66b4e4d2022793')

build() {
    cd "$srcdir/$pkgname-$pkgver"
    make PREFIX='/usr'
}

package() {
    cd "$srcdir/$pkgname-$pkgver"
    make PREFIX='/usr' DESTDIR="$pkgdir" install
}
