# Maintainer: Eugene Zinoviev (me@ch1p.com)

pkgname=vk-messenger
pkgver=3.4.0
pkgrel=1
pkgdesc="VK Messenger for Linux"
arch=('x86_64')
url="https://vk.com/messenger"
license=('custom')
depends=('alsa-lib' 'expat' 'gconf' 'gtk2' 'libgcrypt' 'libgnome-keyring' 'libnotify' 'libxss' 'libxtst' 'nss' 'xdg-utils')
optdepends=('gnome-keyring')
source=("vk-${pkgver}-${pkgrel}.zip::https://desktop.userapi.com/linux64/master/vk.zip")
sha256sums=('ce97ced964db20c0aa0c2c5eeaa913340f52699d4bc787252c8feefe5a83c2e8')

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
