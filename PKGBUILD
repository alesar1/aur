# Maintainer: Daniel M. Capella <polyzen@archlinux.info>

pkgname=xandikos-git
pkgver=0.0.4.r29.gd59757b
pkgrel=1
pkgdesc='CardDAV/CalDAV server that backs onto a Git repository (Git version)'
arch=('any')
url=https://jelmer.uk/code/xandikos/
license=('GPL3')
depends=('python-defusedxml' 'python-dulwich' 'python-icalendar' 'python-jinja')
makedepends=('git' 'python-setuptools')
provides=('xandikos')
conflicts=('xandikos')
source=("git+$url")
sha512sums=('SKIP')

pkgver() {
  cd xandikos
  git describe --long | sed 's/v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

check() {
  cd xandikos
  make check
}

package() {
  cd xandikos
  python setup.py install --root="$pkgdir" --optimize=1
  install -Dm644 xandikos.1 "$pkgdir"/usr/share/man/man1/xandikos.1
}

# vim:set ts=2 sw=2 et:
