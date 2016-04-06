# $Id$
# Maintainer: mnovick1988 <contact through AUR please>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Matthew Bowra-Dean <matthew@ijw.co.nz>
pkgname=openra-git
pkgver=DEV.20151224
pkgrel=1
pkgdesc="An open-source implementation of the Red Alert engine using .NET/Mono and OpenGL"
arch=('any')
url="http://www.openra.net"
license=('GPL3')
install=openra.install
depends=('mono' 'ttf-dejavu' 'openal' 'libgl' 'freetype2' 'sdl2' 'lua51' 'hicolor-icon-theme' 'gtk-update-icon-cache'
         'desktop-file-utils' 'xdg-utils' 'zenity')
makedepends=('git' 'unzip')
provides=('openra')
conflicts=('openra')
options=(!strip)

source=('OpenRA::git://github.com/OpenRA/OpenRA.git#branch=master')
md5sums=('SKIP')


pkgver() {
  cd "$srcdir/OpenRA"

  #git name-rev --name-only --tags --no-undefined HEAD 2>/dev/null || echo git-`git rev-parse --short HEAD` | cut 'release-' ''
  git name-rev --name-only --tags --no-undefined HEAD 2>/dev/null | sed 's/release-/DEV./'''
  #gitdate="$( git log -1 --format=%ai | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | sed 's/ /\n/g' | head -1 )"
  #echo "playtest.$gitdate.git"
}


#prepare() {
#  cd OpenRA
#
#  make version
#}

build() {
  cd OpenRA

  make dependencies
  make core
  make tools
  #make version
}

package() {
  cd OpenRA

  make prefix=/usr DESTDIR="$pkgdir" install-all
  make prefix=/usr DESTDIR="$pkgdir" install-linux-shortcuts
  make prefix=/usr DESTDIR="$pkgdir" install-linux-mime
  make prefix=/usr DESTDIR="$pkgdir" install-linux-appdata
}
