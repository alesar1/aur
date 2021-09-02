# Maintainer: Alynx Zhou <alynx.zhou@gmail.com>
pkgname=gnome-shell-extension-net-speed
pkgver=1
pkgrel=1
pkgdesc="Show current net speed on panel."
arch=('any')
url="https://github.com/AlynxZhou/gnome-shell-extension-net-speed"
license=('GPL')
depends=('gnome-shell')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha512sums=('dc0563051914ab93ddfcc9d8d80321392e52b0603247cbe3690f98c160098f2f3d28a6fc74fe1af1c09344b57d11b0e8b81a2c336ae44a753b9ce1d5bcd113c4')

package() {
    _uuid="netspeed@alynx.one"

    install -d "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}"
    cd "${srcdir}/${pkgname}-${pkgver}"
    cp -a * "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}"
}
