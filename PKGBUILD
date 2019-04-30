# Maintainer: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Lev Lybin <aur@devtrue.net>

pkgname=synology-cloud-station-drive
_iver=4437
_rver=4.3.1
pkgver=$_rver.$_iver
pkgrel=1
pkgdesc='An application which sync files between your computers and Synology NAS'
arch=('i686' 'x86_64')
url='https://www.synology.com/en-global/releaseNote/CloudStationDrive'
license=('custom')
optdepends=('nautilus: Nautilus integration')
source_i686=("https://global.download.synology.com/download/Tools/CloudStationDrive/$_rver-$_iver/Ubuntu/Installer/i686/synology-cloud-station-drive-$_iver.i686.deb")
md5sums_i686=('46587b7625c0858b4818ca3dc0da7fa6')
source_x86_64=("https://global.download.synology.com/download/Tools/CloudStationDrive/$_rver-$_iver/Ubuntu/Installer/x86_64/synology-cloud-station-drive-$_iver.x86_64.deb")
md5sums_x86_64=('16373d158e162bd03f90f2c9739b073d')

prepare() {
    cd "$srcdir"
    tar -xJf "$srcdir"/data.tar.xz
}

package() {
    cp -rp opt "$pkgdir"/opt

    install -Dm755 usr/lib/nautilus/extensions-3.0/libnautilus-cloud-extension.so "$pkgdir"/usr/lib/nautilus/extensions-3.0/libnautilus-cloud-extension.so
    install -Dm755 usr/bin/synology-cloud-station-drive "$pkgdir"/usr/bin/synology-cloud-station-drive
    install -Dm644 usr/share/applications/synology-cloud-station-drive.desktop "$pkgdir"/usr/share/applications/synology-cloud-station-drive.desktop

    install -Dm644 "$srcdir"/opt/Synology/CloudStation/LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
