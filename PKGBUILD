# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

_pkgbase=amd-sfh-hid
pkgname="${_pkgbase}-dkms"
pkgver=4.1.4
pkgrel=1
pkgdesc="Refactored HID driver modules for the AMD Sensor Fusion Hub (DKMS)"
arch=('i686' 'x86_64')
url="https://github.com/conqp/${pkgname}"
license=('GPL2')
depends=('dkms')
source=("${url}/archive/${pkgver}.tar.gz"
        'dkms.conf')
sha256sums=('b4aed4ccf70135141beba141f06c1ccdea86a95a75a51ac177d7130b770271f9'
            'bc325cc6a2e01f8de499676c345962b95d681fcdc623e995a9c5ddfeb77227af')

package() {
	local SRC="${pkgname}-${pkgver}"
	local DEST="${pkgdir}/usr/src/${_pkgbase}-${pkgver}"

	install -dm 755 "${DEST}"
	cp -a "${SRC}"/* "${DEST}/"

	sed -e "s/@PKGNAME@/${_pkgbase}/" \
	    -e "s/@PKGVER@/${pkgver}/" \
	    dkms.conf > "${DEST}/dkms.conf"
}
