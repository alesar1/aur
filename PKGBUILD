# Maintainer: Ray Song <i@maskray.me>

pkgname=vte3-ng-fullwidth-emoji
_basever=0.44.2
pkgver=$_basever.a
pkgrel=1
pkgdesc="Enhanced Virtual Terminal Emulator widget for use with GTK3 (patched with support for fullwidth emoji)"
arch=('i686' 'x86_64')
license=('LGPL')
options=('!emptydirs')
depends=('gtk3' 'vte-common' 'pcre2')
makedepends=('intltool' 'gobject-introspection' 'gtk3' 'vala' 'gtk-doc' 'gperf')
url="https://github.com/thestinger/vte-ng"
source=(https://github.com/thestinger/vte-ng/archive/$pkgver.tar.gz fullwidth-emoji.patch)
sha256sums=('025912dab1405dcf4b3796056159ade377410cc7343319d68ba63cfaf3f49528'
            'fbb5d8f770c6442e3416f704dcfff8ded0efff445c37fca02360edf699012c08')
provides=(vte3=$_basever vte3-select-text=$_basever vte3-ng)
conflicts=(vte3 vte3-select-text vte3-ng)
replaces=(vte3-select-text vte3-ng)

prepare() {
  cd "vte-ng-$pkgver"
  patch -p1 < $srcdir/fullwidth-emoji.patch
}

build() {
  cd "vte-ng-$pkgver"
  ./autogen.sh --prefix=/usr --sysconfdir=/etc \
      --libexecdir=/usr/lib/vte \
      --localstatedir=/var --disable-static \
      --enable-introspection
  make
}

package() {
  cd "vte-ng-$pkgver"
  make DESTDIR="$pkgdir" install

  rm "$pkgdir/etc/profile.d/vte.sh"
}
