# Maintainer: Diego Principe <cdprincipe@at@gmail@dot@com>
# Maintainer: PAblo Lezaeta <prflr88@gmail.com>

_pkgname=xfce4-whiskermenu-plugin
pkgname=xfce4-whiskermenu-plugin-git
pkgver=1.5.0.12.gaf5e8
pkgrel=1
pkgdesc="Alternate Xfce menu"
arch=("i686" "x86_64")
url="http://gottcode.org/${_pkgname}/"
license=("GPL2")
depends=("xfce4-panel")
makedepends=("cmake" "git")
groups=("xfce4-goodies" "xfce4-goodies-git")
provides=("xfce4-whiskermenu-plugin")
conflicts=("xfce4-whiskermenu-plugin")
install=${pkgname}.install
source=("$_pkgname::git+http://github.com/gottcode/xfce4-whiskermenu-plugin")
md5sums=("SKIP")

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --always | sed 's|-|.|g' | grep -o '[0-9]..*[0-9]'
}

build() {
  cd "${srcdir}/${_pkgname}"
  cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr  -DCMAKE_INSTALL_LIBDIR=/usr/lib
  make
}

package() {
  cd "${srcdir}/${_pkgname}"
  make install/strip DESTDIR=${pkgdir}
}
