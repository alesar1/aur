# Maintainer:   M.Reynolds <blackboxnetworkproject@gmail.com>
# Contributor:  Bruno Nova <brunomb.nova@gmail.com>

pkgname=nautilus-admin
pkgver=1.1.8
pkgrel=1
pkgdesc="Extension for Nautilus to do administrative operations"
arch=('any')
url="https://github.com/brunonova/$pkgname"
license=('GPL3')
depends=('nautilus' 'python-nautilus' 'polkit')
makedepends=('cmake>=2.6' 'gettext')
optdepends=('gedit: to use the "Edit as Administrator" action'
            'gnome-terminal: to use the "Run as Administrator" action')
install="$pkgname.install"
source=("https://github.com/brunonova/$pkgname/releases/download/v$pkgver/${pkgname}_$pkgver.tar.xz")
sha256sums=('c42c9dc11b48819727e3d868926568a7e2d3f88d2c2fce37c1aead69d5aea029')

build() {
    cd "$srcdir"
    cmake . -DCMAKE_INSTALL_PREFIX=/usr
    make
}

package() {
    cd "$srcdir"
    make DESTDIR="$pkgdir" install
    install -Dm644 "README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
    install -Dm644 "NEWS" "$pkgdir/usr/share/doc/$pkgname/NEWS"
    install -Dm644 "AUTHORS" "$pkgdir/usr/share/doc/$pkgname/AUTHORS"
}
