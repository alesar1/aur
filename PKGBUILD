# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>
# Contributor: peace4all <markspost at rocketmail dot com>

pkgname=unified-remote-server
pkgver=3.3.0.724
pkgrel=1
pkgdesc="Unified Remote Server"
arch=('x86_64')
url="http://www.unifiedremote.com/"
depends=('libxext' 'libx11' 'bluez-libs')
optdepends=('bluez' 'bluez-utils')
license=('freeware')
install=$pkgname.install
source=("http://www.unifiedremote.com/static/builds/server/linux-x64/724/urserver-$pkgver.deb" "urserver.service")
sha256sums=('d088e2938b2f015932870e116678db2d977f2a7c8452c5ad65af75bac418a9f5' 'ca049fc2e6b08276bf22b262577feca3fb4f83bef95e8f95a95d16b8d59fd107' )

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

