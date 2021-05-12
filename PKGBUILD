# Maintainer: Pippo Peppo <abc@gmx.ch>
# Contributor: Lev Lybin <aur@devtrue.net>
# Contributor: Nick Østergaard <oe.nick at gmail dot com>

pkgname=synology-assistant
pkgver=7.0.50029
_pkgver=7.0-50029
pkgrel=1
pkgdesc="Synology Assistant is a desktop utility that searches for Synology servers within the local area network. It allows you to search and connect to your Synology server or set up Wake on LAN (WOL)."
arch=('i686' 'x86_64')
url="https://www.synology.com/releaseNote/Assistant"
license=('unknown')
install=synology-assistant.install
depends=('qt5-base' 'libpng12')
source_x86_64=(https://global.download.synology.com/download/Utility/Assistant/${_pkgver}/Ubuntu/x86_64/synology-assistant_${_pkgver}_amd64.deb)
source_i686=(https://global.download.synology.com/download/Utility/Assistant/${_pkgver}/Ubuntu/i686/synology-assistant_${_pkgver}_i386.deb)
md5sums_i686=('ab67a4f4495db34a748448db7270c898')
md5sums_x86_64=('b5bbf2f0d7728167fcf165e86d8010a0')

prepare() {
    cd "${srcdir}"
    tar -zxf "${srcdir}/data.tar.gz"
}

package() {
    cp -rp opt "${pkgdir}/opt"

    mkdir -p "${pkgdir}/usr/bin"
    ln -sf /opt/Synology/SynologyAssistant/SynologyAssistant "${pkgdir}/usr/bin/synology-assistant"

    install -Dm644 usr/share/applications/synology-assistant.desktop "${pkgdir}/usr/share/applications/synology-assistant.desktop"
}
