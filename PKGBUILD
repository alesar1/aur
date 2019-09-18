# Maintainer: Sam Whited <sam@samwhited.com>

pkgname=anita
pkgver=2.0
pkgrel=1
pkgdesc='A tool for automating NetBSD installs and building VM images.'
arch=('any')
url='http://www.gson.org/netbsd/anita/'
license=('custom')
depends=('python2-pexpect')
makedepends=('python2-setuptools')
source=("http://www.gson.org/netbsd/anita/download/anita-${pkgver}.tar.gz")
sha256sums=('fcc3dec95bfbdb681d483eb688e4c58aa885aa20c2d6012d302a4b12360d133d')

build() {
  cd $pkgname-$pkgver
  python2 setup.py build
}

package() {
  cd $pkgname-$pkgver
  install -dm775 "$pkgdir/usr/share/licenses/$pkgname"
  install -Dm644 COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname"
  python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  # The NetBSD man page isn't in the same location that Arch wants.
  mv $pkgdir/usr/man $pkgdir/usr/share
}

# vim:set ts=2 sw=2 et:
