_pkgname="mavproxy"
pkgname="$_pkgname-git"
pkgver=r2212.dfbc22d0
pkgrel=1
pkgdesc='MAVLink proxy and command line ground station.'
arch=('any')
url='https://dronecode.github.io/MAVProxy/html/index.html'
license=('GPL3')
depends=('python-pymavlink')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=('git+https://github.com/Dronecode/MAVProxy.git')
md5sums=('SKIP')

_srcdir='MAVProxy'

pkgver() {
  cd "$_srcdir"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$_srcdir"
  python setup.py install --root="$pkgdir" --optimize=1
}

# vim:set ts=2 sw=2 et:
