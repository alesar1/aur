# Maintainer: Felipe Martin <me@fmartingr.com>

pkgname="synology-drive"
pkgver="3.2.0_13258"
pkgrel="1"
pkgdesc="Drive for PC, the desktop utility of the DSM add-on package, Drive, allows you to sync and share files owned by you or shared by others between a centralized Synology NAS and multiple client computers."
arch=('i686' 'x86_64')
url="https://www.synology.com"
license=('custom')
depends=('glibc' )
optdepends=('nautilus: For nautilus integration' )
conflicts=()
source=()
md5sums=()

source_i686=(https://global.download.synology.com/download/Utility/SynologyDriveClient/3.2.0-13258/Ubuntu/Installer/i686/synology-drive-client-13258.i686.deb)
md5sums_i686=('cb34a639d2dcaf02912f8cb08cf8e536')

source_x86_64=(https://global.download.synology.com/download/Utility/SynologyDriveClient/3.2.0-13258/Ubuntu/Installer/x86_64/synology-drive-client-13258.x86_64.deb)
md5sums_x86_64=('e220b81a00a39bb032315eabf30dccec')

package() {
	cd "${srcdir}"
	tar -xJf data.tar.xz -C "${pkgdir}"
	ls "${pkgdir}"
	install -Dm 644 "${pkgdir}"/opt/Synology/SynologyDrive/LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
