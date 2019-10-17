# Maintainer: Edward Pacman <edward@edward-p.xyz>

_projectname=dnsproxy
pkgname=dnsproxy-adguard
pkgver=0.19.6
pkgrel=2
pkgdesc="Simple DNS proxy with DoH, DoT, and DNSCrypt support by AdguardTeam"
arch=('x86_64')
url="https://github.com/AdguardTeam/dnsproxy"
license=('Apache')
source=("dnsproxy-adguard.service"
        "https://github.com/AdguardTeam/dnsproxy/archive/v${pkgver}.tar.gz")
makedepends=("go" "git")
sha256sums=('e10bee304ce60088e523b0925c85a7c0640eaf4b2a686d301de565290e70560a'
            'a9b100a5f1ec7ca0a8fe30ca6061c3541d13c43d9b7c4e77ad0b394a9e9505b8')

build(){
    cd "${srcdir}/${_projectname}-${pkgver}"
    go build
}

package() {
    cd "${srcdir}/${_projectname}-${pkgver}"
    install -Dm755 dnsproxy "${pkgdir}/usr/bin/${pkgname}"
    install -Dm644 "${srcdir}/dnsproxy-adguard.service" "${pkgdir}/usr/lib/systemd/system/dnsproxy-adguard.service"
}
