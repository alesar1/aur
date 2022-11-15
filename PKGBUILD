# Maintainer: Drew Nutter <dnut@users.noreply.github.com>
pkgname=clipboard-sync
pkgver=0.1.0
pkgrel=2
pkgdesc='Synchronizes the clipboard across multiple X11 and wayland instances running on the same machine.'
url='https://github.com/dnut/clipboard-sync'
source=("git+https://github.com/dnut/clipboard-sync#tag=$pkgver")
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv7h' 'armv6h' 'aarch64')
license=('GPL3')
makedepends=()
depends=('rust')
optdepends=()
sha256sums=('SKIP')

build() {
    cd "$srcdir/$pkgname"
    make
}

package() {
    cd "$srcdir/$pkgname"
    make install "prefix=$pkgdir/$pkgname/usr"
}
