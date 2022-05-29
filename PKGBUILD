#!/hint/bash -e
# Maintainer: Adrien Smith <adrien@panissupraomnia.dev>
# Contributor: Kyle Keen <keenerd@gmail.com>
# Contributor: sudokode <sudokode@gmail.com>
# Contributor: Jason Chu <jason@archlinux.org>
# Contributor: Jesse Young <jesse.young@gmail.com>

pkgname=namcap-git
pkgver=3.3.0.r0.gad8f115
pkgrel=1
pkgdesc="A Pacman package analyzer"
arch=('any')
url="https://gitlab.archlinux.org/pacman/namcap"
license=('GPL')
depends=('pyalpm' 'licenses' 'binutils' 'python-pyelftools')
makedepends=('git' 'python-setuptools')
checkdepends=('systemd' 'python-six')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("$pkgname::git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd $pkgname

  git describe --long | sed 's/-/.r/;s/-/./'
}

build() {
  cd $pkgname

  python setup.py build
}

check() {
  cd $pkgname

  env PARSE_PKGBUILD_PATH="$srcdir/${pkgname}" \
      PATH="$srcdir/${pkgname}/scripts:$PATH" \
      python setup.py test
}

package() {
  cd $pkgname

  python setup.py install --root="$pkgdir"
}

# vim:set ts=2 sw=2 et:
