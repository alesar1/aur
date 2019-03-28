# Maintainer: Tim Visee <tim@visee.me>
# Contributor: Ariel AxionL <i at axionl dot me>

pkgname=ffsend-bin
pkgver=0.2.42
pkgrel=4
pkgdesc="Easily and securely share files from the command line. A Firefox Send client."
arch=('x86_64')
url="https://gitlab.com/timvisee/ffsend"
license=('GPL3')
depends=('ca-certificates')
optdepends=('xclip: clipboard support')
provides=('ffsend')
conflicts=('ffsend-git' 'ffsend')

source=("ffsend::https://github.com/timvisee/ffsend/releases/download/v${pkgver}/ffsend-v$pkgver-linux-x64-static")

sha256sums=('82bc1dfd553913807b5d850afea5683787f19a46daff2923539cf6ce1038746f')

package() {
    install -Dm755 "${srcdir}/ffsend" "${pkgdir}/usr/bin/ffsend"
}
