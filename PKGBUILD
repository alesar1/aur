# Maintainer: Dawson Dias <thexerothermicsclerodermoid@gmail.com>

pkgname=flaresolverr-bin
_pkgname=flaresolverr
__pkgname=FlareSolverr
pkgver=2.2.6
pkgrel=1
pkgdesc='A proxy server to bypass Cloudflare protection'
arch=('x86_64')
url='https://github.com/FlareSolverr/FlareSolverr'
license=('MIT')
depends=('alsa-lib' 'at-spi2-atk' 'atk' 'dbus-glib' 'gtk3' 'libcups' 'libdrm' 'libxcomposite' 'libxcursor' 'libxdamage' 'libxi' 'libxrandr' 'libxss' 'libxtst' 'mesa' 'pango')
provides=('flaresolverr')
options=('!strip')
install='flaresolverr.install'
source=("https://github.com/$__pkgname/$__pkgname/releases/download/v$pkgver/$_pkgname-v$pkgver-linux-x64.zip"
        "flaresolverr.sysusers"
        "flaresolverr.tmpfiles"
        "flaresolverr.install")
sha512sums=('9a45e6ee710cb53779d1a7f8891923004c52a3a57622f68492e519cdce86b1f5521039d1e51ae721bf49b6c1b944dd10bbf069103b6c35fc8516f32ed3b497c9'
            '0423d10d964a187e5a153140597e7cee3a6112bf6569dfcda7848bfbce4e5660534db3bdbe4a4de9a63fbf0ecc2b874937afd94495691f76176243d2ac4b080d'
            'd4906b43f057019751869377cf953f2a406399b661d2d0217fbc56fdd29ab534ba71be1ba270e14adeedd743fbb0d7ca91a4593577615517f46e124a54de647e'
            'e12ca34e2f66524d15da36cdebea300ae061a16c8a4d7147ab0cea11cb70879d0d3061c9c852dec9593f348bc8507055f1868cfe754e2e5f92db4466ca3ec2a1')

package() {
    cd "${pkgdir}"

    install -dm755 "usr/bin"
    install -dm755 "opt/${_pkgname}"

    install -Dm644 "${srcdir}/${_pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
    rm "${srcdir}/${_pkgname}/LICENSE"

    install -Dm644 "${srcdir}/${_pkgname}/flaresolverr.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
    rm "${srcdir}/${_pkgname}/flaresolverr.service"

    cp -a "${srcdir}/${_pkgname}/"* "${pkgdir}/opt/${_pkgname}"

    ln -s "/opt/${_pkgname}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"

    install -Dm644 "${srcdir}/flaresolverr.sysusers" "${pkgdir}/usr/lib/sysusers.d/${_pkgname}.conf"
    install -Dm644 "${srcdir}/flaresolverr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${_pkgname}.conf"
}
