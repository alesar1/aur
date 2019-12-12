# Maintainer: Moritz Poldrack <moritz at poldrack dot dev>
# Maintainer: Christopher A. Williamson
# Maintainer: Pascal Mathis <mail@pascalmathis.com>
pkgname=rambox-pro-bin
_pkgname=ramboxpro
pkgver=1.2.1
pkgrel=1
pkgdesc='Workspace browser to manage many web applications in one place'
arch=('x86_64')
url='https://rambox.pro/'
license=('custom')
depends=('alsa-lib' 'gconf' 'gtk2' 'libxss' 'libxtst' 'nss' 'python')
provides=('ramboxpro')
options=('!emptydirs')
# EULA file: 'html2text --body-width=80 https://rambox.pro/includes/eula.html'
source=("${_pkgname}-EULA"
        "${_pkgname}-${pkgver}.deb::https://github.com/ramboxapp/download/releases/download/v${pkgver}/RamboxPro-${pkgver}-linux-x64.deb")
sha256sums=('49caf20d36575fc2f8a4011049682885493428770f8cf2ae9297203ba50f7407'
            'c0656ffc27b7d38a7aaa6646675cba5a39aaac56918b94d851434e6476d4fed0')

build() {
    rm -rf "${srcdir}/root"
    mkdir -p "${srcdir}/root"
    bsdtar -xf 'data.tar.xz' -C "${srcdir}/root"
}

package() {
    install -d -m 0755 \
        "${pkgdir}/opt/${_pkgname}" \
        "${pkgdir}/usr/bin" \
        "${pkgdir}/usr/share/applications" \
        "${pkgdir}/usr/share/icons" \
        "${pkgdir}/usr/share/licenses/${pkgname}"

    cp -rp "${srcdir}/root/opt/RamboxPro/." "${pkgdir}/opt/${_pkgname}/."
    cp -rp "${srcdir}/root/usr/share/icons/." "${pkgdir}/usr/share/icons/."

    install -m 0644 "${srcdir}/${_pkgname}-EULA" "${pkgdir}/usr/share/licenses/${pkgname}/EULA"
    install -m 0644 "${srcdir}/root/usr/share/applications/ramboxpro.desktop" \
        "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

    ln -s "/opt/${_pkgname}/ramboxpro" "${pkgdir}/usr/bin/${_pkgname}"
    sed -i "s~/opt/RamboxPro/~/opt/${_pkgname}/~g" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
}
