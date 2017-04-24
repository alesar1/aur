# Maintainer: Dan Beste <dan.ray.beste@gmail.com>
# Thanks to: Ainola for the base PKGBUILD (gog-undertale)

pkgname=gog-yooka-laylee
pkgver=2.0.0.1
pkgrel=1
pkgdesc="Yooka-Laylee is an all-new open-world platformer from key creative talent behind the Banjo-Kazooie and Donkey Kong Country games!"
url="http://www.playtonicgames.com/games/yooka-laylee/"
license=('custom')
arch=('i686' 'x86_64')
makedepends=('p7zip')
optdepends=('firejail: Automatically sandbox this application from your OS')
source=(
    "${pkgname}"
    "${pkgname}.desktop"
    "${pkgname}.profile"
    "gog://${pkgname//-/_}_${pkgver}.sh"
)
sha256sums=(
    '4e4c5428a1d929007fea2204b688a4dcd97a13c992b5f92a0c7866f11adc8adc'
    'eab3d609d3146cb69b32e9b9c894164323c3eab45628a33e9d1e6e75cd9ebbca'
    '45d542985620e05d6e60f52e3e9b348870f79b328cc118ff9bd5769e9fed5585'
    'e4aebe80ef947a0d4761770f618224a8bd7ba70e032d995c0ef05b1fb51f4451'
)
DLAGENTS=(
    "gog::/usr/bin/echo %u Download the GOG file to $PWD or set up a gog:// DLAGENT."
)

prepare() {
    cd "${srcdir}"

    7z x gog_yooka_laylee_2.0.0.1.sh -tzip -y
}

package(){
    cd "${srcdir}"

    # Install game
    install -d "${pkgdir}/opt/${pkgname}/"
    install -d "${pkgdir}/opt/${pkgname}/support"
    install -d "${pkgdir}/usr/bin/"
    cp -r "data/noarch/game/" "${pkgdir}/opt/${pkgname}/"
    
    find "${pkgdir}/opt/${pkgname}" -type d -exec chmod 755 {} \;
    install -Dm755 "data/noarch/start.sh" "${pkgdir}/opt/${pkgname}/"
    install -Dm755 data/noarch/support/*.{sh,shlib} -t  \
        "${pkgdir}/opt/${pkgname}/support"

    # Desktop integration
    install -Dm 644 "data/noarch/support/icon.png" \
        "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -Dm644 "data/noarch/docs/End User License Agreement.txt" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm 644 "${srcdir}/${pkgname}.desktop" \
        "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -Dm755 "${srcdir}/${pkgname}" \
        "${pkgdir}/usr/bin/${pkgname}"
}
