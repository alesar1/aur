# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka
pkgver=1.12.1
pkgrel=1
pkgdesc='A slender monospace sans-serif and slab-serif typeface inspired by Pragmata Pro, M+ and PF DIN Mono.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
depends=('fontconfig' 'xorg-font-utils')
conflicts=('ttf-iosevka-hooky' 'ttf-iosevka-zshaped')
source=("https://github.com/be5invis/Iosevka/releases/download/v${pkgver}/01-iosevka-${pkgver}.zip"
        "https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE.md")
sha256sums=('5c907af06ae949889f7971e679009e4d869b3ed6a38c8db2eb5dfb01ea9bfcc0'
            '6def40494d348d87c383513bab0979ba4ce26ad96249d58df04cf811f866c63f')

package() {
  cd ${srcdir}
  install -d ${pkgdir}/usr/share/fonts/TTF/
  install -m644 *.ttf ${pkgdir}/usr/share/fonts/TTF/
  install -D -m644 LICENSE.md ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md
}
