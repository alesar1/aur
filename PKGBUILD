# Maintainer: D. Can Celasun <dcelasun[at]gmail[dot]com>
# Contributor: Alessio Sergi <asergi at archlinux dot us>
# Contributor: Asa Marco <marcoasa90[at]gmail[.]com>
pkgname=kupfer
pkgver=306
pkgrel=1
pkgdesc="Launcher application written in python. Similar to Gnome-Do / Launchy"
arch=('i686' 'x86_64')
url="https://kupferlauncher.github.io"
license=('GPL3')
depends=('libkeybinder3' 'libwnck3' 'python' 'python-dbus' 'python-cairo' 'python-xdg' 'python-gobject')
makedepends=('intltool')
source=("https://github.com/kupferlauncher/${pkgname}/releases/download/v${pkgver}/${pkgname}-v${pkgver}.tar.xz")
sha1sums=('0ea20b36055fef6db131ac54207c75a1bba16869')

build() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  export PYTHON="/usr/bin/python"
  ./waf configure --prefix=/usr \
                  --no-update-mime \
                  --no-update-icon-cache
  ./waf
}

package() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  ./waf install -f --destdir="${pkgdir}"
}




