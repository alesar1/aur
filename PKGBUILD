# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka-term-ss11
pkgver=2.2.1
pkgrel=2
pkgdesc='A slender monospace typeface. Shape: X Windows Fixed'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
depends=('fontconfig' 'xorg-font-utils')
source=("https://github.com/be5invis/Iosevka/releases/download/v${pkgver}/iosevka-term-ss11-${pkgver}.zip"
        "${pkgname}-${pkgver}-${pkgrel}-LICENSE.md::https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE.md")
sha256sums=('85098f884b15ea956d112548e12cbf5744aed409d001a41a0b417f05afd0b014'
            'ecfd74a1d6749bf509cee122870da0186bccfae446e3f6bc5faff253577ab000')

package() {
    install -d ${pkgdir}/usr/share/fonts/${pkgname}/
    install -m644 ${srcdir}/ttf/*.ttf ${pkgdir}/usr/share/fonts/${pkgname}/
    install -D -m644 ${pkgname}-${pkgver}-${pkgrel}-LICENSE.md ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md
}
