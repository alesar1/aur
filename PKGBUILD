# Maintainer: Philip Abernethy<chais.z3r0@gmail.com>
pkgname=nvflash
pkgver=5.414.0
pkgrel=1
pkgdesc="A tool to update the the firmware of Nvidia display adapters."
url="ihttps://www.techpowerup.com/download/nvidia-nvflash/"
arch=('x86_64' 'i686')
license=('unknown')
source=("http://us1-dl.techpowerup.com/files/82osxAp2PEVxpxS5sPIouQ/1511017437/${pkgname}_${pkgver}_linux.zip")
sha512sums=('bcd62a3dbda077af305acfdff1bd04282aca5a9056e1b49384d3d160942a8624ede15d29c0dba45292c2ea4cce741a31b8ff551892748bcc61d29c129db08b9c')

package() {
	install -Dm755 "${srcdir}"/nvflash "${pkgdir}"/usr/bin/nvflash
}
