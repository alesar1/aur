# Maintainer: Pavan Rikhi <pavan.rikhi@gmail.com>
pkgname=lightdm-mini-greeter
pkgver=0.1.3
pkgrel=2
pkgdesc="A Minimal, Configurable, Single-User GTK3 LightDM Greeter"
arch=('i686' 'x86_64')
url="https://github.com/prikhi/lightdm-mini-greeter"
license=('GPL3')
depends=('lightdm' 'gtk3')
backup=('etc/lightdm/lightdm-mini-greeter.conf')
source=("https://github.com/prikhi/lightdm-mini-greeter/archive/$pkgver.zip"
        "lightdm-mini-greeter.install")
sha256sums=('fd27f5301dc49c1949580faea0a28e3def40926bb889d9aeba9a2b07fdf439a4'
            '63262e5c86cff52542e0f2028a0ef2566a5d9ac00fac368f459269202f659d7b')
install="lightdm-mini-greeter.install"

build() {
    cd "$pkgname-$pkgver"
    ./autogen.sh
    ./configure --datadir=/usr/share --bindir=/usr/bin --sysconfdir=/etc
    make
}

package() {
    cd "$pkgname-$pkgver"
    make DESTDIR="$pkgdir/" install
}
