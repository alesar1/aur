# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=python-avocado-git
pkgver=69.0+99.gb44609ba59
pkgrel=1
pkgdesc="Set of tools and libraries to help with automated testing"
arch=('x86_64')
url="http://avocado-framework.github.io/"
license=('GPL2')
source=("git+https://github.com/avocado-framework/avocado")
sha256sums=('SKIP')
depends=('python' 'libvirt-python')
makedepends=('python-setuptools')

pkgver() {
  cd avocado
  git describe --long --abbrev=10 | sed 's/-/+/; s/-/./'
}

build() {
  cd avocado
  python setup.py build
  make man
}

false &&
check() {
  cd avocado
  make check-full
}

package() {
  cd avocado
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  install -d "$pkgdir/usr/share/man/man1/"
  install -m644 man/*.1 "$pkgdir/usr/share/man/man1/"
}
