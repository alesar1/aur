# Maintainer: xiretza <xiretza+aur@gmail.com>
# Contributor: Lex Black <autumn-wind@web.de>
# Contributor: Dobroslaw Kijowski [dobo] <dobo90_at_gmail.com>

pkgname=python-pycapnp
_pkgname=pycapnp
pkgver=1.0.0
pkgrel=2
pkgdesc="Cython wrapper for the C++ Cap'n Proto serialization library"
arch=(x86_64)
url=https://github.com/capnproto/pycapnp
license=(BSD)
depends=(python capnproto)
makedepends=(python-setuptools python-pkgconfig cython)
checkdepends=(python-pytest)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/capnproto/pycapnp/archive/v${pkgver}.tar.gz")
sha256sums=('4bc4e948b02c159eb7c268e3179a1b6709351281f4758245d700012e0ff0bc75')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  local python_version=$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
  PYTHONPATH="$PWD/build/lib.linux-$CARCH-${python_version}" pytest
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
