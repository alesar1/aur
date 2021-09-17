# Maintainer: Kenny Rasschaert <kenny@kennyrasschaert.com>
pkgname=goss-bin
pkgver=0.3.16
pkgrel=1
pkgdesc="Quick and Easy server testing/validation"
arch=('i686' 'x86_64' 'arm')
provides=('goss' 'dgoss')
url="https://goss.rocks"
license=('Apache')
source=("dgoss-${pkgver}::https://github.com/aelsabbahy/goss/releases/download/v${pkgver}/dgoss"
        "LICENSE-${pkgver}::https://raw.githubusercontent.com/aelsabbahy/goss/v${pkgver}/LICENSE")
source_i686=("goss-linux-386-${pkgver}::https://github.com/aelsabbahy/goss/releases/download/v${pkgver}/goss-linux-386")
source_x86_64=("goss-linux-amd64-${pkgver}::https://github.com/aelsabbahy/goss/releases/download/v${pkgver}/goss-linux-amd64")
source_arm=("goss-linux-arm-${pkgver}::https://github.com/aelsabbahy/goss/releases/download/v${pkgver}/goss-linux-arm")
sha1sums=('560b4f6f6724f23a4477197df65c94434c4ee31e'
          '669a1e53b9dd9df3474300d3d959bb85bad75945')
sha1sums_i686=('22cf3313df64a285c2562b1de477b2e2a858f18b')
sha1sums_x86_64=('0303164cd5c119a36d0856474dde05e741c60324')
sha1sums_arm=('258529ae447407b8e682b5e03da155b2e5574787')

package() {
    install -D -m644 LICENSE-${pkgver} "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm 0755 goss-linux-*-${pkgver} "${pkgdir}/usr/bin/goss"
    install -Dm 0755 dgoss-${pkgver} "${pkgdir}/usr/bin/dgoss"
}

# vim:set ts=2 sw=2 et:
