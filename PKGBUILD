# Maintainer: Fox Kiester <noct[at]posteo[dot]net>
_pkgname=zscroll
pkgname=zscroll-git
pkgver=0.1.r5.gd42dc2c
pkgrel=1
pkgdesc="A text scroller for use with panels"
arch=('any')
url="https://github.com/noctuid/zscroll"
license=('GPL3')
depends=('python')
makedepends=('git')
provides=("${_pkgname}")
source=("git://github.com/noctuid/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/$_pkgname"
  python setup.py install --root="$pkgdir/" --optimize=1
}
