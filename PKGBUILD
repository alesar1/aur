# Maintainer:  <clu>

pkgname=ds9-bin  
_pkgname=ds9
pkgver=7.4
pkgrel=1
pkgdesc="SAOImage DS9: Astronomical Data Visualization Application"
url="http://hea-www.harvard.edu/RD/ds9/"
arch=('i686' 'x86_64')
[ "${CARCH}" = 'i686' ] && _arch=''
[ "${CARCH}" = 'x86_64' ] && _arch='64'
license=('GPL2')
options=(!strip)
provides=(${_pkgname})
depends=()
makedepends=()
conflicts=()
replaces=()
backup=()
source=(http://hea-www.harvard.edu/RD/${_pkgname}/download/linux${_arch}/$_pkgname.linux${_arch}.${pkgver}.tar.gz)
#md5sums=('9daa75a9fb5b26e06d6566e9b213491a'
#         'd41d8cd98f00b204e9800998ecf8427e')

[ "${CARCH}" = 'i686' ] && md5sums=('10f564218cfa169d2927d175754e57fe')
[ "${CARCH}" = 'x86_64' ] && md5sums=('9f815d0f17260773a2c4663fe9cf0cd4')

package() {
  cd ${srcdir}

  mkdir -p ${pkgdir}/usr/bin
  install -Dm755 ds9 ${pkgdir}/usr/bin
}

