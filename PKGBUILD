# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka-term-zshaped
pkgver=1.9.0
pkgrel=1
pkgdesc='A slender monospace sans-serif and slab-serif typeface inspired by Pragmata Pro, M+ and PF DIN Mono.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
depends=('fontconfig' 'xorg-font-utils')
conflicts=('ttf-iosevka-term' 'ttf-iosevka-term-hooky')
install=${pkgname}.install
source=("https://github.com/be5invis/Iosevka/releases/download/v${pkgver}/10.iosevka-term-zshaped-${pkgver}.zip"
        "https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE.md")
sha256sums=('d11cc44e2c8dd98c0a7bab392c4163569b89650bb31ece10b32b2f3a5a3b1135'
            '1a87755db1a409859006a2472f6038f5e19d1f3a590daf4a92cbe51e0ac1e41a')

package() {
  cd ${srcdir}
  install -d ${pkgdir}/usr/share/fonts/TTF/
  install -m644 *.ttf ${pkgdir}/usr/share/fonts/TTF/
  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
