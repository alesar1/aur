# Maintainer: Midov <midov@midov.pl>

pkgname=python-html-sanitizer
_name=html-sanitizer
pkgver=1.9.2
pkgrel=1
pkgdesc="Allowlist-based and very opinionated HTML sanitizer that can be used both for untrusted and trusted sources."
arch=('any')
url="https://pypi.org/project/html-sanitizer/"
license=('GPL')
depends=('python')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/09/f9/f05f2a50fbca255c60f360be26b1127a82a29d004d22c8e0e437dfd3746c/html-sanitizer-1.9.1.tar.gz")
sha256sums=('13c0aebe3ceff55540e37ee8717181ce314a8bedb92e1cb322be6455016a69d5')

build() {
  cd "${srcdir}/${_name}-${pkgver}"
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="$pkgdir/" --optimize=1
}
