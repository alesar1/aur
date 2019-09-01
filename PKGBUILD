# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=xde-ctools-git
pkgver=1.9.0.ge00c1ae
pkgrel=1
pkgdesc="X Desktop Environment C-language tools"
groups=('xde-git')
arch=('i686' 'x86_64')
url="https://github.com/bbidulock/xde-ctools"
license=('GPL')
provides=('xde-ctools')
conflicts=('xde-ctools')
depends=('libxss' 'libxxf86misc' 'libsm' 'libwnck+-git' 'libcanberra' 'libnotify')
makedepends=('dbus-glib' 'libunique' 'git')
optdepends=('xdg-launch-git: launch with recent update and launch notification')
source=("$pkgname::git+https://github.com/bbidulock/xde-ctools.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags|sed -e 's,^[a-zA-Z_]*,,;s,-,.,g'
}

build() {
  cd $pkgname
  ./autogen.sh
  ./configure --sysconfdir=/etc
  make
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
}
