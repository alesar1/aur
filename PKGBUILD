# Maintainer: zoe <chp321 [at] gmail [dot] com>

pkgname=synology-cloud-station-backup
pkgver=4437
_sver=4.3.1
pkgrel=1
pkgdesc="A backup service that allows you to back up your files from multiple client computers to a centralized Synology NAS"
arch=('i686' 'x86_64')
url="https://www.synology.com/en-global/releaseNote/CloudStationBackup"
license=('unknown')
install=synology-cloud-station-backup.install

source_x86_64=(https://global.download.synology.com/download/Tools/CloudStationBackup/${_sver}-${pkgver}/Ubuntu/Installer/x86_64/synology-cloud-station-backup-${pkgver}.x86_64.deb)
md5sums_x86_64=('8d55f412f2f71ab7ce279e1cab45c804')

source_i686=(https://global.download.synology.com/download/Tools/CloudStationBackup/${_sver}-${pkgver}/Ubuntu/Installer/i686/synology-cloud-station-backup-${pkgver}.i686.deb)
md5sums_i686=('ad5e5689e30bf842af68e24faba64ea4')

prepare() {
    cd "${srcdir}"
    tar -Jxf "${srcdir}/data.tar.xz"
}

package() {
    cp -rp opt "${pkgdir}/opt"

    install -Dm755 usr/bin/synology-cloud-station-backup "${pkgdir}/usr/bin/synology-cloud-station-backup"
    install -Dm644 usr/share/applications/synology-cloud-station-backup.desktop "${pkgdir}/usr/share/applications/synology-cloud-station-backup.desktop"
}
