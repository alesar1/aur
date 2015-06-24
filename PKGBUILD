# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>
# Contributor: peace4all <markspost at rocketmail dot com>

pkgname=unified-remote-server
pkgver=3.2.5.706
pkgrel=1
pkgdesc="Unified Remote Server"
arch=('x86_64')
url="http://www.unifiedremote.com/"
depends=('libxext' 'libx11' 'bluez-libs')
optdepends=('bluez' 'bluez-utils')
license=('freeware')
install=$pkgname.install
source=("http://www.unifiedremote.com/static/builds/server/linux-x64/703/urserver-$pkgver.deb" "urserver.service")
sha256sums=('9469f0ad046e0a2cd3840a8b43a0b3c347cc6b263a7514344cafb39ba7ecbfc1' 'ca049fc2e6b08276bf22b262577feca3fb4f83bef95e8f95a95d16b8d59fd107' )

package() {
	cd ${srcdir}

	# decompress data
	tar zxf data.tar.gz

	# fix and revert desktop file to old behaviour
	sed -i -e '9,24d;26d' $(find . -name 'urserver.desktop')

	# install folders
	mkdir -p ${pkgdir}/{opt,usr}
	cp -r {opt,usr} "${pkgdir}/"

	# clean up permissions
	find "${pkgdir}" -type d | xargs -I {} chmod -R 755 "{}"
	find "${pkgdir}" -type f | xargs -I {} chmod -R 644 "{}"
	chmod 755 "${pkgdir}/opt/urserver/urserver"
	chmod 755 "${pkgdir}/opt/urserver/urserver-start"
	chmod 755 "${pkgdir}/opt/urserver/urserver-stop"
	
	# add systemd service
        install -Dm644 "urserver.service" "$pkgdir/usr/lib/systemd/system/urserver.service"
}

