# Maintainer: nomisge <nomisge @ live . de>
pkgname=microblocks
pkgver=0.3.7
pkgrel=1
pkgdesc="MicroBlocks is a new programming language inspired by Scratch that runs inside microcontroller boards such as the micro:bit, the NodeMCU and many Arduino boards."
arch=('x86_64')
url="http://microblocks.fun"
license=('MPL2')
groups=('')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("https://github.com/bromagosa/microblocks-site/releases/download/v$pkgver/ublocks-amd64.deb")
sha512sums=('176a947222568d0d5c4cbadd67a57cd3662ed4db22c9c397fa976693f6fe0b7915faf35bd7d6295f90545a9cbf40d43d152a8970770f316a7438af360bbba540')
package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	# Fix directories structure differencies
	cd "${pkgdir}"

	mkdir usr/bin 2> /dev/null; mv usr/local/bin/* usr/bin; rm -rf usr/local/bin
	sed -i s'#^Exec=/usr/local/bin/#Exec=/usr/bin/#g' "usr/share/applications/MicroBlocks.desktop"

	cd ..
}
