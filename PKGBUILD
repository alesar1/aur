# Maintainer  : Chris Billington <chrisjbillington@gmail.com>
pkgname=intel-mkl-bin
_pkgname=mkl
_pkgver=2019.5
_build=281
pkgver="${_pkgver}.${_build}"
pkgrel=0
pkgdesc="Intel Math Kernel Library - prebuilt binaries from Anaconda"
arch=('x86_64')
url="https://software.intel.com/en-us/mkl"
license=('custom')
provides=('intel-mkl')
conflicts=('intel-mkl')
source=("https://repo.anaconda.com/pkgs/main/linux-64/${_pkgname}-${_pkgver}-${_build}.tar.bz2")
sha256sums=('040bed2cb07db1e74b46e2a47fbb31c4173932f05acabfe4433f20549b17cbfc')

package() {
  mkdir "${pkgdir}/usr"
  cp -drp --no-preserve=ownership "${srcdir}/lib" "${pkgdir}/usr/lib"
  install -D -m 644 "${srcdir}/info/licenses/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}