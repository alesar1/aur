# Maintainer: Mario Oenning <mo-son[at]mailbox[dot]org>
# Author: codic12 <https://github.com/codic12>

pkgname='worm'
pkgdesc="A floating, tag-based window manager written in Nim"
pkgver=0.1.0
pkgrel=4
arch=('x86_64' 'aarch64' 'armv7h')
url="https://github.com/codic12/worm"
license=('MIT')
makedepends=('nimble' 'nim')
depends=('xorg-server')
install=$pkgname.install
source=("$pkgname-$pkgver.tar.gz::$url/archive/v${pkgver}.tar.gz")
sha512sums=('4596a609898acfbb9ca516fb8a2ffd86e4d313ea6c7f376e3d6893efc951d02e8700e5526278c9bdc4d9285e82a3e26ae6c99ffb6ea3c4b1592637005bec62bb')

build() {
    cd "$pkgname-$pkgver"
    nimble -y build -d:release --gc:arc
}

package() {
    cd "$pkgname-$pkgver"

    # bin
    install -D -m755 "worm" "$pkgdir/usr/bin/worm"
    install -D -m755 "wormc" "$pkgdir/usr/bin/wormc"

    # license
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    # X session file
    install -Dm644 "assets/worm.desktop" "$pkgdir/usr/share/xsessions/worm.desktop"
    
    # docs
    install -Dm644 "README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
    install -Dm644 "docs/wormc.md" "$pkgdir/usr/share/doc/$pkgname/WORMC.md"
    
    # examples
    install -Dm755 "examples/rc" "$pkgdir/usr/share/doc/$pkgname/examples/rc"
    install -Dm644 "examples/sxhkdrc" "$pkgdir/usr/share/doc/$pkgname/examples/sxhkdrc"
    install -Dm755 "examples/jgmenu_run" "$pkgdir/usr/share/doc/$pkgname/examples/jgmenu_run"
}
