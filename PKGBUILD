# Contributor: Linux Gamers <linuxgamers@protonmail.com>
_version=20220901-7da1dcdb5
pkgname=yuzu-mainline-bin
provides=('yuzu' 'yuzu-cmd')
conflicts=('yuzu' 'yuzu-git' 'yuzu-canary-git' 'yuzu-mainline-git')
pkgver=0.1153
pkgrel=1
pkgdesc="Nintendo Switch emulator - mainline branch"
arch=('x86_64')
url="https://github.com/yuzu-emu/yuzu-mainline"
license=('GPL2')
depends=('fuse2' 'libva' 'qt5-multimedia' 'hicolor-icon-theme')
optdepends=('qt5-wayland: for Wayland support')
options=(!strip)
source=("${url}/releases/download/mainline-${pkgver/./-}/yuzu-linux-${_version}.tar.xz"
        # icon and desktop from upstream not included in sources
        "yuzu.svg"
        "yuzu.desktop")
sha512sums=('0bf711580bab1c97825f6639eff70f3feba87800d74b57544a7cfdcdbb55dec87f31ff438b7dc1f62732108f80bd9041a3633cf7b68d40cd85f7d4935eb365af'
            '8e9f442436bd5f89a99c902960b51a3dd124ba17119422cca1ae792da0bcf3c757862bc88cb3d229b1f6a3b8b36c73f47f2c7266a11f91ebb38265777a2ba6b3'
            '5cb469f178e0a22f249240f8ce26027ba87ebf8b57fd584917c35eb51860a1bc49090d6abaa5d5dc1dded13f78236f15f28cd0e2697f9e509286cb573e1a20c2')
package() {
    install -Dm644 yuzu.desktop -t "$pkgdir/usr/share/applications"
    install -Dm644 yuzu.svg -t "$pkgdir/usr/share/icons/hicolor/scalable/apps"
    install -Dm755 yuzu-linux-mainline/yuzu-cmd -t "$pkgdir/usr/bin"
    install -Dm755 yuzu-linux-mainline/yuzu-mainline.AppImage "$pkgdir/usr/bin/yuzu"
}
