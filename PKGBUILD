# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka-term-ss11
pkgver=1.13.1
pkgrel=1
pkgdesc='A slender monospace typeface. Shape: X Windows Fixed.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
depends=('fontconfig' 'xorg-font-utils')
conflicts=('ttf-iosevka-pack'
           'ttf-iosevka-term'
           'ttf-iosevka-term-ss01'
           'ttf-iosevka-term-ss02'
           'ttf-iosevka-term-ss03'
           'ttf-iosevka-term-ss04'
           'ttf-iosevka-term-ss05'
           'ttf-iosevka-term-ss06'
           'ttf-iosevka-term-ss07'
           'ttf-iosevka-term-ss08'
           'ttf-iosevka-term-ss09'
           'ttf-iosevka-term-ss10')
source=("https://github.com/be5invis/Iosevka/releases/download/v${pkgver}/iosevka-term-ss11-${pkgver}.zip"
        "https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE.md")
sha256sums=('60be4b555fffdadb4f397fb6f37a2cf5fd907f711231c32aa9d568b679faecbb'
            'a7a0e1da98ab1bae99a1f246f45e51720e0cc13a53b4a5b0692f64991d2191af')

package() {
  cd ${srcdir}
  install -d ${pkgdir}/usr/share/fonts/TTF/
  install -m644 ttf/*.ttf ${pkgdir}/usr/share/fonts/TTF/
  install -D -m644 LICENSE.md ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md
}
