# Maintainer: Jan Was <janek.jan at gmail dot com>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=usql-bin
pkgver=0.9.0
pkgrel=1
pkgdesc="Universal command-line interface for SQL databases"
arch=('x86_64')
url='https://github.com/xo/usql'
license=('MIT')
options=('!strip')
provides=("${pkgname%-bin}")
source=("${pkgname}-${pkgver}.tar.bz2::${url}/releases/download/v${pkgver}/usql-${pkgver}-linux-amd64.tar.bz2"
    'LICENSE::https://github.com/xo/usql/raw/master/LICENSE')
sha256sums=('b2c8f124406a50395dfb6b6064875a000a4199e43c523aad350976b451d39fb1'
    '1aae8f533b6341e4dd3c891cce64a321ec21f6ed1216c963eb9b6669f3c906bf')

package() {
    install -Dm755 "${srcdir}/${pkgname%-bin}" \
        "${pkgdir}/usr/bin/${pkgname%-bin}"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
