# Maintainer:  <clu>

pkgname=ds9-bin  
_pkgname=ds9
pkgver=8.0
pkgrel=1
pkgdesc="SAOImage DS9: Astronomical Data Visualization Application"
url="http://hea-www.harvard.edu/RD/ds9/"
arch=('x86_64')
license=('GPL2')
options=(!strip)
provides=(${_pkgname})
depends=()
makedepends=()
conflicts=()
replaces=()
backup=()
source=(http://ds9.si.edu/download/ubuntu18/${_pkgname}.ubuntu18.${pkgver}.tar.gz
        ds9.desktop)
md5sums=('5f7353c4e963927bb06dbf10d4754b82'
         '195b619383718be1dffe94e39975f006')

# ds9.desktop
#md5sums+=('195b619383718be1dffe94e39975f006')

package() {
  cd ${srcdir}

  install -Dm755 ds9 ${pkgdir}/usr/bin/${_pkgname}
  install -Dm644 ${_pkgname}.desktop ${pkgdir}/usr/share/applications/${_pkgname}.desktop
}

