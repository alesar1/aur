# Maintainer: Jingbei Li <i@jingbei.li>
# Contributer: Jose Riha <jose1711 gmail com>
pkgbase=python-resampy
pkgname=(python-resampy python2-resampy)
_pkgname=resampy
pkgver=0.2.1
pkgrel=1
pkgdesc="Efficient sample rate conversion in python"
arch=('any')
url="https://github.com/bmcfee/resampy"
license=('ISC')
makedepends=('cython' 'cython2' 'python-setuptools' 'python2-setuptools' 'python-numba' 'python2-numba' 'python-numpy' 'python2-numpy' 'python-scipy' 'python2-scipy' 'python-six' 'python2-six')
source=("$url/archive/${pkgver}.tar.gz")
md5sums=('36762050a95e624a1c52b597ad1ba053')

prepare() {
  cd "$srcdir/"
  cp -a "${_pkgname}-${pkgver}" "${_pkgname}-${pkgver}-py2"
  cd "${_pkgname}-${pkgver}-py2"
  sed -e "s|#![ ]*/usr/bin/python$|#!/usr/bin/python2|" \
    -e "s|#![ ]*/usr/bin/env python$|#!/usr/bin/env python2|" \
    -e "s|#![ ]*/bin/env python$|#!/usr/bin/env python2|" \
    -i $(find . -name '*.py')
}

build() {
  msg "Building Python 2"
  cd "$srcdir/${_pkgname}-${pkgver}-py2"
  python2 setup.py build_ext -i

  msg "Building Python 3"
  cd "$srcdir/${_pkgname}-${pkgver}"
  python setup.py build_ext -i
}

package_python2-resampy() {
  depends=('python2-numba' 'python2-numpy' 'python2-scipy' 'python2-six')
  cd "$srcdir/${_pkgname}-${pkgver}-py2"
  python2 setup.py install --root="$pkgdir"/ --optimize=1
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_python-resampy() {
  depends=('python-numba' 'python-numpy' 'python-scipy' 'python-six')
  cd "$srcdir/${_pkgname}-${pkgver}"
  python setup.py install --root="$pkgdir"/ --optimize=1
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
