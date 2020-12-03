# Maintainer: Emilio Reggi <nag@mailbox.org>
# Maintainer: Morten Linderud <morten@linderud.pw>
# Contributor: Alad Wenter <https://wiki.archlinux.org/index.php/Special:EmailUser/Alad>

pkgname=dmenu-extended-git
_pkgname=dmenu-extended
_source=https://github.com/markjones112358/dmenu-extended.git
pkgver=r358.16bde81
pkgrel=1
pkgdesc='An extension to dmenu for quickly opening files and folders.'
url='https://github.com/markjones112358/dmenu-extended'
license=('MIT')
arch=('any')
depends=('python' 'dmenu')
makedepends=('git')
provides=('dmenu-extended')
conflicts=('dmenu-extended')
source=("${_pkgname}"::"git+${_source}")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$_pkgname"
  python setup.py build
}

package() {
  cd "$_pkgname"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
