# Maintainer: Jesús Castro <x51v4n@gmail.com>
pkgname=otf-san-francisco
pkgver=1.0
pkgrel=5
epoch=1
pkgdesc='The system font for macOS, iOS, watchOS, and tvOS'
arch=('any')
license=('custom')
url='https://developer.apple.com/fonts/'
depends=('fontconfig' 
		 'xorg-font-utils')
source=(SFPro-1.0.zip::https://developer.apple.com/fonts/downloads/SFPro.zip)
sha256sums=('1235856837d0123a4ea3f434933381c90f808e0e05e04af965c873a5d7ce3bd6')

package() {
  cd "$srcdir/SFPro"

  mkdir pkg
  bsdtar xvPf 'San Francisco Pro.pkg' || true
  bsdtar xvPf 'San Francisco Pro.pkg/Payload'

  install -d $pkgdir/usr/share/fonts/OTF/
  install -m644 Library/Fonts/*.otf $pkgdir/usr/share/fonts/OTF/

  install -d $pkgdir/usr/share/licenses/$pkgname/
  install -m644 'SF Pro Font License.rtf' $pkgdir/usr/share/licenses/$pkgname/LICENSE.rtf
}

