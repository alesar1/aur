# Maintainer: Hexhu <i@hexhu.net>
# Maintainer: Lucas Magalhães <whoisroot@national.shitposting.agency>
_pkgname=passivedns
pkgname=${_pkgname}-git
pkgver=r283.3f387d0
pkgrel=1
pkgdesc="A network sniffer that logs all DNS server replies for use in a passive DNS setup"
arch=('x86_64')
url="https://github.com/gamelinux/passivedns"
license=('GPLv2')
depends=('ldns' 'libpcap')
makedepends=('git' 'binutils') 
provides=("${_pkgname}")
source=("passivedns::git+git://github.com/gamelinux/passivedns.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_pkgname}"
    autoreconf --install
    ./configure --prefix=/usr
    make
}

package() {
    cd "${srcdir}/${_pkgname}"
    make DESTDIR="${pkgdir}" install
}
