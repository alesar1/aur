# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

_pkgbase=amd-sfh-hid
pkgname="${_pkgbase}-dkms"
pkgver=2.1.3
pkgrel=2
pkgdesc="Experimental HID driver modules for the AMD Sensor Fusion Hub (DKMS)"
arch=('i686' 'x86_64')
url="https://github.com/conqp/linux.git"
license=('GPL2')
depends=('dkms')
makedepends=('git')
source=("linux-sfh::git+${url}#tag=${_pkgbase}-${pkgver}"
        'dkms.conf')
sha256sums=('SKIP'
            '18630528fbfc741113082bd6cf11da6d7ce430314b4cd3d56e0e7a3b26866505')

package() {
	local DEST="${pkgdir}/usr/src/${_pkgbase}-${pkgver}"

	install -dm 755 "${DEST}"

	for file in linux-sfh/drivers/hid/amd-sfh-hid/*; do
		install -m 644 "${file}" "${DEST}"
	done

	# Copy dkms.conf
	install -m 644 dkms.conf "${DEST}"

	# Set name and version
	sed -e "s/@PKGVER@/${pkgver}/" -i "${DEST}/dkms.conf"
}
