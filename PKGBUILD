# Maintainer: taotieren <admin@taotieren.com>

pkgname=xfel
pkgver=1.2.8
pkgrel=1
epoch=
pkgdesc="Tiny FEL tools for allwinner SOC, support RISC-V D1 chip."
arch=('any')
url="https://github.com/xboot/xfel"
license=('MIT')
groups=()
depends=('libusb')
makedepends=("gcc")
checkdepends=()
optdepends=()
provides=()
conflicts=(xfel-git)
replaces=()
backup=()
options=('!strip')
install=
changelog=
source=("${pkgname}-${pkgver}.tar.gz::https://ghproxy.com/${url}/archive/refs/tags/v${pkgver}.tar.gz")
noextract=()
sha256sums=('8f92ba5305e7187f1793fbcdb6cb9c47dee715d0757a7ea019980f534a66e547')
#validpgpkeys=()

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make
}

package() {
    install -Dm0755 "${srcdir}/${pkgname}-${pkgver}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    install -Dm0644 "${srcdir}/${pkgname}-${pkgver}/99-xfel.rules" "${pkgdir}/etc/udev/rules.d/99-xfel.rules"
    install -Dm0644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
