# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: andrewy <andrew@andrewyates.net>
#
pkgname=bbkeys-git
_pkgname=bbkeys
pkgver=0.9.1.21
pkgrel=1
pkgdesc="Blackbox tool for setting keyboard shortcuts for manipulating windows and virtual desktop"
arch=('i686' 'x86_64')
url="http://bbkeys.sourceforge.net/"
license=('custom')
groups=('blackbox')
depends=('libxext' 'libxft' 'blackbox-git')
makedepends=('git')
provides=($_pkgname)
conflicts=($_pkgname)
source=("$pkgname::git+https://github.com/bbidulock/$_pkgname.git"
	"bbkeys.desktop")
md5sums=('SKIP'
         'ff91c4fec02f829820b369d5a0a4d000')

pkgver() {
  cd $pkgname
  git describe --tags|sed -r 's,rel-([0-9])([0-9])([0-9]),\1.\2.\3,;s,^[^0-9]*,,;s,[-_],.,g;s,\.g.*$,,'
}

prepare() {
  cd $pkgname
  ./autogen.sh
}

build() {
  cd $pkgname
  ./configure
  make
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
  install -m644 -D "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -m644 -D "../bbkeys.desktop" "$pkgdir/usr/share/applications/bbkeys.desktop"
  install -m644 -D "../bbkeys.desktop" "$pkgdir/etc/xdg/autostart/bbkeys.desktop"
}
