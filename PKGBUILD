# Maintainer: John Jenkins twodopeshaggy@gmail.com

pkgname=npyscreen-git
pkgver=r480.d286599
pkgrel=1
pkgdesc="A python widget library and application framework"
arch=('any')
url="https://github.com/npcole/npyscreen"
license=('GPL3')
makedepends=('git')
conflicts=('python-npyscreen')
depends=('python' 'python-setuptools')
source=('git+https://github.com/npcole/npyscreen.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/npyscreen"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
   cd "$srcdir/npyscreen"
   python setup.py install --root="$pkgdir/" --optimize=1
}
