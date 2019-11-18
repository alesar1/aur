# Maintainer  : Chris Billington <chrisjbillington@gmail.com>
pkgname=python-mkl-fft-bin
_pkgname=mkl_fft
pkgver=1.0.15
_build=py38ha843d7b_0
pkgrel=1
pkgdesc="Fast Fourier Transform using Intel MKL - prebuilt binaries from Anaconda"
arch=('x86_64')
url="https://github.com/IntelPython/mkl_fft"
license=('custom')
provides=('python-mkl-fft')
conflicts=('python-mkl-fft')
depends=('python-mkl-service' 'python-numpy')
source=("http://repo.continuum.io/pkgs/main/linux-64/${_pkgname}-${pkgver}-${_build}.tar.bz2")
sha256sums=('ad24e954606f5183d31cc99b20c86d878963c5a75626815cfc056c266ccbb55d')

package() {
  mkdir -p "${srcdir}/usr/"
  mkdir "${pkgdir}/usr"
  cp -drp --no-preserve=ownership "${srcdir}/lib" "${pkgdir}/usr/lib"
  install -D -m 644 "${srcdir}/info/licenses/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}