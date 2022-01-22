# Maintainer: robertfoster
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>

pkgname=qemu-arm-static-bin
pkgver=6.2.0r1
_pkgver=${pkgver/r/-r}
pkgrel=1
pkgdesc='Statically linked qemu-arm, qemu-armeb and qemu-aarch64 executables from Alpine'
arch=('x86_64')
url='https://alpinelinux.org/'
license=('GPL2')
install="${pkgname}.install"
provides=('qemu-arm-static')
conflicts=('qemu-arm-static')
source=("https://alpine.global.ssl.fastly.net/alpine/edge/community/x86_64/qemu-aarch64-${_pkgver}.apk"
        "https://alpine.global.ssl.fastly.net/alpine/edge/community/x86_64/qemu-arm-${_pkgver}.apk"
        "https://alpine.global.ssl.fastly.net/alpine/edge/community/x86_64/qemu-armeb-${_pkgver}.apk"
        aarch64.binfmt arm.binfmt armeb.binfmt
)

package() {
  for arch in aarch64 arm armeb; do
    install -Dm755 usr/bin/qemu-"${arch}" \
      "${pkgdir}/usr/bin/qemu-${arch}-static"
    install -Dm644 "${arch}".binfmt \
      "${pkgdir}/usr/lib/binfmt.d/${arch}.conf"
  done
}

sha256sums=('d221916f6c39ce22c8e87f7d7bf1589c13233020d35b9f188b35f0c10c7f1350'
            '3c459e304708139e884a784631dafbd5d3b1724595205c50f2ec7619f4d763b5'
            'a1f7af9a8db4217bbae4cd237a2482e95be40a70d7a04940d30b263e5f30e88a'
            '234e4d432d03324c44c33b12b7e047ff8bb52e86002ea68029c9ec57057fac19'
            'd41900da17c56d7dddea5c0a908b97944502cc5b67fbd1eb9106734a0731b578'
            'b95b705037bce2176ff84812dfe00e67ddd5e03e244e81301131419576b03f6b')
