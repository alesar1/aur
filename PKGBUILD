# Maintainer: Sanpi <sanpi+aur@homecomputing.fr>
pkgname=rpcs3-bin
pkgver=0.0.6
_pkgbuild='7840-a43e7c17'
pkgrel=4
pkgdesc='Open-source Sony PlayStation 3 Emulator'
arch=('x86_64')
url='https://rpcs3.net/'
license=('GPL2')
depends=('glew2.0' 'hicolor-icon-theme' 'libpulse' 'ncurses5-compat-libs'
    'openal' 'qt5-declarative' 'vulkan-icd-loader')
makedepends=('p7zip')
options=('!strip')
replaces=('rpcs3')
provides=('rpcs3')
conflicts=('rpcs3')
source=("https://github.com/RPCS3/rpcs3-binaries-linux/releases/download/build-a43e7c172c724378187c9b78a3fb94f3bda5c4a3/rpcs3-v$pkgver-${_pkgbuild}_linux64.AppImage")
sha256sums=('f130e793b5436757fe2758fbc797ebcef79d7c44bd781b175b5b7b9aefabce91')

prepare()
{
    cd "$srcdir"

    7z x -y "$srcdir/rpcs3-v$pkgver-${_pkgbuild}_linux64.AppImage"
}

package()
{
    cd "$srcdir"

    install -D -m755 'usr/bin/rpcs3' "$pkgdir/usr/bin/rpcs3"
    install -D -m644 'usr/share/applications/rpcs3.desktop' "$pkgdir/usr/share/applications/rpcs3.desktop"
    install -D -m644 'usr/share/icons/hicolor/48x48/apps/rpcs3.png' "$pkgdir/usr/share/icons/hicolor/48x48/apps/rpcs3.png"
    install -D -m644 'usr/share/icons/hicolor/scalable/apps/rpcs3.svg' "$pkgdir/usr/share/icons/hicolor/scalable/apps/rpcs3.svg"
    install -D -m644 'usr/share/rpcs3/Icons/ui/right_stick.png' "$pkgdir/usr/share/rpcs3/Icons/ui/right_stick.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/start.png' "$pkgdir/usr/share/rpcs3/Icons/ui/start.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/R1.png' "$pkgdir/usr/share/rpcs3/Icons/ui/R1.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/square.png' "$pkgdir/usr/share/rpcs3/Icons/ui/square.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/new.png' "$pkgdir/usr/share/rpcs3/Icons/ui/new.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/triangle.png' "$pkgdir/usr/share/rpcs3/Icons/ui/triangle.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/dpad_up.png' "$pkgdir/usr/share/rpcs3/Icons/ui/dpad_up.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/save.png' "$pkgdir/usr/share/rpcs3/Icons/ui/save.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/L1.png' "$pkgdir/usr/share/rpcs3/Icons/ui/L1.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/select.png' "$pkgdir/usr/share/rpcs3/Icons/ui/select.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/dpad_right.png' "$pkgdir/usr/share/rpcs3/Icons/ui/dpad_right.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/left_stick.png' "$pkgdir/usr/share/rpcs3/Icons/ui/left_stick.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/R2.png' "$pkgdir/usr/share/rpcs3/Icons/ui/R2.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/L2.png' "$pkgdir/usr/share/rpcs3/Icons/ui/L2.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/circle.png' "$pkgdir/usr/share/rpcs3/Icons/ui/circle.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/dpad_down.png' "$pkgdir/usr/share/rpcs3/Icons/ui/dpad_down.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/cross.png' "$pkgdir/usr/share/rpcs3/Icons/ui/cross.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/fade_top.png' "$pkgdir/usr/share/rpcs3/Icons/ui/fade_top.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/dpad_left.png' "$pkgdir/usr/share/rpcs3/Icons/ui/dpad_left.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/dpad.png' "$pkgdir/usr/share/rpcs3/Icons/ui/dpad.png"
    install -D -m644 'usr/share/rpcs3/Icons/ui/fade_bottom.png' "$pkgdir/usr/share/rpcs3/Icons/ui/fade_bottom.png"
    install -D -m644 'usr/share/rpcs3/GuiConfigs/YoRHa-background.jpg' "$pkgdir/usr/share/rpcs3/GuiConfigs/YoRHa-background.jpg"
    install -D -m644 'usr/share/rpcs3/GuiConfigs/Classic (Bright).qss' "$pkgdir/usr/share/rpcs3/GuiConfigs/Classic (Bright).qss"
    install -D -m644 'usr/share/rpcs3/GuiConfigs/ModernBlue Theme by TheMitoSan.qss' "$pkgdir/usr/share/rpcs3/GuiConfigs/ModernBlue Theme by TheMitoSan.qss"
    install -D -m644 'usr/share/rpcs3/GuiConfigs/Kuroi (Dark) by Ani.qss' "$pkgdir/usr/share/rpcs3/GuiConfigs/Kuroi (Dark) by Ani.qss"
    install -D -m644 'usr/share/rpcs3/GuiConfigs/Darker Style by TheMitoSan.qss' "$pkgdir/usr/share/rpcs3/GuiConfigs/Darker Style by TheMitoSan.qss"
    install -D -m644 'usr/share/rpcs3/GuiConfigs/YoRHa by Ani.qss' "$pkgdir/usr/share/rpcs3/GuiConfigs/YoRHa by Ani.qss"
    install -D -m644 'usr/share/applications/rpcs3.desktop' "$pkgdir/usr/share/applications/rpcs3.desktop"
}
