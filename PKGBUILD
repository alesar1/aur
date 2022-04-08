# Maintainer: Shalygin Konstantin <k0ste@k0ste.ru>
# Contributor: Shalygin Konstantin <k0ste@k0ste.ru>

_name='nocaselist'
pkgname="python-${_name}"
pkgver='1.0.5'
pkgrel='1'
pkgdesc='A case-insensitive list for Python'
arch=('any')
url="https://github.com/pywbem/${_name}"
makedepends=('python' 'python-setuptools' 'python-wheel')
license=('GPLv2.1+')
source=("${url}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('284d457eee27fe5320ed4149d672d651b55fc0f8aac51c950d615744d161b2b7')

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install -O1 --root="${pkgdir}"
}
