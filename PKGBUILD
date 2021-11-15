# Maintainer: Dct Mei <dctxmei@yandex.com>

pkgname=geph4-vpn-helper
pkgver=0.2.4
pkgrel=1
pkgdesc="A command-line Geph4 toolset"
arch=('x86_64')
url="https://github.com/geph-official/geph4-vpn-helper"
license=('unknown')
groups=('geph4')
depends=('gcc-libs' 'geph4-client')
makedepends=('rust')
conflicts=('geph4-vpn-helper-git')
source=("${pkgname}-${pkgver}.tar.gz::https://static.crates.io/crates/${pkgname}/${pkgname}-${pkgver}.crate"
        "geph4-vpn-helper.service")
sha256sums=('71984cec5576b832c3b63672a7276739a653e60f4d618d8ad18ff5496f92e420'
            'ae990333a1eebd5d5bb57ebd4a930db84d08a2c7db541d349de119280473e043')

build() {
    cd "${srcdir}"/"${pkgname}-${pkgver}"/
    cargo build --release --manifest-path=Cargo.toml
}

package() {
    cd "${srcdir}"/"${pkgname}-${pkgver}"/
    #install -Dm 644 LICENSE.md "${pkgdir}"/usr/share/licenses/geph4-vpn-helper/LICENSE
    install -Dm 755 target/release/geph4-vpn-helper -t "${pkgdir}"/usr/bin/
    install -Dm 644 "${srcdir}"/geph4-vpn-helper.service -t "${pkgdir}"/usr/lib/systemd/system/
}
