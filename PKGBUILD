# Maintainer: Robosky <fangyuhao0612@gmail.com>

pkgname=ttf-sarasa-slab
pkgver=0.8.2
pkgrel=1
pkgdesc="Mono-slab variants for Sarasa Gothic"
arch=('any')
url="https://github.com/CyanoHao/Sarasa-Alternatives"
license=('custom: SIL')
depends=('fontconfig' 'xorg-font-utils')
source=("https://github.com/CyanoHao/Sarasa-Alternatives/releases/download/v${pkgver}-slab/sarasa-slab-ttc-${pkgver}.7z"
	"https://raw.githubusercontent.com/CyanoHao/Sarasa-Alternatives/master/LICENSE")
md5sums=('b985d8bcc7f5fdd7f8890b84fa1b289d'
         '8ff57183e6df3ffbe6248fa831090a5f')

package() {
	install -d "${pkgdir}/usr/share/fonts/TTC"
	install -m644 "${srcdir}/${_winver}/"*.ttc "${pkgdir}/usr/share/fonts/TTC"
	install -Dm644 "${srcdir}/"LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
