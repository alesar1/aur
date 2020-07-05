# Maintainer: JunYoung Gwak <aur@jgwak.com>

pkgname=ttf-kopub
pkgver=2.0
pkgrel=2
pkgdesc="KoPub TrueType Korean fonts."
arch=('any')
license=('custom')
url="http://www.kopus.org/Biz/electronic/Font2.aspx"
makedepends=('fontconfig' 'xorg-mkfontdir' 'xorg-mkfontscale')
source=('http://www.kopus.org/Download_font.aspx?font_id=3&name=KOPUB2.0_TTF_FONTS.zip'
        'LICENSE::http://www.kopus.org/Download/%EC%84%9C%EC%B2%B4_%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4.pdf')
md5sums=('059c62392189d5de34cc6ba4831d856c'
         'd854e69fc19a8254e6677178a3018185')

package() {
  install -dm 755 $pkgdir/usr/share/fonts/TTF
  install -m 644 $srcdir/*.ttf $pkgdir/usr/share/fonts/TTF
  install -Dm 644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE.pdf
}
