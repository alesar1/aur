# Current maintainer(s):
#   - Dan Beste <dan.ray.beste@gmail.com>
# Previously:
#   - N/A

# Current contributor(s):
#   - None
# Previously:
#   - N/A

# Notes:
#   + gog:// DLAGENT:
#       - A gog:// DLAGENT can be configured in /etc/makepkg.conf to
#         automatically pull game files from GOG.
#       - https://github.com/Sude-/lgogdownloader

pkgname='gog-hollow-knight'
pkgver=2.1.0.2
pkgrel=1
pkgdesc="Hollow Knight is a challenging 2D action-adventure. You’ll explore twisting caverns, battle tainted creatures and escape intricate traps, all to solve an ancient long-hidden mystery."
url='http://hollowknight.com/'
license=('custom')
groups=('games' 'gog')
arch=('x86_64')
source=(
    "${pkgname}"
    "${pkgname}.desktop"
    "file://${pkgname//-/_}_${pkgver}.sh"
)
sha256sums=(
    '5cd14be9e18be6277fc0daa39dd416d78d4e4445fe8998d3ddcf37a201a843b0'
    '8860a0daf52181f78711c2b1099d7a09a30ba09331c68e8aae71182a996a0acd'
    '43dc222d72979456296d1fc944cc7041758f13fa5e77a4d48c7f8772ddb95bb6'
)

package() { 
    cd "${srcdir}"
    
    install -d "${pkgdir}/opt/${pkgname}/"
    install -d "${pkgdir}/opt/${pkgname}/support/"
    install -d "${pkgdir}/usr/bin/"

    cp -r data/noarch/game/ "${pkgdir}/opt/${pkgname}/"
    find "${pkgdir}/opt/${pkgname}" -type d -exec chmod 755 {} \;

    install -D -m 755           \
        "${srcdir}/${pkgname}"  \
        "${pkgdir}/usr/bin/${pkgname}"
    install -D -m 755           \
        data/noarch/start.sh    \
        "${pkgdir}/opt/${pkgname}/"
    install -D -m 755                       \
        data/noarch/support/*.{sh,shlib} -t \
        "${pkgdir}/opt/${pkgname}/support/"
    install -D -m 644                                       \
        'data/noarch/docs/End User License Agreement.txt'   \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m 644                   \
        "data/noarch/support/icon.png"  \
        "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -D -m 644                   \
        "${srcdir}/${pkgname}.desktop"  \
        "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}
