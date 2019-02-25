# Maintainer: whezzel <whezzel (at) gmail (dot) com>

pkgname=undefined-medium-fonts
_pkgname=undefined-medium
pkgver=1.0
pkgrel=4
pkgdesc='Package for undefined-medium-fonts. Includes ttf, otf, and webfonts.'
arch=('any')
url='https://undefined-medium.com/'
license=('custom:SIL')
source=("$_pkgname-$pkgver.zip::https://github.com/andirueckel/${_pkgname}/archive/v${pkgver}.zip")
sha256sums=('0b645725302bb1e7bbbf4c76cef496bea9a06d3649952237db574393426f846b')

package()
{
    install -dm0775 "${pkgdir}"/usr/share/{fonts,licenses}/${_pkgname}
    install -Dm0644 "${srcdir}"/${_pkgname}-${pkgver}/fonts/{ttf,otf,webfonts}/* "${pkgdir}"/usr/share/fonts/${_pkgname}/
    install -Dm0644 "${srcdir}"/${_pkgname}-${pkgver}/OFL.txt "${pkgdir}"/usr/share/licenses/${_pkgname}/LICENSE
}
