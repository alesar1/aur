# Maintainer: Emil Edholm <bobby @ verypublic.org>

pkgname=mcap-cli
pkgver=0.0.5
pkgrel=1
pkgdesc='MCAP is a modular container format and logging library for pub/sub messages with arbitrary message serialization.'
arch=('x86_64')
license=('MPL')
url='https://github.com/foxglove/mcap'
depends=()
optdepends=()

source=("${pkgname}-${pkgver}-x86_64::https://github.com/foxglove/mcap/releases/download/releases%2Fmcap-cli%2Fv${pkgver}/mcap-linux-amd64")
sha512sums=('165a278401164228fba836c1dc5f32d5dbda5b64e728428e4e656f0b444f114be0dee25f6535b1ab4f4962b44dedfafeb51905bc6e4487932553a2add9acad91')

#prepare() {
#}

package() {
    cd "${srcdir}"

    mkdir -p "${pkgdir}/usr/bin"
    install -D -m755 ${pkgname}-${pkgver}-x86_64 ${pkgdir}/usr/bin/mcap-cli
}
