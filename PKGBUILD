# Maintainer: Felipe Martin <me@fmartingr.com>

pkgname="synology-drive"
pkgver="3.1.0_12923"
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

source_i686=(https://global.download.synology.com/download/Utility/SynologyDriveClient/3.1.0-12923/Ubuntu/Installer/i686/synology-drive-client-12923.i686.deb)
md5sums_i686=('2b9ccaeb02b70457f6714f6a94526553')

source_x86_64=(https://global.download.synology.com/download/Utility/SynologyDriveClient/3.1.0-12923/Ubuntu/Installer/x86_64/synology-drive-client-12923.x86_64.deb)
md5sums_x86_64=('6381889cd48f13a18ae60e7c2ca46df7')

package() {
	cd "${srcdir}"
	tar -xJf data.tar.xz -C "${pkgdir}"
	ls "${pkgdir}"
	install -Dm 644 "${pkgdir}"/opt/Synology/SynologyDrive/LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
