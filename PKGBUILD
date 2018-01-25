# Maintainer: Ian Beringer <ian@ianberinger.com>

pkgname=python-fuzzyfinder
_name=fuzzyfinder
pkgver=2.0.0
pkgrel=1
license=('BSD')
pkgdesc='Fuzzy Finder implemented in Python. Matches partial string entries from a list of strings.'
makedepends=('python-setuptools')
depends=('python')
arch=('any')
url='https://github.com/amjith/fuzzyfinder'
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('ca7d092096846fe1b4feb5ef1efc2011e87d07e8af1d948f529fa703c68016d5')

package() {
  cd "$srcdir/$_name-$pkgver"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  python setup.py install --root="$pkgdir/" --optimize=1
}
