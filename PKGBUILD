# Maintainer    : Dan Beste <dan.ray.beste@gmail.com>

pkgname='libcs50-git'
_gitname='libcs50'
pkgver=7.1.2.r64.g8157c87
pkgrel=1
pkgdesc="CS50 Library for C"
arch=('x86_64' 'i686')
url="https://cs50.harvard.edu/"
license=('unknown')
groups=('cs50')
makedepends=('git')
provides=('libcs50')
conflicts=('libcs50')
source=('git+https://github.com/cs50/libcs50.git')
md5sums=('SKIP')

pkgver() {
  cd "${_gitname}"

  git describe --tags                  \
    | sed 's/\([^-]*-g\)/r\1/;s/-/./g' \
    | sed 's/v//'
}

build() {
  cd "${_gitname}"

  make build
}

package() {
  cd "${_gitname}"

  cp -rp build/* "${pkgdir}"
}

# vim: ts=2 sw=2 et:
