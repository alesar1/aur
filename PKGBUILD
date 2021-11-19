# Maintainer: ZhangHua <zhanghuadedn at gmail dot com>
# Maintainer: Clansty <i at gao4 dot pw>
pkgname=("icalingua-git" "icalingua-electron-git")
pkgver=2.4.3
pkgrel=1
pkgdesc='A Linux client for QQ and more'
license=('GPL')
depends=('ffmpeg' 'libappindicator-gtk3')
makedepends=('yarn' 'git')
optdepends=('mongodb-bin: Provides storage'
            'redis: Provides storage')
arch=('aarch64' 'x86_64' 'i686')
url="https://github.com/Icalingua/Icalingua"
provides=('electron-qq' 'icalingua')
conflicts=('electron-qq' 'icalingua')
replaces=('electron-qq')
source=("git+${url}")
sha256sums=('SKIP')

pkgver(){
    cd "${srcdir}/Icalingua"
    git describe --tags | sed "s/v//;s/-/_/g"
}
prepare(){
    cd "${srcdir}/Icalingua/icalingua"
    yarn install
}
build(){
    cd "${srcdir}/Icalingua/icalingua"
    yarn run build:dir
}
package_icalingua-git(){
    conflicts=("icalingua-electron")
    case ${CARCH} in
        "x86_64")
            _arch="-";;
        "aarch64")
            _arch="-arm64-";;
        "i686")
            _arch="-ia32-";;
        "*")
            _arch="-${CARCH}-";;
    esac
    mkdir -p "${pkgdir}/opt/icalingua"
    mkdir -p "${pkgdir}/usr/bin"
    cd "${srcdir}/Icalingua/icalingua"
    cp -a build/linux${_arch}unpacked/* "${pkgdir}/opt/icalingua"
    cd "${srcdir}/Icalingua/pkgres"
    install -Dm644 512x512.png "${pkgdir}/usr/share/icons/hicolor/512x512/apps/icalingua.png"
    install -Dm644 icalingua.desktop "${pkgdir}/usr/share/applications/icalingua.desktop"
    ln -s "/opt/icalingua/icalingua" "${pkgdir}/usr/bin/icalingua"
}
package_icalingua-electron-git(){
    conflicts=("icalingua")
    provides=("icalingua-electron" "electron-qq")
    depends+=('electron13')
    pkgdesc='A Linux client for QQ and more with system electron'
    case ${CARCH} in
        "x86_64")
            _arch="-";;
        "aarch64")
            _arch="-arm64-";;
        "i686")
            _arch="-ia32-";;
        "*")
            _arch="-${CARCH}-";;
    esac
    mkdir -p "${pkgdir}/usr/share/icalingua"
    mkdir -p "${pkgdir}/usr/bin"
    cd "${srcdir}/Icalingua/icalingua/build/linux${_arch}unpacked"
    install -Dm644 "resources/app.asar" "${pkgdir}/usr/share/icalingua/app.asar"
    cd "${srcdir}/Icalingua/pkgres"
    install -Dm644 512x512.png "${pkgdir}/usr/share/icons/hicolor/512x512/apps/icalingua.png"
    install -Dm644 icalingua.desktop "${pkgdir}/usr/share/applications/icalingua.desktop"
    install -Dm755 icalingua "${pkgdir}/usr/bin/icalingua"
}
