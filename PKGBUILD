# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=xde-session-git
pkgver=1.0.134.g992d3c1
pkgrel=1
pkgdesc="X Desktop Environment Display and Session Management"
arch=('i686' 'x86_64')
url="https://github.com/bbidulock/xde-session"
license=('GPL')
provides=('xde-session')
conflicts=('xde-session')
depends=('m4' 'libunique' 'libxss' 'libxvnc' 'dbus-glib' 'xde-theme' 'xde-ctools' 'xde-helpers')
optdepends=('xorg-xdm-xlogin-git: to use xde-xlogin and xde-xchooser')
makedepends=('git')
source=("$pkgname::git+https://github.com/bbidulock/xde-session.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags|sed -e 's,^[a-zA-Z_]*,,;s,-,.,g'
}

build() {
  cd $pkgname
  ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc
  make V=0
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
}
