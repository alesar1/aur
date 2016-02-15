# Maintainer: Nicolas F. <aur@fratti.ch>
pkgname="pngnq-s9"
pkgver=2.0.1
pkgrel=3
arch=('i686' 'x86_64' 'ARM')
pkgdesc="Modified version of pngnq, neural network colour quantizer for PNG images"
url="https://sourceforge.net/projects/pngnqs9/"
conflicts=('pngnq')
depends=('libpng')
license=('custom')
source=("https://downloads.sourceforge.net/sourceforge/pngnqs9/pngnq-s9-${pkgver}.tar.gz")
sha256sums=('4c88a87e7b3c09f762f5bb27cd9639402b35d48abe010174d2e0cfd2fdd98ae6')

build() {
    cd "$pkgname-$pkgver"
    
    ./configure --prefix=/usr
    make
}

package() {
    
    cd "$pkgname-$pkgver"
    
    install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    make DESTDIR="$pkgdir/" install
}
