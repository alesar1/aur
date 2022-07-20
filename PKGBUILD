# Contributor: FabioLolix
# Contributor: netroy
# Contributor: SuperNinja_4965

pkgname=arduino-ide-beta-bin
_pkgver=2.0.0-rc9
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="Arduino prototyping platform IDE, rewrite based on the Theia IDE framework"
arch=(x86_64)
url="https://github.com/arduino/arduino-ide"
license=(AGPL3)
depends=(libxkbfile libxss nss libsecret git)
optdepends=('libusb: Needed for some libraries or boards'
            'usbutils: Needed for stm32 boards using st-link'
            'libusb-compat: Needed for the `micronucleus` cli utility'
            'python-pyserial: Needed for esptool')
makedepends=(gendesk)
provides=(arduino-ide)
conflicts=(arduino-ide)
install=arduino-ide.install
options=(!strip)
source=("https://downloads.arduino.cc/arduino-ide/arduino-ide_${_pkgver}_Linux_64bit.zip"
        "https://www.arduino.cc/wiki/370832ed4114dd35d498f2f449b4781e/arduino.svg")
sha256sums=('f6277b7fe3089780d2d57ba6347fbd404f71158d59072434d82519e9e71f0c2f'
            '4137981bcb4057c2e0092f22faea287767f102e0b48497d22cd55e8d6988e4ac')

prepare() {
	gendesk -f --pkgname arduino-ide --name 'Arduino IDE' --pkgdesc ${pkgdesc} --genericname 'Arduino IDE' --mimetypes 'text/x-arduino' --categories 'Development;IDE;Electronics' --custom 'StartupWMClass=Arduino IDE' --comment 'Open-source electronics prototyping platform v2'
}

package() {
	install -dm755 "$pkgdir/opt/"
	mv "arduino-ide_${_pkgver}_Linux_64bit" "arduino-ide"
	chmod -R 755 "arduino-ide"
	cp -r "arduino-ide" "$pkgdir/opt/arduino-ide"
	install -dm755 "$pkgdir/usr/bin"
	ln -s "/opt/arduino-ide/arduino-ide" "$pkgdir/usr/bin/arduino-ide"
	install -Dm644 "arduino-ide.desktop" "$pkgdir/usr/share/applications/arduino-ide.desktop"
	install -Dm644 "arduino.svg" "$pkgdir/usr/share/pixmaps/arduino-ide.svg"
}
