# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=xdg-launch-git
pkgver=1.10.r1.gfd416b4
pkgrel=1
pkgdesc="A command line XDG compliant launcher"
arch=('i686' 'x86_64')
url="http://github.com/bbidulock/xdg-launch"
license=('GPL')
groups=('xde-git')
provides=('xdg-launch')
conflicts=('xdg-launch')
depends=('glib2' 'libxrandr' 'libxinerama' 'desktop-file-utils')
optdepends=('dmenu: to use dmenu_launch script')
makedepends=('git' 'pkgconfig')
source=("${pkgname}::git+https://github.com/bbidulock/xdg-launch")
md5sums=('SKIP')

pkgver() {
  cd ${pkgname}
  git describe --long --tags | sed -r 's,([^-]*-g),r\1,;s,-,.,g'
}

prepare() {
  cd ${pkgname}
  ./autogen.sh
}

build() {
  cd ${pkgname}
  ./configure
  make
}

package() {
  cd ${pkgname}
  make DESTDIR="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:
