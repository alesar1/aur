# Maintainer: DanielNak <daniel@tee.cat>
# Python package author: Kevin McCarthy <me@kevinmccarthy.org>

_pkgname=vcrpy
_author=kevin1024
pkgname=python-$_pkgname-git
pkgver=4.1.1.r1006.c79a06f
pkgrel=1
pkgdesc="VCR.py simplifies and speeds up tests that make HTTP requests."
arch=('any')
url="https://github.com/$_author/$_pkgname"
license=('MIT')
depends=('python')
makedepends=('git' 'python-setuptools')
provides=("python-$_pkgname")
conflicts=("python-$_pkgname")
source=("git+https://github.com/$_author/$_pkgname.git")
md5sums=('SKIP')

prepare() {
  cd "$_pkgname"
  git checkout $(curl https://api.github.com/repos/$_author/$_pkgname/releases | grep tag_name | cut -d '"' -f4 | head -n 1)
}

pkgver() {
  cd "$_pkgname"
  printf "%s.r%s.%s" "$(cat vcr/__init__.py | grep -i version | grep -v '#' | cut -d '"' -f2 | head -n 1)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$_pkgname"
  python setup.py install --root="${pkgdir}/" --optimize=1
  install -Dm644 LICENSE* "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
