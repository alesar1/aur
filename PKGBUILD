# Maintainer: Caesim404 <caesim404 at gmail dot com>

pkgname="yatqa"
_realpkgver="3.9.8.3d"
pkgver="3.9.8.3.d"
epoch="1"
pkgrel="1"
pkgdesc="Tool for managing TeamSpeak 3 servers and instances"
arch=("x86_64" "i686")
url="http://yat.qa/"
license=("custom")
depends=("wine")
makedepends=("p7zip" "icoutils")
install="yatqa.install"
source=("https://dl.yat.qa/stable/YaTQA-Setup_${_realpkgver}.exe"
        "yatqa"
        "yatqa.desktop"
        "yatqa.install"
        "LICENSE")
sha256sums=('19b3137dc43e3cf08ee98c3aabb41c136873c53b5df25e3a63334430ff5b49f3'
            '57fcd761e93b6f5d8bd6f4e354aafc9174ecdeea0fe39ea89dc68245b3c9ce02'
            '98c8f8313858f9fd7a00f75001effcf298b8b1bc43e142ac3e361016f5be9c6f'
            '45fe54d9f4655abb6774a01c961ee547507a92c2499645164f14ea5b1dc1a55a'
            '252bc5cb7f5378f218d45cd1c27d59815074087f2c20314d68b4226730d417ad')

build() {
    cd "${srcdir}"
    
    7z x -aos "YaTQA-Setup_${_realpkgver}.exe" yatqa.exe yatqa.ini
    
    wrestool -x -t 14 -o yatqa.ico yatqa.exe
    icotool -x -w 144 -o yatqa.png yatqa.ico
}

package() {
    cd "${srcdir}"
    
    install -Dm644 yatqa.exe "${pkgdir}/usr/share/yatqa/yatqa.exe"
    install -Dm644 yatqa.ini "${pkgdir}/usr/share/yatqa/yatqa.ini"
    
    install -Dm755 yatqa "${pkgdir}/usr/bin/yatqa"
    
    install -Dm644 yatqa.desktop "${pkgdir}/usr/share/applications/yatqa.desktop"
    install -Dm644 yatqa.png "${pkgdir}/usr/share/pixmaps/yatqa.png"
    
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/yatqa/LICENSE"
}
