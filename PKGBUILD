# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka-zshaped
pkgver=1.8.5
pkgrel=1
pkgdesc='A slender monospace sans-serif and slab-serif typeface inspired by Pragmata Pro, M+ and PF DIN Mono.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
depends=('fontconfig' 'xorg-font-utils')
conflicts=('ttf-iosevka' 'ttf-iosevka-hooky')
install=${pkgname}.install
source=("https://github.com/be5invis/Iosevka/releases/download/v${pkgver}/09.iosevka-zshaped-${pkgver}.zip"
        'https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE')
sha256sums=('2a8a02bac0f42cc4e1d69877c74a998e14363d0e5af96622f2e218f829a1b97c'
            'f552299cd7287931e62c90eb7dd0a63c29ebd434f92925c2dd3781983aec4338')

package() {
  cd ${srcdir}
  install -d ${pkgdir}/usr/share/fonts/TTF/
  install -m644 *.ttf ${pkgdir}/usr/share/fonts/TTF/
  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
