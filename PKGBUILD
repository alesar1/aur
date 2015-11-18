# Maintainer: Thomas Krug <t.krug@elektronenpumpe.de>
# Contributor: Pierre DOUCET <pierre at equinoxefr.org>

pkgname=pcb2gcode-git
_pkgname=pcb2gcode
pkgver=r241.eb2a001
pkgrel=1
pkgdesc="Gerber to gcode file converter" 
arch=('i686' 'x86_64')
url="https://github.com/pcb2gcode/pcb2gcode"
license=('GPL')
makedepends=('git' 'boost')
depends=('gtkmm' 'boost-libs' 'gerbv-git')
provides=('pcb2gcode')
conflicts=('pcb2gcode')
source=("$_pkgname"::'git://github.com/pcb2gcode/pcb2gcode.git'
        'glibmm.patch')
md5sums=('SKIP'
         '3cc7d7023d3d89332d88a9eaa97eb8bc')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/$_pkgname"
  patch -p1 -i ../glibmm.patch
}

build() {
  cd "$srcdir/$_pkgname"

  autoreconf -i
  ./configure --prefix=/usr
  make -j
}

package() {
  cd "$srcdir/$_pkgname"

  make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
