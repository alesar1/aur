# Maintainer: Evgeny Zinoviev (me@ch1p.com)

pkgname=vk-messenger
pkgver=3.10.0
pkgrel=1
pkgdesc="VK Messenger for Linux"
arch=('x86_64')
url="https://vk.com/messenger"
license=('custom')
depends=('alsa-lib' 'expat' 'gconf' 'gtk2' 'libgcrypt' 'libgnome-keyring' 'libnotify' 'libxss' 'libxtst' 'nss' 'xdg-utils')
optdepends=('gnome-keyring')
source=("vk-${pkgver}-${pkgrel}.zip::https://desktop.userapi.com/linux64/master/vk.zip")
sha256sums=('415e4a9c5734b7317d3942e0c73268d7a71b6a34b1c9ad5947a86db7e3658851')

package() {
    # Creating directory structure
    mkdir -p "${pkgdir}/usr/lib/vk"
    mkdir -p "${pkgdir}/usr/bin"
    mkdir -p "${pkgdir}/usr/share/applications"
    mkdir -p "${pkgdir}/usr/share/pixmaps"

    mv "${srcdir}/"* "${pkgdir}/usr/lib/vk"

    if [ -L "${pkgdir}/usr/lib/vk/vk.zip" ]; then
        rm "${pkgdir}/usr/lib/vk/vk.zip"
    fi
    
    # Create symlink to executable
    ln -s "../lib/vk/vk" "${pkgdir}/usr/bin/vk-messenger"

    # Copy resources
    cp "${startdir}/vk.desktop" "${pkgdir}/usr/share/applications"
    cp "${pkgdir}/usr/lib/vk/icon256.png" "${pkgdir}/usr/share/pixmaps/vk.png"

    # Patch package.json
    sed -i 's/"updates": 1/"updates": 0/g' "${pkgdir}/usr/lib/vk/resources/app/package.json"
    sed -i 's/"custom_install": 1/"custom_install": 0/g' "${pkgdir}/usr/lib/vk/resources/app/package.json"

    # Permission fix
    find "${pkgdir}" -type d -exec chmod 755 {} +
}
