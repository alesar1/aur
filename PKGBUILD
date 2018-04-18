# Maintainer: Johannes Pfrang <johannespfrang+arch @ gmail.com>
# Co-Maintainer: Emanuele 'Lele aka eldios' Calo' <xeldiosx@gmail.com>

pkgname=teleport
pkgver=2.5.6
pkgrel=1
pkgdesc="Modern SSH server for teams managing distributed infrastructure"
arch=('x86_64' 'arm')
url="https://gravitational.com/teleport"
license=('Apache')
depends=('glibc')
install=teleport.install
source_x86_64=(
    "https://github.com/gravitational/teleport/releases/download/v${pkgver}/teleport-v${pkgver}-linux-amd64-bin.tar.gz"
    "teleport.service"
    )
sha256sums_x86_64=(
    '8352f0442ee3be20bd303ef0e53b601512dedef2291a07a1dcac42632e1c6fab'
    '3e332207cfa984a531044d47fde379a9c242aa92e0fef7804a031dff865396dc'
    )
source_arm=(
    "https://github.com/gravitational/teleport/releases/download/v${pkgver}/teleport-v${pkgver}-linux-arm-bin.tar.gz"
    "teleport.service"
    )
sha256sums_arm=(
    'abfaff280c543aeb33c1f34a25f8764336cd27b3548e94a09db67a48712b481e'
    '3e332207cfa984a531044d47fde379a9c242aa92e0fef7804a031dff865396dc'
    )
options=(!strip)

package() {
    mkdir -p "${pkgdir}/usr/lib/systemd/system" "${pkgdir}/usr/bin"
    install -m644 -t "${pkgdir}/usr/lib/systemd/system/" teleport.service
    cd "${srcdir}/teleport"
    install -m755 -t "${pkgdir}/usr/bin/" teleport tctl tsh
    # no man pages, docs or web assets in release tarball
}
