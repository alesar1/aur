# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka
pkgver=1.0beta1
pkgrel=1
depends=('fontconfig' 'xorg-font-utils')
pkgdesc='Iosevka is a monospace coding typeface inspired by Pragmata Pro, M+ and PF DIN Mono. It is designed to have a narrow shape to be space efficient and compatible to CJK characters.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
source=("https://github.com/be5invis/Iosevka/archive/v1.0-beta1.zip"
        'https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE')
install=${pkgname}.install
sha256sums=('3d1b5da0e09f4261c814e61c546d791fb891add759e6b3c3112a5ca6d8ae874d'
            '1beea52b7cf6b8f5fa3120f3b6fc4bd5828037bdbe513624ea55100876654c18')

package() {
  cd ${srcdir}
  install -d ${pkgdir}/usr/share/fonts/TTF/
  install -m644 Iosevka-1.0-beta1/*.ttf ${pkgdir}/usr/share/fonts/TTF/
  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
