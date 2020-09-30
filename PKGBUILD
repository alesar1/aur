# Maintainer: Michal Babik <michalb1981@o2.pl>

pkgname=wallchanger
pkgver=1.6.1
pkgrel=1
pkgdesc="Automatic wallpaper changer"
arch=('i686' 'x86_64')
url="https://www.nongnu.org/wallchanger/"
license=('GPL3')
depends=('json-c>=0.12.1' 'gtk3>=3.22.0')
depends_x86_64=('libcurl-gnutls')
depends_i686=('libcurl-compat')
source=("https://download.savannah.nongnu.org/releases/$pkgname/$pkgname-$pkgver.tar.gz")
md5sums=('6853727dc2bb4bc238e6d2c44b1aed87')
build() {
        cd "$srcdir/$pkgname-$pkgver"
        ./configure --prefix=/usr
        make
}
package() {
        cd "$srcdir/$pkgname-$pkgver"
        make DESTDIR="$pkgdir/" install
}

