# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>

_pkgname='sfeed_curses'
pkgname="${_pkgname/_/-}-git"
pkgver=0.9.4.r0.g58dc3d5
pkgrel=1
pkgdesc='Curses UI front-end for sfeed RSS and Atom parser'
arch=('x86_64')
url='https://www.codemadness.org/sfeed_curses-ui.html'
license=('ISC')
depends=('ncurses')
makedepends=('git')
optdepends=('sfeed: RSS and Atom parser')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("git://git.codemadness.org/${_pkgname}")
sha256sums=('SKIP')

pkgver() {
  git -C "${_pkgname}" describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  make -C "${_pkgname}"
}

package() {
  make DESTDIR="${pkgdir}" PREFIX='/usr' MANPREFIX='/usr/share/man' -C "${_pkgname}" install
  install -Dvm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${_pkgname}"
}

# vim: ts=2 sw=2 et:
