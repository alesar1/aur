# Maintainer: Guillaume Hayot <ghayot@postblue.info>
# Thanks to: Sýlvan Heuser <sylvan.heuser@gmx.net>

pkgname=libpurple-carbons-git
_pkgname=carbons
pkgver=r27.8ab2fe5
pkgrel=2
pkgdesc='Experimental XEP-0280: Message Carbons plugin for libpurple (Pidgin, Finch, etc.)'
arch=('i686' 'x86_64')
url="https://github.com/gkdr/carbons"
license=('GPL')
depends=('libpurple' 'glib2' 'libxml2')
makedepends=('git')
conflicts=('libpurple-carbons')
source=("$_pkgname::git+https://github.com/gkdr/carbons.git")
sha256sums=('SKIP')

pkgver () {
  cd "$srcdir/$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "$srcdir/$_pkgname"
  msg2 "Getting submodules"
  git submodule update --init --recursive
}

package() {
  cd "$srcdir/$_pkgname"
  make install PURPLE_PLUGIN_DIR="$pkgdir/usr/lib/purple-2"
}

# vim:set ts=2 sw=2 et:
