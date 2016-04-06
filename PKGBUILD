# Author: Kyle Manna <kyle(at)kylemanna(dot)com>
#
# Upstream: https://nxp.flexnetoperations.com/control/frse/download?element=6320997
#
# Download the source file and place in the current directory.  Website requires login
# and license agreement.

pkgname=kinetis-design-studio-bin
pkgver=3.2.0
pkgrel=1
pkgdesc="NXP / Freescale Kinetis Design Studio"
#arch=('i686' 'x86_64')
arch=('x86_64')
url="https://nxp.flexnetoperations.com/control/frse/download?element=7490617"
license=('EULA')
groups=('base-devel')
depends=()
options=('!strip')
source=('file://kinetis-design-studio_3.2.0-1_amd64.deb')
sha512sums=('93c0f2f5e78f1cd2d184bf8ab26e72d4565e552a0c36a31d34a9b9b35e5c2d04cab41b1c5e3c37d9d5e9f653124b33db6a2f3224a30424ed53a1d8d811f70e5c')

package() {
    tar -zxf data.tar.gz -C "${pkgdir}"

    # /lib is a symlink to /usr/lib
    mv "${pkgdir}/lib" "${pkgdir}/usr"
}
