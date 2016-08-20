# Maintainer: NicoHood <aur {at} nicohood {dot} de>

pkgname=sane-epson-perfection-firmware
pkgver=1.0
pkgrel=1
pkgdesc="Firmware binaries for Epson Perfection 1670/2480/2580/3490/3590"
arch=('any')
url="http://www.epson.com/cgi-bin/Store/support/SupportIndex.jsp"
license=('Copyright© 2000 - 2016 Epson America, Inc.')
depends=('')
makedepends=('cabextract')
optdepends=('sane: scanner backend')
options=(!strip staticlibs)
install="sane-epson-perfection-firmware.install"
source=( #"https://ftp.epson.com/drivers/epson12699.exe" # 1670 - esfw30.bin (checksum differs from download below)
		"https://ftp.epson.com/drivers/epson12204.exe" # 2480/2580/(1670) - esfw41.bin, (esfw30.bin)
        "https://ftp.epson.com/drivers/epson13829.exe" # 3490/3590 - esfw52.bin
		)
# Alternative firmware sources:
# Installation cd
# https://wiki.ubuntuusers.de/Scanner/Epson_Perfection/
# https://wiki.ubuntuusers.de/Scanner/Epson_Perfection/esfw30.bin/
# http://esupport.epson-europe.com/SupportHome.aspx
noextract=("${source[@]##*/}")
sha512sums=('ed7ebb87ecb1d5fffa516c119e71b540a2490d81604e18e721026f81f83a824b8c6224c03ae9f9dc618e10180f3d4734dad5f05f3444a61cfac6342b29694fda'
            'e4ac06cfd8f982758e690ee96f34b6e9d5f5fd6a15d70b7f60bef87d5f8afdc9ca825afed6e7aa106ee172afade0b1b1e5f2f779dd8828778ff6b380389f2a7f')

prepare() {
	# Extract all firmware binaries from .cab sources
	for file in "${source[@]##*/}"
	do
		bsdtar xf "${file}" ModUsd.cab
		cabextract ModUsd.cab -F "esfw*.bin" -L
	done
}

package() {
	install -Dm644 -t "${pkgdir}/usr/share/sane/snapscan/" ${srcdir}/esfw*.bin
}
