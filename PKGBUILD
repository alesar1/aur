# Maintainer: Platon Pronko <platon7pronko@gmail.com>

pkgname='python-num2words'
pkgver=0.5.10
pkgrel=2
pkgdesc="Python modules to convert numbers to words."
arch=('any')
url='https://github.com/savoirfairelinux/num2words'
license=('LGPL')
makedepends=('python-setuptools')
checkdepends=('python')
source=("https://github.com/savoirfairelinux/num2words/archive/v${pkgver}.tar.gz")
sha256sums=('ff107ecc0b6709bedf31fdb9e2ca45d29d3fd34b9eb6a0b89a862f337ac5ff00')

prepare() {
  cd "${srcdir}/num2words-${pkgver}"
}

check() {
  cd "${srcdir}/num2words-${pkgver}"
  python setup.py test
}

package() {
  cd "${srcdir}/num2words-${pkgver}"
  python setup.py install --root=${pkgdir} 
}
