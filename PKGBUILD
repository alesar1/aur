# Maintainer: Ricardo (XenGi) Band <email@ricardo.band>
pkgname=sensu-go-cli
pkgver=5.20.2
_pkgbuild=12959
_pkgver="${pkgver}-${_pkgbuild}"
pkgrel=1
pkgdesc="Sensu Go CLI"
arch=('x86_64')
url='https://sensu.io'
license=('MIT')
provides=("${pkgname/-go-/-}")
conflicts=("${pkgname/-go-/-}")
source=("${pkgname}-${_pkgver}_amd64.deb::https://packagecloud.io/sensu/stable/packages/debian/buster/${pkgname}_${_pkgver}_amd64.deb/download.deb")
sha1sums=('3fb74ed7b9e08e960c8e2f08aa22e3ca964a21f8')

prepare() {
    cd "${srcdir}"
    tar xaf data.tar.gz
}

# TODO: better build from source
# build() {}

package() {
    install -Dm755 "${srcdir}/usr/bin/sensuctl" "${pkgdir}/usr/bin/sensuctl"
    install -Dm644 "${srcdir}/usr/share/doc/${pkgname}-${pkgver}/LICENSE.txt" "${pkgdir}/usr/share/doc/${pkgname}-${pkgver}/LICENSE.txt"
    install -Dm644 "${srcdir}/usr/share/doc/${pkgname}-${pkgver}/README.txt" "${pkgdir}/usr/share/doc/${pkgname}-${pkgver}/README.txt"
}

