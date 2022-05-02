# Maintainer: Felix Golatofski <contact@xdfr.de>
pkgname=rbtools
_name=RBTools
pkgver=2.0.1
pkgrel=2
pkgdesc="Client tools for Review Board"
arch=('any')
url="https://www.reviewboard.org/"
license=('custom:MIT')
makedepends=(python-build python-installer python-wheel)
depends=(python python-setuptools python-six python-tqdm python-texttable python-colorama)
source=(https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz)
sha256sums=('df8d5e834ad291c6e743907e27e50fc2f6006cdc6b8a4f9035acc86b87dcba31')

build() {
  cd "$srcdir/RBTools-$pkgver"
  python -m build --wheel --no-isolation
}

package() {
  cd "$srcdir/RBTools-$pkgver"
  python -m installer --destdir="$pkgdir" dist/*.whl
  install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim: set ts=2 sw=2 et:
