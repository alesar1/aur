# Maintainer: Tun Win Naing <tunwn.mdy at gmail dot com>
# Contributor: Donald Webster <fryfrog at gmail dot com>

pkgname=jackett-mono
pkgver=0.12.1494
pkgrel=1
pkgdesc='Use many torrent trackers with software that supports torznab/potato feeds.'
arch=('any')
license=('GPL')
url='https://github.com/Jackett/Jackett'
depends=('mono' 'curl' 'openssl-1.0')
options=('!strip' 'staticlibs')
conflicts=('jackett')
replaces=('jackett-armv6-bin')
install='jackett.install'

source=("jackett.service"
        "jackett.sysusers"
        "jackett.tmpfiles"
        "Jackett.Binaries.Mono-${pkgver}.tar.gz::https://github.com/Jackett/Jackett/releases/download/v${pkgver}/Jackett.Binaries.Mono.tar.gz")

sha256sums=('c5605e488bb113452b0bd6e6a7420ea5be8ffd7807cc06cbb6eb6277937c7da8'
            'd005fcd009ec5404e1ec88246c31e664167f5551d6cabc35f68eb41750bfe590'
            '64022e15565a609f449090f02d53ee90ef95cffec52ae14f99e4e2132b6cffe1'
            '2ce90ef7a16cafb7d37e39cfb4463783f6bb992b6ac8a74d5ff6867cfcf5f32f')

package() {
    cd "$srcdir"

    install -d -m 755 "${pkgdir}/usr/lib/jackett/"
    cp -dpr --no-preserve=ownership "${srcdir}/Jackett/"* "${pkgdir}/usr/lib/jackett/"

    install -D -m 644 "${srcdir}/jackett.service" "${pkgdir}/usr/lib/systemd/system/jackett.service"
    install -D -m 644 "${srcdir}/jackett.sysusers" "${pkgdir}/usr/lib/sysusers.d/jackett.conf"
    install -D -m 644 "${srcdir}/jackett.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/jackett.conf"
}
