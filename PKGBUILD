# Maintainer: Swift Geek
pkgname=iotools-git
_pkgname=iotools
pkgver=a
pkgrel=1
pkgdesc="a suite of tools for reading and writing hardware registers"
arch=('i686' 'x86_64')
url="https://github.com/adurbin/iotools"
license=('GPL')
#depends=('')
makedepends=('git')
source=("git://github.com/adurbin/iotools.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  git rev-parse --short HEAD # Fix to better comply with github display
}

build() {
  cd "$srcdir/${_pkgname}"
  unset CPPFLAGS
  make
}

package() {
  cd "$srcdir/${_pkgname}"
  install -d -m0755 "${pkgdir}/usr/bin"
  make SBINDIR="${pkgdir}/usr/bin" install
  cd "${pkgdir}/usr/bin"
  mv not not-${_pkgname}
}
