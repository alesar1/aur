# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=folder-color-nautilus
_pkgname=${pkgname%-nautilus}
pkgver=0.1.9
pkgrel=2
pkgdesc="Change your folder color in Nautilus"
arch=('any')
url="https://github.com/costales/folder-color"
license=('GPL3')
depends=('python-nautilus<4.0')
makedepends=('dpkg' 'git' 'python-distutils-extra')
conflicts=("$_pkgname-bzr" 'folder-color-common')
replaces=('folder-color-common')
_commit=f5ac3d569846f618624048bc794cd318092db311
source=("git+https://github.com/costales/folder-color.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  dpkg-parsechangelog --show-field Version
}

prepare() {
  cd "$srcdir/$_pkgname/install_scripts"
  ./nautilus.sh
}

build() {
  cd "$srcdir/$_pkgname"
  python setup.py build
}

package() {
  cd "$srcdir/$_pkgname"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
