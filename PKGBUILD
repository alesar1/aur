# Maintainer: DanManN <dnahimov@gmail.com>
# Python package author: Matthew Honnibal <matt@explosion.ai>
pkgname=python-srsly-git
_origpkgname=srsly
pkgver=0.0.4.r115.8f5d1f5
pkgrel=1
pkgdesc="Modern high-performance serialization utilities for Python"
arch=("x86_64")
url="https://github.com/explosion/srsly"
license=("MIT")
depends=('python'
         'python-numpy'
         'cython'
         'python-pytest'
         'python-mock'
         'python-pytz'
)
makedepends=("python-setuptools")
provides=('python-srsly')
conflicts=('python-srsly')
source=("git+https://github.com/explosion/$_origpkgname.git")
md5sums=('SKIP')

pkgver() {
  cd "$_origpkgname"
  printf "%s.r%s.%s" "$(cat srsly/about.py | grep -i version | grep -v '#' | cut -d '"' -f2 | head -n 1)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$_origpkgname"
  python setup.py install --root="${pkgdir}/" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
