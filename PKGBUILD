# Maintainer: ava1ar <mail(at)ava1ar(dot)me>

_pkgname=linux-aarch64-raspberrypi
pkgname=linux-aarch64-raspberrypi-bin
pkgver=4.14.33.20180416
pkgdesc="Automated weekly build of the default branch 64-bit bcmrpi3_defconfig Linux kernel for the Raspberry Pi 3 model B"
_kernver=${pkgver%.*}
pkgrel=1
arch=('aarch64')
url="https://github.com/sakaki-/bcmrpi3-kernel"
license=('GPL2')
options=('!strip')
depends=('coreutils' 'linux-firmware' 'kmod' 'mkinitcpio>=0.7' 'firmware-raspberrypi')
optdepends=('crda: to set the correct wireless channels of your country')
provides=("linux=${_kernver}")
conflicts=('linux-aarch64' 'uboot-raspberrypi')
install=${_pkgname}.install
backup=('boot/config.txt' 'boot/cmdline.txt')
source=("https://github.com/sakaki-/bcmrpi3-kernel/releases/download/${pkgver}/bcmrpi3-kernel-${pkgver}.tar.xz"
	'config.txt'
	'cmdline.txt'
	'linux.preset'
        '99-linux.hook')
sha1sums=('5970251081481a906b16ac8fb37502a616fea1e9'
          '472aa9e8528789f17950fb0b06de60ce3f67e4f8'
          'f55155535974425e4c1ab5869fbe86b68cdc04cb'
          '495384696eaccf1ae6894938780cf9bdf3020ef3'
          '79cd078bb327135784d21e44451fe8c212a5c5aa')

package() {
  # package the kernel files
  cp -r "${srcdir}/boot" "${pkgdir}"
  mkdir "${pkgdir}/usr" && cp -r "${srcdir}/lib" "${pkgdir}/usr"

  # create symlink for modules directory with short ${_kernver}
  ln -s "${_kernver}$(source "${pkgdir}/boot/config"; echo $CONFIG_LOCALVERSION)+" "${pkgdir}/usr/lib/modules/${_kernver}"

  # set correct depmod command for install
  sed \
    -e  "s/KERNEL_NAME=.*/KERNEL_NAME=${_pkgname#linux}/g" \
    -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/g" \
    -i "${startdir}/${_pkgname}.install"

  # install mkinitcpio preset file for kernel
  install -D -m644 "${srcdir}/linux.preset" "${pkgdir}/etc/mkinitcpio.d/${_pkgname}.preset"
  sed \
    -e "1s|'linux.*'|'${_pkgname}'|" \
    -e "s|ALL_kver=.*|ALL_kver=\"${_kernver}\"|" \
    -i "${pkgdir}/etc/mkinitcpio.d/${_pkgname}.preset"

  # install pacman hook for initramfs regeneration
  sed "s|%PKGNAME%|${_pkgname}|g" "${srcdir}/99-linux.hook" |
    install -D -m644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/99-${_pkgname}.hook"

  # install boot files
  install -m644 "${srcdir}/config.txt" "${srcdir}/cmdline.txt" "${pkgdir}/boot"
}
