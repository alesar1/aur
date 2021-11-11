# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
pkgname=exam-terminal
pkgdesc="Terminal/console based exam, test, or quiz tool for educators and learners"
pkgver=0.2.7
pkgrel=1
arch=('x86_64')
url="https://github.com/ismet55555/${pkgname}"
license=('Apache')
depends=(python-fpdf2 python-requests python-pyaml python-click)
makedepends=(python-pip)
provides=(${pkgname})
source=(https://pypi.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz https://raw.githubusercontent.com/ismet55555/${pkgname}/master/requirements.txt)
sha512sums=('9680e9bec21b5899110bb4db2edd1c397ac710619a3a83133bc9947cf897d7dda5bf11f09417d5d9963cff6a537a4d4c41ede52b91092286b82260ed0e6e625e' '5ff9f0127ca598b6f48db00c260a617124deb77831d66d591e2f73bd81760f377385f437c141da2860e62880357781d3d03bb32a687b86984e5066c281c7b5dd')

prepare() {
  mv requirements.txt "${pkgname}-${pkgver}"
}

build() {
  cd "${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${pkgname}-${pkgver}"
  export PYTHONHASHSEED=0
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
