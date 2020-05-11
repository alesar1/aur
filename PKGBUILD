# Maintainer: John Ramsden <johnramsden [at] riseup [dot] net>

pkgname=zectl
pkgver=0.1.1
pkgrel=2
pkgdesc="ZFS Boot Environment manager."
url="http://github.com/johnramsden/${pkgname}"
arch=('any')
license=('MIT')
depends=('zfs')
makedepends=('make' 'cmake')
conflicts=("${pkgname}-git")
provides=("zectl")

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/johnramsden/${pkgname}/archive/v${pkgver}.tar.gz")

sha256sums=('3103d955b990c9b67ba1c7b50b4c712a7edea605f37ff167c4f71a6756f13cf8')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    mkdir build && cd build
    cmake .. -DCMAKE_INSTALL_PREFIX=/usr -DPLUGINS_DIRECTORY=/usr/share/zectl/libze_plugin
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}/build"
    make DESTDIR="${pkgdir}" install
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/docs/zectl.8" "${pkgdir}/usr/share/man/man8/zectl.8"
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/README.md" "${pkgdir}/usr/share/doc/${pkgname}/README.md"
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-MIT"
}
