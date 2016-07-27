# Maintainer: NicoHood <aur {at} nicohood {dot} de>
# Co-Maintainer: Christopher Loen <christopherloen at gmail dot com>

pkgname=arduino-git
pkgver=1.6.10.r0.g3db7ec2
pkgrel=1
pkgdesc="Arduino prototyping platform SDK"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/arduino/Arduino"
license=('GPL' 'LGPL')
depends=('gtk2' 'desktop-file-utils' 'shared-mime-info' 'java-runtime=8' 'avrdude')
makedepends=('java-environment=8' 'apache-ant' 'unzip')
options=(!strip staticlibs)
install="arduino.install"
provides=('arduino')
conflicts=('arduino' 'arduino-bin')
source=("${pkgname}::git+https://github.com/arduino/Arduino/#branch=master")
sha512sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "${srcdir}/${pkgname}/build"
	ant clean build
}

package() {
	cd "${srcdir}/${pkgname}/build/linux/work"

	install -dm755 "${pkgdir}/usr/bin"
	install -dm755 "${pkgdir}/usr/share/"{doc,icons/hicolor,applications,mime/packages}

	# Copy the whole SDK
	cp -a . "${pkgdir}/usr/share/arduino"

	# Create symlinks
	ln -s /usr/share/arduino/arduino "${pkgdir}/usr/bin/arduino"
	ln -s /usr/share/arduino/reference "${pkgdir}/usr/share/doc/arduino"

	# Fix avrdude (see https://github.com/arduino/Arduino/issues/5094)
	rm -f "${pkgdir}/usr/share/arduino/hardware/tools/avr/bin/avrdude"{,_bin}
	ln -s /usr/bin/avrdude "${pkgdir}/usr/share/arduino/hardware/tools/avr/bin/avrdude"

	# Install desktop icons (keep a symlink for the arduino binary)
	cp -a lib/icons/* "${pkgdir}/usr/share/icons/hicolor"
	rm -rf "${pkgdir}/usr/share/arduino/lib/icons"
	ln -s /usr/share/icons/hicolor "${pkgdir}/usr/share/arduino/lib/icons"

	# Create desktop file using existing template
	sed "s,<BINARY_LOCATION>,arduino %U,g;s,<ICON_NAME>,arduino,g" "lib/desktop.template" \
	> "${pkgdir}/usr/share/applications/arduino.desktop"

	# Install Arduino mime type
	ln -s /usr/share/arduino/lib/arduino-arduinoide.xml "${pkgdir}/usr/share/mime/packages/arduino.xml"
}
