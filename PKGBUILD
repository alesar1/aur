# Maintainer: Michal Babik <michalb1981@o2.pl>

pkgname=wallchanger
pkgver=1.4.5
pkgrel=1
pkgdesc="Automatic wallpaper changer"
arch=('i686' 'x86_64')
url="https://www.nongnu.org/wallchanger/"
license=('GPL3')
depends=('json-c>=0.12.1' 'gtk3>=3.22.0')
source=("https://download.savannah.nongnu.org/releases/$pkgname/$pkgname-$pkgver.tar.gz")
md5sums=('7e9cfb48968730d6f728f7466308e9ae')
build() {
        cd "$srcdir/$pkgname-$pkgver"
        ./configure --prefix=/usr
        make
}
package() {
        cd "$srcdir/$pkgname-$pkgver"
        make DESTDIR="$pkgdir/" install
}

