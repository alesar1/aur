# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka-cc-slab
pkgver=2.2.0
pkgrel=1
pkgdesc='A slender monospace typeface. Shape: default'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
depends=('fontconfig' 'xorg-font-utils')
conflicts=('ttf-iosevka-pack')
source=("https://github.com/be5invis/Iosevka/releases/download/v${pkgver}/08-iosevka-cc-slab-${pkgver}.zip"
        "https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE.md")
sha256sums=('d70074c75f5a31eb9d6887e6c44afeb0fa524f73a38edde8934453f152c2e076'
            'ecfd74a1d6749bf509cee122870da0186bccfae446e3f6bc5faff253577ab000')

package() {
    install -d ${pkgdir}/usr/share/fonts/TTF/
    install -m644 ${srcdir}/ttf/*.ttf ${pkgdir}/usr/share/fonts/TTF/
    install -D -m644 ${srcdir}/LICENSE.md ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md
}
