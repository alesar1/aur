# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka-type-slab
pkgver=1.13.2
pkgrel=1
pkgdesc='A slender monospace typeface. Shape: default.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
depends=('fontconfig' 'xorg-font-utils')
conflicts=('ttf-iosevka-pack')
source=("https://github.com/be5invis/Iosevka/releases/download/v${pkgver}/07-iosevka-type-slab-${pkgver}.zip"
        "https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE.md")
sha256sums=('32c5d83843f60a1d97691b86df5cb4a7f4fa1179aeef9a4b592cba8aa08e4e97'
            'a7a0e1da98ab1bae99a1f246f45e51720e0cc13a53b4a5b0692f64991d2191af')

package() {
    install -d ${pkgdir}/usr/share/fonts/TTF/
    install -m644 ${srcdir}/ttf/*.ttf ${pkgdir}/usr/share/fonts/TTF/
    install -D -m644 ${srcdir}/LICENSE.md ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md
}
