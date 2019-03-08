# Maintainer: Tim Visee <tim@visee.me>

pkgname=ffsend
pkgver=0.2.24
pkgrel=1
pkgdesc="Easily and securely share files from the command line. A Firefox Send client."
url="https://gitlab.com/timvisee/ffsend"
license=('GPL3')
conflicts=('ffsend-git')
source=("ffsend::https://github.com/timvisee/ffsend/releases/download/v$pkgver/ffsend-v$pkgver-linux-x64-static")
sha256sums=('SKIP')
arch=('x86_64')
depends=('ca-certificates')
optdepends=('xclip: clipboard support')

package() {
    install -D "$srcdir/ffsend" "$pkgdir/usr/bin/ffsend"
}
