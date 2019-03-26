# Maintainer: Tim Visee <tim@visee.me>
# Contributor: Ariel AxionL <i at axionl dot me>

pkgname=ffsend-bin
pkgver=0.2.42
pkgrel=1
pkgdesc="Easily and securely share files from the command line. A Firefox Send client."
url="https://gitlab.com/timvisee/ffsend"
license=('GPL3')
source=('ffsend::https://github.com/timvisee/ffsend/releases/download/v0.2.42/ffsend-v0.2.42-linux-x64-static')
sha256sums=('82bc1dfd553913807b5d850afea5683787f19a46daff2923539cf6ce1038746f')
arch=('x86_64')
provides=('ffsend')
conflicts=('ffsend')
depends=('ca-certificates')
optdepends=('xclip: clipboard support')

package() {
    install -D "$srcdir/ffsend" "$pkgdir/usr/bin/ffsend"
}
