# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_name=userpath
_sha256sum=dd0b8ba650732c614c5e6b709e51be321c596566422d99a443d545401a965468

pkgname=python-userpath
pkgver=1.3.0
pkgrel=2
pkgdesc="Cross-platform tool for adding locations to the user PATH, no elevated privileges required!"
arch=('any')
url="https://github.com/ofek/userpath"
license=('MIT' 'APACHE')
depends=(
  'python-click'
  'python-distro'
)
makedepends=('python' 'python-setuptools')
options=(!emptydirs)
source=(
  "https://files.pythonhosted.org/packages/source/${_name:0:1}/${_name}/${_name}-${pkgver}.tar.gz"
)
sha256sums=(
  "${_sha256sum}"
)

prepare() {
  cd "${srcdir}/${_name}-${pkgver}"
  # no need to include tests files
  rm tests/__init__.py
}

build() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
  install -Dm644 README.rst "${pkgdir}/usr/share/doc/${pkgname}/README.rst"
  install -Dm644 LICENSE-MIT "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-MIT"
  install -Dm644 LICENSE-APACHE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-APACHE"
}
