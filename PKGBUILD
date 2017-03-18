# Maintainer: Bilal ELmoussaoui <bil.elmoussaoui@gmail.com>

pkgname=pb-for-desktop
pkgrel=1
pkgver=4.0.6
_pkgver="v$pkgver"
pkgdesc="The missing Desktop application for Pushbullet"
url="https://github.com/sidneys/pb-for-desktop"
provides=('pb-for-desktop')
arch=('i686' 'x86_64')
license=('MIT')
makedepends=('unzip')
depends=('libnotify' 'gconf' 'libappindicator-gtk2' 'libappindicator-gtk3' 'libxtst' 'nss')
source=("${url}/releases/download/${_pkgver}/${pkgname}-${pkgver}.pacman")
sha256sums=('8ddc1f02e0ed7550fb277b08bfd21eded6ea5711a4025cfae9698f62ad40a9be')

package() {
    install -d "$pkgdir"/opt
    cp -R "$srcdir/opt/PB for Desktop" "$pkgdir/opt/"

    install -D -m644 "$srcdir/usr/share/applications/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    for icon_size in 16 24 32 48 64 96 128 256 512; do
        icon_dir="$pkgdir/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps"
        install -d "$icon_dir"
        install -m644 "$srcdir/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps/${pkgname}.png" "$icon_dir/${pkgname}.png"
    done

}
