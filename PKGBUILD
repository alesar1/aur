#
# Maintainer: Uffe Jakobsen <uffe@uffe.org>
#

pkgname=rpiusbboot-git
_pkgname=usbboot
pkgver=r67.fcadec3
pkgrel=1
pkgdesc="Raspberry Pi USB boot"
arch=("i686" "x86_64")
url="https://github.com/raspberrypi/usbboot"
license=("Apache")
depends=("libusb")
conflict=()
source=("git+https://github.com/raspberrypi/usbboot.git")
md5sums=('SKIP')


pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_pkgname}"
  make || return 1
}

package() {
  cd "${srcdir}/${_pkgname}"
  #make DESTDIR="${pkgdir}/" install
  install -D rpiboot ${pkgdir}/usr/bin/rpiusbboot
}

#
# EOF
#
