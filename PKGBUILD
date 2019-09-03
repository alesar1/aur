# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=xde-applets-git
pkgver=0.5.r2.g67870c6
pkgrel=2
pkgdesc="X Desktop Environment System Tray Icons and Dock Apps"
groups=('xde-git')
arch=('i686' 'x86_64')
url="https://github.com/bbidulock/xde-applets"
license=('GPL')
provides=('xde-applets')
conflicts=('xde-applets')
depends=('libxss' 'libxxf86misc' 'libsm' 'libwnck+-git' 'libcanberra' 'libnotify' 'lm_sensors'
		'libpackagekit-glib' 'cpupower' 'upower')
makedepends=('dbus-glib' 'libunique' 'git')
optdepends=('xdg-launch-git: launch with recent update and launch notification')
source=("$pkgname::git+https://github.com/bbidulock/xde-applets.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  cd $pkgname
  ./autogen.sh
}

build() {
  cd $pkgname
  ./configure --sysconfdir=/etc
  make
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
}
