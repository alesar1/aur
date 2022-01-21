
# Maintainer: Leonidas P. <jpegxguy at outlook dot com>
# Maintainer: Jerry <isjerryxiao at outlook dot com>
# Contributor: Anes Belfodil <ans.belfodil at gmail dot com>
# Contributor: David Rheinsberg <david.rheinsberg at gmail dot com>
# Contributor: David Herrmann <dh.herrmann at gmail dot com>

_pkgname=qemu-user-static
pkgname=${_pkgname}-bin
pkgver=6.2
pkgrel=3
pkgdesc='A generic and open source machine emulator, statically linked'
arch=('x86_64' 'i686' 'aarch64' 'armv7h' 'armv6h')
url="http://wiki.qemu.org"
license=('GPL2' 'LGPL2.1')
depends=('binfmt-qemu-static')
provides=("qemu-user" "${_pkgname}" "qemu-arm-static")
conflicts=("qemu-user" "${_pkgname}" "qemu-arm-static")

_pkgadditver="+dfsg-2"
source_x86_64=("https://deb.debian.org/debian/pool/main/q/qemu/${_pkgname}_${pkgver}${_pkgadditver}_amd64.deb")
source_i686=("https://deb.debian.org/debian/pool/main/q/qemu/${_pkgname}_${pkgver}${_pkgadditver}_i386.deb")
source_aarch64=("https://deb.debian.org/debian/pool/main/q/qemu/${_pkgname}_${pkgver}${_pkgadditver}_arm64.deb")
source_armv7h=("https://deb.debian.org/debian/pool/main/q/qemu/${_pkgname}_${pkgver}${_pkgadditver}_armhf.deb")
source_armv6h=("https://deb.debian.org/debian/pool/main/q/qemu/${_pkgname}_${pkgver}${_pkgadditver}_armel.deb")

sha256sums_x86_64=("0d3e749254fd218bad387552fb74bb11786fe288058472163aa418b9bfae08d9")
sha256sums_i686=("df8c626ff4e5a1b2aaa61d640da42ccd13c6e98731905dd805668e0dcd7dc51c")
sha256sums_aarch64=("5786662519616d5baa4e0727c4984bc83e0014a2fd33d172e21958c218fc8f13")
sha256sums_armv7h=("00f5e49f7c72abfb875efebed767fa564e8ca34830016e77f27a137bc0901efe")
sha256sums_armv6h=("ed5726e304be487608ba144246b07c30ffd8d78cac1bf3abbc35691fd4ea2378")

package() {
	tar -C "${pkgdir}" -xf "${srcdir}/data.tar.xz" --exclude=./usr/share/man/man1/qemu-debootstrap.1.gz ./usr/bin ./usr/share/man
}
