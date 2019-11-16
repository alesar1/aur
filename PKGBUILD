# Maintainer: chuvke <chuvke AT gmail DOT com>
pkgname=pygrid
pkgver=75da433
_pkgrevision=75da433fba80e99518ebc351f3cc27cc3c6dfeb0
pkgrel=1
pkgdesc="Quickly place and move windows around the X11 desktop using a grid"
arch=('i686' 'x86_64')
url="https://github.com/mjs7231/pygrid"
license=('GPL2')
depends=(python python-gobject python-xlib) 
makedepends=('git')
source=("${pkgname}::git+https://github.com/mjs7231/${pkgname}.git#commit=${_pkgrevision}"
        "pygrid.desktop")
sha256sums=('SKIP'
            'd39d8dae7f8326a41309132101175a36bd042e42f2cfde15cf8c12a69b5ef945')

package() {
  install -Dm 644 "pygrid.desktop" "${pkgdir}/etc/xdg/autostart/pygrid.desktop"

  cd "$pkgname"
  install -Dm 755 "pygrid.py" "${pkgdir}/usr/bin/pygrid"
}
