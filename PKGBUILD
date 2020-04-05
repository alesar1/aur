# Maintainer: Artur Wrona <arturwrona91 at gmail.com>
# 

pkgname=gtk-theme-maxflat-mod
pkgver=1
pkgrel=3
pkgdesc="Modified version of MaxFlat (https://www.pling.com/p/1013119/). GTK3 and GTK2 themes"
arch=('any')
url="https://www.opencode.net/donarturo/maxflat-mod/tree/master/MaxFlat-mod"
license=('GPL3')
depends=('gtk-engines')
source=("https://www.opencode.net/donarturo/maxflat-mod/-/archive/master/maxflat-mod-master.tar.gz")
sha256sums=('61ded7d27b900ac7c68d449bed41012879b7ff7ffe5cc8cb124fbaeef22a84f7')
_srcdir=maxflat-mod-master/MaxFlat-mod

prepare() {
  cd ${_srcdir}
}

build() {
  cd ${_srcdir}

  # Prefer building icons from SVG source
}

package() {
  cd maxflat-mod-master 
  mkdir -p "${pkgdir}/usr/share/themes/"
  cp -Rv "MaxFlat-mod" \
     "${pkgdir}/usr/share/themes/"

}

# vim:set ts=2 sw=2 et:
