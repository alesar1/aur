# Maintainer: peeweep <peeweep at 0x0 dot ee>

pkgname=sigma
pkgver=0.12.1
pkgrel=1
pkgdesc="Generic Signature Format for SIEM Systems"
arch=('any')
url="https://github.com/Neo23x0/sigma"
license=('LGPL3')
depends=('python-yaml' 'python-argparse' 'python-urllib3' 'python-pymisp')
makedepends=('python-setuptools')
source=(
  "${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz"
  "pymisp.patch"
)
sha256sums=('ebc46f1a017785c95662adcceb1bfca01208181be43616fae47f6da243ce4377'
  'f6489322336e0e72d967fd22be157365676626a27e1f7da19df88d9efeff2eb7')

prepare() {
  cd "${pkgname}-${pkgver}"/tools
  patch -p1 <"${srcdir}/pymisp.patch"
}

build() {
  cd "${pkgname}-${pkgver}"/tools
  python setup.py build
}

package() {
  cd "${pkgname}-${pkgver}"/tools
  python setup.py install --root="${pkgdir}" --skip-build
  mv "${pkgdir}/usr/etc/" "${pkgdir}"

  # Update License
  install -Dm 644 "${srcdir}/${pkgname}-${pkgver}/LICENSE.LGPL.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim: ts=2 sw=2 et:
