# Maintainer: elParaguayo <elparaguayocode@gmail.com>
pkgname=qtile-extras-git
_pkgname=qtile-extras
pkgver=r142.e522e59
pkgrel=1
provides=("$_pkgname")
conflicts=("$_pkgname")
pkgdesc="Unofficial mods for qtile that are unlikely to be maintained in the main repo."
url="https://github.com/elparaguayo/qtile-extras.git"
arch=("any")
license=("MIT")
depends=("python" "qtile")
makedepends=(
  "git"
  "python-setuptools"
  "python-setuptools-scm"
  "python-pip"
  "python-wheel"
)
source=("git+https://github.com/elparaguayo/$_pkgname.git")
md5sums=("SKIP")

pkgver()
{
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package()
{
  cd "$_pkgname"
  python setup.py install --root="$pkgdir"
}
