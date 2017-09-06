# Maintainer: Maks Mazurov <foxcpp@yandex.ru>
# Contributor: Patrick Griffis <tingping@tingping.se>

pkgname=hexchat-otr
pkgver=0.2.2
pkgrel=1
pkgdesc='HexChat plugin for Off-The-Record support'
arch=('i686' 'x86_64')
url='https://github.com/TingPing/hexchat-otr'
license=('GPL2')
conflicts=('hexchat-otr-git')
depends=('libotr' 'hexchat')
source=("https://github.com/TingPing/hexchat-otr/releases/download/$pkgver/hexchat-otr-$pkgver.tar.xz")
sha256sums=('e18425f4b20447caddf64a9079b8750200100e158a03575d89457bb6d8f8d5f1')

build() {
    cd "$pkgname-$pkgver"

    ./configure --prefix=/usr
    make -s
}

package() {
    cd "$pkgname-$pkgver"

    DESTDIR="$pkgdir" make install
}

