# Maintainer  : Chris Billington <chrisjbillington@gmail.com>
pkgname=python-numpy-mkl-bin
_pkgname=numpy-base
pkgver=1.17.3
_build=py38hde5b4d6_0
pkgrel=1
pkgdesc="Scientific tools for Python - with Intel MKL - prebuilt binaries from Anaconda"
arch=('x86_64')
url="https://www.numpy.org/"
license=('custom')
provides=('python-numpy' 'python-numpy-mkl')
conflicts=('python-numpy')
depends=('python-mkl-service')
source=("http://repo.continuum.io/pkgs/main/linux-64/${_pkgname}-${pkgver}-${_build}.tar.bz2")
sha256sums=('01bf2e2ce1981432c2e8eff496e46bea4102ebb2b5e9b4f89711b1a350416fd5')

package() {
  mkdir -p "${srcdir}/usr/"
  mkdir "${pkgdir}/usr"
  cp -drp --no-preserve=ownership "${srcdir}/bin" "${pkgdir}/usr/bin"
  cp -drp --no-preserve=ownership "${srcdir}/lib" "${pkgdir}/usr/lib"
  install -D -m 644 "${srcdir}/info/licenses/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}