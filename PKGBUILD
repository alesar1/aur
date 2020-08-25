# Maintainer: Alexander Bruegmann <mail[at]abruegmann[dot]eu>
pkgname=('python-requests-pkcs12')
_pyname=requests_pkcs12
depends=('python-requests' 'python-pyopenssl')
makedepends=('python-setuptools')
pkgver=1.8
pkgrel=1
pkgdesc='This library adds PKCS#12 support to the Python requests library.'
arch=('any')
url="https://github.com/m-click/requests_pkcs12/"
license=('ISC')
source=("${_pyname}-${pkgver}.tar.gz::https://github.com/m-click/requests_pkcs12/archive/${pkgver}.tar.gz")
sha512sums=('47cfd3ace07ae5ba122b77b6354ddb78fb997fa5b32d8e888c508eb94779d120955cfb2bbedb252acaf4fcbbcddb3dad538f211ef0a8c258ea410e504888eaa9')

build() {
  cd "${srcdir}/${_pyname}-${pkgver}"
  python setup.py build
}

check() {
  cd "${srcdir}/${_pyname}-${pkgver}"
  python setup.py test
}

package() {
  cd "${srcdir}/${_pyname}-${pkgver}"
  python setup.py install -O1 --root="${pkgdir}" --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
