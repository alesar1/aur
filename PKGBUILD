# Maintainer: Alberto Redondo <albertomost at gmail dot com>

_pkgname=domain-connect
_pkgname_gh=domainconnect_python
pkgname=python-${_pkgname}
pkgver=0.0.9
pkgrel=1
pkgdesc='Python client library for Domain Connect protocol'
arch=('any')
url='https://github.com/Domain-Connect/domainconnect_python'
_url_pypi='https://pypi.org/project/domain-connect'
license=('custom')
depends=(
  'python'
  'python-six'
  'python-cryptography'
  'python-publicsuffixlist'
  'python-dnspython'
  'python-future'
  'python-publicsuffix'
)
makedepends=('python-setuptools')
source=(${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz)
md5sums=('8e0fd6ed45a1bbc66dc859366e68c3cf')

build() {

  cd ${_pkgname_gh}-${pkgver}

  python setup.py build

}

package() {

  cd ${_pkgname_gh}-${pkgver}

  python setup.py install \
    -O1 \
    --root="${pkgdir}" \
    --skip-build

  install -Dm644 LICENSE \
    -t "${pkgdir}/usr/share/licenses/${pkgname}"

}
