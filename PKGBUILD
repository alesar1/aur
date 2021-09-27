# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=xde-session-git
pkgver=1.13.r4.g6823c50
pkgrel=1
pkgdesc="X Desktop Environment Display and Session Management"
groups=('xde-git')
arch=('i686' 'x86_64')
url="https://github.com/bbidulock/xde-session"
license=('GPL')
provides=('xde-session')
conflicts=('xde-session')
depends=('m4' 'pam' 'libunique' 'libxss' 'libxvnc' 'xde-theme' 'xde-ctools-git'
	 'xde-helpers-git' 'xde-menu-git' 'xdg-launch-git' 'libcanberra' 'numlockx' 'json-c')
optdepends=('xorg-xdm-xlogin-git: to use xde-xlogin and xde-xchooser')
makedepends=('git' 'xorgproto')
source=("$pkgname::git+https://github.com/bbidulock/xde-session.git")
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
  # gtk2 is using deprecated glib2 declarations
  ./configure CFLAGS="-Wno-deprecated-declarations $CFLAGS"
  # Fight unused direct deps
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0 /g' -e 's/    if test "$export_dynamic" = yes && test -n "$export_dynamic_flag_spec"; then/      func_append compile_command " -Wl,-O1,--as-needed"\n      func_append finalize_command " -Wl,-O1,--as-needed"\n\0/' libtool
  make CFLAGS="-Wno-deprecated-declarations $CFLAGS"
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
}
