# Maintainer: Chris Warrick <aur@chriswarrick.com>
pkgname=python-yapsy
_pyname=Yapsy
pkgver=1.10.423
pkgrel=1
pkgdesc='Yet Another Plugin SYstem'
arch=('any')
url='http://yapsy.sourceforge.net/'
license=('BSD')
depends=('python')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("http://pypi.python.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('fb0e0afbfc1e6086e7d34e093cf3f294')

package() {
  cd "${srcdir}/${_pyname}-${pkgver}"
  python3 setup.py install --root="${pkgdir}/" --optimize=1
  install -D -m644 src3/package/LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
