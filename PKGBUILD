# Maintainer: Troy Engel <troyengel+arch@gmail.com>

pkgname=xeroxprtdrv
pkgver=5.20.598.3490
pkgrel=1
pkgdesc="Xerox Unix Print Drivers"
arch=('i686' 'x86_64')
url="http://www.xerox.com"
install=${pkgname}.install
license=('custom')
options=('emptydirs')
depends=('gcc-libs' 'libxinerama' 'libxcursor' 'libxdamage' 'libx11'
         'libxau' 'libxdmcp' 'xorg-xhost')

source_i686=("http://download.support.xerox.com/pub/drivers/CQ8580/drivers/linux/ar/Xeroxv5Pkg-Linuxi686-${pkgver}.rpm"
             'xeroxprtdrv.license')
md5sums_i686=('ecc7f123e5ec08c32affb8f4903817f8'
              '0a8eb0c1480a6ccc1ddab7cbb5e1bde4')
md5sums_x86_64=('e0de5f68018693126a074e7149531f08'
                '0a8eb0c1480a6ccc1ddab7cbb5e1bde4')

source_x86_64=("http://download.support.xerox.com/pub/drivers/CQ8580/drivers/linux/ar/Xeroxv5Pkg-Linuxx86_64-${pkgver}.rpm"
               'xeroxprtdrv.license')

package() {
  # remove RPM SElinux files, they delete these in RPM post-install
  rm -f "${pkgdir}/opt/Xerox/prtsys/PatchSELinuxPolicy" \
        "${pkgdir}/opt/Xerox/prtsys/SELinuxExceptions*.pp"

  # copy the bits
  cp -dpr "${srcdir}/opt" "${pkgdir}"
  cp -dpr "${srcdir}/usr" "${pkgdir}"

  # it's in the RPM post-install 777, not sure what for; skipping chmod 777
  mkdir -p "${pkgdir}/opt/Xerox/prtsys/db/phonebook/user"

  # commercial license
  install -Dm0644 "../${pkgname}.license" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

