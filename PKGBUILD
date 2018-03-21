# Maintainer: Fredy García <frealgagu at gmail dot com>
# Contributor: zach <zach {at} zach-adams {dot} com>
# Contributor: Gordian Edenhofer <gordian.edenhofer[at]yahoo[dot]de

pkgname=gtk-theme-arc-git
_pkgname=arc-theme
pkgver=latest
pkgrel=1
pkgdesc="A flat theme with transparent elements for GTK 3, GTK 2 and Gnome-Shell. Latest commit from the master branch on Github."
arch=("any")
url="https://github.com/horst3180/${_pkgname}"
license=("GPL3")
depends=("gtk3" "gtk-engine-murrine")
makedepends=("git")
source=("${_pkgname}::git+https://github.com/horst3180/${_pkgname}.git")
sha256sums=("SKIP")
conflicts=("arc-${pkgname%-arc-git}")
provides=("arc-${pkgname%-arc-git}")

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/${_pkgname}"
  ./autogen.sh --prefix=/usr
}

package() {
  make -C "${srcdir}/${_pkgname}" DESTDIR="${pkgdir}" install
}
