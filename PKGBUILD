# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka
pkgver=1.0beta8
pkgrel=1
depends=('fontconfig' 'xorg-font-utils')
pkgdesc='Iosevka is a monospace coding typeface inspired by Pragmata Pro, M+ and PF DIN Mono. It is designed to have a narrow shape to be space efficient and compatible to CJK characters.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
source=("https://github.com/be5invis/Iosevka/archive/v1.0-beta8.zip"
        'https://raw.githubusercontent.com/be5invis/Iosevka/master/LICENSE')
install=${pkgname}.install
sha256sums=('02d123efa2126d62ca90909771014f07b0c3268ad5a1cee57bfb12947ce11dff'
            '79e60eb609efc006ca2a552d998efb1675262d4cae848244a3e2e61df0894b0c')

package() {
  cd ${srcdir}
  install -d ${pkgdir}/usr/share/fonts/TTF/
  install -m644 Iosevka-1.0-beta8/*.ttf ${pkgdir}/usr/share/fonts/TTF/
  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
