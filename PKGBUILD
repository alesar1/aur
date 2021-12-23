# Maintainer: arjan5 <aur@anymore.nl>

_pkgname=ntfy
pkgname=${_pkgname}sh-bin
pkgver=1.8.0
pkgrel=1
pkgdesc="Send push notifications to your phone or desktop using PUT/POST"
arch=("x86_64")
url="https://github.com/binwiederhier/ntfy"
license=('GPL2')
depends=()
makedepends=()
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${url}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_linux_x86_64.tar.gz"
        "${_pkgname}.sysusers")
backup=('etc/ntfy/server.yml')

sha256sums=('85ebf0bbdcc9af196fa439e8b5f12e26b264acf27a03f151993fb9123d204ea5'
            '0799a140256072b350b56c1b2db5fc21c94c6992277d6d1364c28ddf7058cc8f')

package() {
    cd "${srcdir}/${_pkgname}_${pkgver}_linux_x86_64/"
    install -Dm755 "${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
    install -Dm644 "server/${_pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
    install -Dm644 "server/server.yml" "${pkgdir}/etc/ntfy/server.yml"
    install -Dm0644 "../${_pkgname}.sysusers" "${pkgdir}"/usr/lib/sysusers.d/${_pkgname}.conf
}

