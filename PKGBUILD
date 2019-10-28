# Maintainer: ChacaS0 <incoming+chacas0-chksum-13830438-issue-@incoming.gitlab.com>
pkgname=chksum-git
pkgver=0.1
pkgrel=1
pkgdesc='Check and compare easily the checksum of a file.'
arch=('x86_64')
url="https://gitlab.com/ChacaS0/chksum"
license=('Apache')
provides=("chksum")
conflicts=("chksum")
makedepends=('git' 'go-pie')
source=("git+https://gitlab.com/chacas0/chksum#branch=master")
sha256sums=('SKIP')

build() {
    cd "$srcdir/chksum"
    go build \
        -trimpath \
        -ldflags "-extldflags ${LDFLAGS}" \
        .
}

package() {
    cd "$srcdir/$pkgname"
    install -Dm755 "${pkgname%-bin-git}" "$pkgdir/usr/bin/chksum"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname%-bin-git}/LICENSE"
}
