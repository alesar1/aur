# Maintainer: Lev Lybin <aur@devtrue.net>

pkgname=synology-hyper-backup-explorer
pkgver=0035
_sver=1.1.1
pkgrel=1
pkgdesc="A desktop tool for browsing, decrypting, and extracting different versions of backup data in Hyper Backup repositories"
arch=('x86_64')
url="https://www.synology.com/en-global/releaseNote/HyperBackupExplorer"
license=('unknown')

source_x86_64=(https://global.download.synology.com/download/Tools/HyperBackupExplorer/${_sver}-${pkgver}/Linux/x86_64/HyperBackupExplorer-${_sver}-${pkgver}-linux.tar.bz2)
md5sums_x86_64=('a607c19ecb8fac132e1865e03f5dad8e')

prepare() {
    cd "${srcdir}"
}

package() {
    mkdir -p "${pkgdir}"/opt/Synology/HyperBackupExplorer/{platforms,platformthemes,lib,help}
    install -Dm755 HyperBackupExplorer "${pkgdir}/opt/Synology/HyperBackupExplorer/HyperBackupExplorer"
    install -t "${pkgdir}/opt/Synology/HyperBackupExplorer/platforms" platforms/*.so
    install -t "${pkgdir}/opt/Synology/HyperBackupExplorer/platformthemes" platformthemes/*.so
    install -t "${pkgdir}/opt/Synology/HyperBackupExplorer/lib" lib/*.so.*
    cp -r help/* "${pkgdir}/opt/Synology/HyperBackupExplorer/help"

    mkdir -p "${pkgdir}/usr/bin"
    ln -sf /opt/Synology/HyperBackupExplorer/HyperBackupExplorer "${pkgdir}/usr/bin/synology-hyper-backup-explorer"
}
