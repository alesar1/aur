# Maintainer: Dan Beste <dan.ray.beste@gmail.com>
# Thanks to: Ainola for the base PKGBUILD (gog-undertale)

# All dependencies are included with the gog_owlboy_$version.sh file.
# For good measure I was able to track all but 2 down:
#   libCSteamworks - ??? Not entirely sure what this provides...
#   libsteam_api - ??? Not entirely sure what this provides...

pkgname='gog-stardew-valley'
pkgver=2.4.0.5
pkgrel=1
pkgdesc='You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life."
url="http://stardewvalley.net/'
license=('custom')
arch=('i686' 'x86_64')
optdepends=(
    'firejail: Automatically sandbox this application from your OS'
)
source=(
    "${pkgname}"
    "${pkgname}.desktop"
    "${pkgname}.profile"
    "gog://${pkgname//-/_}_${pkgver}.sh"
)
sha256sums=(
    '7e03458fab2b426cce514a42663e56efd33d072bd319f513a5c8bdf7f4e09905'
    'ca0fe151f73f5e8b594b226e1b0539655a2d95a7848eb0e43961cb6daa0de2ff'
    'ce77054c463d2ce47c480a6ede84d8410cbcdc12c45518f530b84aaed042eddf'
    'e639fda040a54b1778e5956ebfb3506b36a2db29988ec7e2d9710176144f9f67'
)
DLAGENTS+=(
    "gog::/usr/bin/echo %u Download the GOG file to ${PWD} or set up a gog:// DLAGENT."
)

package() {
    # Install game
    install -d "${pkgdir}/opt/${pkgname}/"
    install -d "${pkgdir}/opt/${pkgname}/support"
    install -d "${pkgdir}/usr/bin/"
    cp -r "data/noarch/game/" "${pkgdir}/opt/${pkgname}/"

    # Desktop integration
    find "${pkgdir}/opt/${pkgname}" -type d -exec chmod 755 {} \;
    install -Dm 755             \
        data/noarch/start.sh    \
        "${pkgdir}/opt/${pkgname}/"
    install -Dm 755                         \
        data/noarch/support/*.{sh,shlib} -t \
        "${pkgdir}/opt/${pkgname}/support"

    # Desktop integration
    install -Dm 644                     \
        data/noarch/support/icon.png    \
        "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -Dm 644                                         \
        'data/noarch/docs/End User License Agreement.txt'   \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm 644                     \
        "${srcdir}/${pkgname}.desktop"  \
        "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -Dm 755             \
        "${srcdir}/${pkgname}"  \
        "${pkgdir}/usr/bin/${pkgname}"
}
