# Maintainer: yjun <jerrysteve1101 at gmail dot com>

pkgname=firmware-tqc-a01
pkgver=20210716
pkgrel=3
pkgdesc="Additional firmware for TQC-A01"
arch=('any')
conflicts=('firmware-raspberrypi')
# install=${pkgname}.install
url="https://github.com/RPi-Distro"
license=('GPL')
# _commitid_wl=f713a6054746bc61ece1c8696dce91a7b7e22dd9
# _commitid_bt=4de3d6b449c01f457d4a8217764ffbdd6597bf25
_ver="${pkgver}.${pkgrel}"
_chip_wl=brcmfmac43430
_chip_bt=BCM43430A1
options=('!strip')
source=(
        # get from https://archlinuxarm.org/packages/any/firmware-raspberrypi/files/PKGBUILD fixes buggy linux-firmware for Zero-W
        # "${_chip_wl}-sdio_$_ver.txt::https://archlinuxarm.org/builder/src/bcm43430/7.45.98.38/${_chip_wl}-sdio.txt"
	    # "${_chip_bt}_$_ver.hcd::https://raw.githubusercontent.com/RPi-Distro/bluez-firmware/master/broadcom/${_chip_bt}.hcd"
	    "${_chip_bt}_$_ver.hcd::https://raw.githubusercontent.com/armbian/firmware/master/ap6212/bcm43438a1.hcd"
        # "${_chip_bt}_$_ver.hcd::https://raw.githubusercontent.com/LibreELEC/brcmfmac_sdio-firmware/master/${_chip_bt}.vim"
        "${_chip_wl}-sdio_$_ver.txt::https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/plain/brcm/${_chip_wl}-sdio.AP6212.txt?h=${pkgver}"
        "${_chip_wl}-sdio_$_ver.bin::https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/plain/cypress/cyfmac43430-sdio.bin?h=${pkgver}"
        "${_chip_wl}-sdio_$_ver.clm_blob::https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/plain/cypress/cyfmac43430-sdio.clm_blob?h=${pkgver}")
sha256sums=('d396912aa4efa7e0ea93dc6b63b1088619b59676ab53404d14fe79f5c71a5da0'
            'fdef0603345dd023ad28c0eff2d5167915c617bee2d6944da9a6da1c4ac87ca5'
            '93f3c40c94340c29a40714cb04e3e89974870fcae42a844b8a4544750159f40d'
            '3376b9c9b32d16bf762e21c7fafb665365070ae240d092498d0d1987c22022aa')

package() {
  install -d "${pkgdir}/usr/lib/firmware/updates/brcm"

  install -m 0644 ${_chip_bt}_$_ver.hcd           "${pkgdir}/usr/lib/firmware/updates/brcm/${_chip_bt}.hcd"
  install -m 0644 ${_chip_wl}-sdio_$_ver.txt      "${pkgdir}/usr/lib/firmware/updates/brcm/${_chip_wl}-sdio.txt"
  install -m 0644 ${_chip_wl}-sdio_$_ver.bin      "${pkgdir}/usr/lib/firmware/updates/brcm/${_chip_wl}-sdio.bin"
  install -m 0644 ${_chip_wl}-sdio_$_ver.clm_blob "${pkgdir}/usr/lib/firmware/updates/brcm/${_chip_wl}-sdio.clm_blob"

  install -m 0644 ${_chip_wl}-sdio_$_ver.txt      "${pkgdir}/usr/lib/firmware/updates/brcm/${_chip_wl}-sdio.taiqigame,tqc-a01.txt"
  install -m 0644 ${_chip_wl}-sdio_$_ver.bin      "${pkgdir}/usr/lib/firmware/updates/brcm/${_chip_wl}-sdio.taiqigame,tqc-a01.bin"
  install -m 0644 ${_chip_wl}-sdio_$_ver.clm_blob "${pkgdir}/usr/lib/firmware/updates/brcm/${_chip_wl}-sdio.taiqigame,tqc-a01.clm_blob"
}

