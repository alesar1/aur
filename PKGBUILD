# Maintainer: Erik Dubois <erik.dubois@gmail.com>
pkgname=sardi-icons
pkgver=5.1
pkgrel=2
pkgdesc="Sardi is an icon theme build upon ardis icons but has outgrown its roots > 18 iconsets"
arch=('any')
url="http://sourceforge.net/projects/sardi"
license=('Attribution-NonCommercial-ShareAlike 4.0 International Public License')
provides=('sardi-icons')
options=(!strip !emptydirs)
source=("http://downloads.sourceforge.net/project/sardi/${pkgname}-${pkgver}-${pkgrel}.tar.gz")
sha256sums=('SKIP')

package() {
  install -dm 755 "${pkgdir}"/usr/share/icons
  cp -r "${srcdir}/${pkgname}-${pkgver}-${pkgrel}/*" "${pkgdir}/usr/share/icons/"
}


