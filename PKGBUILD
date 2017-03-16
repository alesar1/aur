# Maintainer: Artem Savkov <artem.savkov@gmail.com>

pkgname=bitlbee-discord-git
pkgver=151.0f0485e
pkgrel=1
pkgdesc="Bitlbee plugin for Discord"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/sm00th/bitlbee-discord"
license=('GPL')
depends=('bitlbee')
makedepends=('git')
source=("git+https://github.com/sm00th/bitlbee-discord")
sha256sums=('SKIP')

pkgver() {
    cd "bitlbee-discord"
    echo "$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
    cd "bitlbee-discord"
    ./autogen.sh
    ./configure
    make
}

package() {
    cd "bitlbee-discord"
    make DESTDIR="$pkgdir" install
}
