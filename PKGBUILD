# Maintainer: Will Price <will.price94@gmail.com>
# Co-Maintainer: xiretza <xiretza+aur@xiretza.xyz>

pkgname=python-migen-git
pkgver=0.9.2.rcc6e76e
pkgrel=2
pkgdesc="A  python toolbox for building complex digital hardware"
arch=(any)
url="https://github.com/m-labs/migen"
license=('BSD')

makedepends=('git' 'python-setuptools')
depends=('python')
checkdepends=('python-pytest')
provides=("${pkgname%%-git}")
conflicts=("${pkgname%%-git}")
replaces=('migen-git')
source=("git+$url")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/migen"
  git describe --long --tags | sed 's/\([^-]*-g\)/r/;s/-/./g'
}

build() {
  cd "${srcdir}/migen"
  python setup.py build
}

check() {
  cd "${srcdir}/migen"
  env PYTHONPATH=. pytest
}

package() {
  cd "${srcdir}/migen"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
