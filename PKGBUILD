#Maintainer: Plague-doctor <plague <at>> privacyrequired <<dot>> com >

PN=Cyberfox
pkgname=cyberfox
pkgver=44.0
pkgrel=1
pkgdesc="Fast and privacy oriented fork of Mozilla Firefox"
arch=('x86_64')
url="https://8pecxstudios.com/"
license=('GPL')
depends=('gtk2' 'libxt' 'dbus-glib' 'alsa-lib' 'hicolor-icon-theme' 'nss>=3.14.1' )
source=("${pkgname}.desktop"
        "http://downloads.sourceforge.net/project/cyberfox/Zipped%20Format/${PN}-$pkgver.en-US.linux-${arch}.tar.bz2")
md5sums=('9bfb5aaced348dd7db8c2c62cbc2150d'
         '2d2073ecb9633ba3cd1f3aaa6cb7d5ab')
package() {
    install -d "$pkgdir"/{usr/bin,opt}
    mv "${PN}" "${pkgdir}/opt/${pkgname}"
    ln -s "/opt/${pkgname}/${PN}" "${pkgdir}/usr/bin/${pkgname}"
    install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -Dm644 "${pkgdir}/opt/${pkgname}/browser/icons/mozicon128.png" \
                   "${pkgdir}/usr/share/pixmaps/${pkgname}-icon.png"
}
