# $Id$
# Maintainer:  Νικόλαος Κυριάκος Φυτίλης <n-fit@live.com>
# From: Balló György <ballogyor+arch at gmail dot com>

pkgname=gtk-sharp-3-mono-git
_pkgname=gtk-sharp
pkgver=2.99.2.r103.g9ef7d3f39
pkgrel=1
pkgdesc="C# bindings for GTK+ 3 (from the mono upstream)"
arch=('i686' 'x86_64')
url="http://mono-project.com/GtkSharp"
license=('LGPL')
depends=('mono' 'gtk3')
provides=(gtk-sharp-3 gtk-sharp-3-git)
conflicts=(gtk-sharp-3 gtk-sharp-3-git)
source=(git+https://github.com/mono/gtk-sharp.git)
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$_pkgname"
  ./autogen.sh --prefix=/usr
  make
}

package() {
  cd "$srcdir/$_pkgname"
  make DESTDIR="$pkgdir" install
}
