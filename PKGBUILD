# Maintainer: Henry Nelson <hcnelson99@gmail.com>
pkgname=zig-static
pkgver=0.4.0
pkgrel=1
epoch=
pkgdesc="robust, optimal, and clear programming language"
arch=('x86_64')
url="https://ziglang.org/"
license=('MIT')
depends=()
makedepends=()
provides=('zig')
conflicts=('zig')
source=("https://ziglang.org/download/$pkgver/zig-linux-x86_64-$pkgver.tar.xz")
md5sums=('ca5d010f44d566879046897a39eb9907')

package() {
    cd "$srcdir/zig-linux-x86_64-$pkgver"
    install -D zig "$pkgdir/usr/bin/zig"
    install -D LICENSE "$pkgdir/usr/share/licenses/zig/LICENSE"
    cp -R lib "$pkgdir/usr"
    install -D langref.html "$pkgdir/usr/share/doc/zig/langref.html"
}
