# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

pkgname=virtio-win
_ver=0.1.190
# upstream version
_pkgver=${_ver}-1
# package version
pkgver=${_ver}.1
pkgrel=1
pkgdesc='virtio drivers for Windows (2000, XP, Vista, 7, 8, 10) guests and floppy images for Windows XP'
arch=('any')
url='https://docs.fedoraproject.org/en-US/quick-docs/creating-windows-virtual-machines-using-virtio-drivers/index.html'
license=('BSD-3-Clause')
optdepends=('qemu')
# https://fedorapeople.org/groups/virt/virtio-win/CHANGELOG
changelog="${pkgname}.changelog"
# install="${pkgname}.install"
_url=https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio
source=("${pkgname}-${_pkgver}.iso::${_url}/${pkgname}-${_pkgver}/${pkgname}.iso"
        "${pkgname}-${_pkgver}_amd64.vfd::${_url}/${pkgname}-${_pkgver}/${pkgname}_amd64.vfd"
        "${pkgname}-${_pkgver}_x86.vfd::${_url}/${pkgname}-${_pkgver}/${pkgname}_x86.vfd")
noextract=("${pkgname}-${_pkgver}.iso"
           "${pkgname}-${_pkgver}_amd64.vfd"
           "${pkgname}-${_pkgver}_x86.vfd")
sha256sums=('dc6044e02fa6739881246843287481919ebcd4484f4bf23247741100489e9930'
            '947e01fc437351384a263bfccbcc4835e72d2273ed8ba76b2fd830575b565164'
            '99e6b03afa88287f77d607a9c7e0cdd8c950d73e4dabe0a2a0353b1f213d34da')

package() {
  install -Dm 644 ${pkgname}-${_pkgver}.iso \
    "${pkgdir}/usr/share/virtio/${pkgname}.iso"

  install -Dm 644 ${pkgname}-${_pkgver}_amd64.vfd \
    "${pkgdir}/usr/share/virtio/${pkgname}_x86_64.vfd"

  install -Dm 644 ${pkgname}-${_pkgver}_x86.vfd \
    "${pkgdir}/usr/share/virtio/${pkgname}_x86_32.vfd"
}

# vim:set ts=2 sw=2 et:
