# Maintainer: Eugene Zinoviev (me@ch1p.com)

pkgname=vk-messenger
pkgver=3.1.0
pkgrel=1
pkgdesc="VK Messenger for Linux"
arch=('x86_64')
url="https://vk.com/messenger"
license=('custom')
depends=('alsa-lib' 'expat' 'gconf' 'gtk2' 'libgcrypt' 'libgnome-keyring' 'libnotify' 'libxss' 'libxtst' 'nss' 'xdg-utils')
optdepends=('gnome-keyring')
source=("vk-${pkgver}-${pkgrel}.zip::https://desktop.userapi.com/linux64/master/vk.zip")
sha256sums=('8146cff575180ad731e5e2aa60d5212a8b808d4982f2c4def188692a9ec029f3')

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
    sed -i '/custom_install/d' "${pkgdir}/usr/lib/vk/resources/app/package.json"

    # Permission fix
    find "${pkgdir}" -type d -exec chmod 755 {} +
}
