# Contributor: Linux Gamers <linuxgamers@protonmail.com>
_version=20210822-74e96d817
pkgname=yuzu-mainline-bin
provides=('yuzu' 'yuzu-cmd')
conflicts=('yuzu-git' 'yuzu-canary-git' 'yuzu-mainline-git')
pkgver=0.724
pkgrel=1
pkgdesc="Nintendo Switch emulator - mainline branch"
arch=('x86_64')
url="https://github.com/yuzu-emu/yuzu-mainline"
license=('GPL2')
depends=('qt5-base' 'ffmpeg')
optdepends=('qt5-wayland: for Wayland support')
source=("${url}/releases/download/mainline-${pkgver/./-}/yuzu-linux-${_version}.tar.xz"
        # icon and desktop from upstream not included in sources
        "yuzu.svg"
        "yuzu.desktop")
sha512sums=('520a91657de932dc21074ca6b9e3220d006b694a2db35a50c27eccc6a744089627f3da047ee633ce3ea15fa43664a6d99d63dbcd3018eca20aad1109f4ff13af'
            '8e9f442436bd5f89a99c902960b51a3dd124ba17119422cca1ae792da0bcf3c757862bc88cb3d229b1f6a3b8b36c73f47f2c7266a11f91ebb38265777a2ba6b3'
            '0b2383b87abbb80a26a7926b5b64121ec0399832aee474ebfdb9f2b001fee6cf4b90d0a8625028f05273e95e2c94f692291a98d769fac5a1f2ad598e168811a1')
package() {
    install -Dm644 yuzu.desktop -t "$pkgdir/usr/share/applications"
    install -Dm644 yuzu.svg -t "$pkgdir/usr/share/icons/hicolor/scalable/apps"
    install -Dm755 yuzu-linux-${_version}/yuzu{,-cmd} -t "$pkgdir/usr/bin"
}
