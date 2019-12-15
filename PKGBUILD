# Maintainer: Isai Alcântara <isfalcantara[at]gmail[dot]com>
pkgname=otf-mplus
_pkgname=mplus
_pkgver=063-OTF
pkgver=TESTFLIGHT_${_pkgver/-/_}
pkgrel=2
pkgdesc="M+ - The japanese outline font families designed by Coji Morishita."
arch=('any')
url="https://mplus-fonts.osdn.jp/about-en.html"
license=('custom')
depends=('fontconfig')
conflicts=('ttf-mplus')
source=("https://osdn.net/projects/mplus-fonts/downloads/62344/${_pkgver}.tar.xz")
sha256sums=('b1a98b24e034ff26d7cb957d904f1d49bbffc004c732eadc822e140b99f98ce1')
package() {
  cd ${srcdir}/${_pkgver}

  install -d ${pkgdir}/usr/share/fonts/${_pkgname}
  install -m644 *.otf ${pkgdir}/usr/share/fonts/${_pkgname}/

  install -D -m644 LICENSE_E ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE_E
  install -D -m644 LICENSE_J ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE_J
}
