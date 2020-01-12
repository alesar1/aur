# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=lynx-git
pkgver=2.9.0dev.4h.r0.g05a10ac7
pkgrel=1
pkgdesc="The text web browser"
arch=('i686' 'x86_64')
url="https://lynx.invisible-island.net/lynx.html"
license=('GPL')
depends=('glibc' 'libidn' 'openssl')
makedepends=('git')
provides=('lynx')
conflicts=('lynx')
backup=('etc/lynx.cfg')
source=("git+https://github.com/ThomasDickey/lynx-snapshots.git")
sha256sums=('SKIP')


pkgver() {
  cd "lynx-snapshots"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g;s/_/./g'
}

build() {
  cd "lynx-snapshots"

  ./configure \
    --prefix="/usr" \
    --sysconfdir="/etc" \
    --mandir="/usr/share/man" \
    --with-ssl="/usr" \
    --enable-ipv6 \
    --enable-nls
  make
}

check() {
  cd "lynx-snapshots"

  make check
}

package() {
  cd "lynx-snapshots"

  make DESTDIR="$pkgdir" install

  # FS#20404 - points to local help
  sed -i -e "s|^HELPFILE.*$|HELPFILE:file:///usr/share/doc/lynx/lynx_help/lynx_help_main.html|" "$pkgdir/etc/lynx.cfg"

  install -d "$pkgdir/usr/share/doc/lynx"
  cp -rf "lynx_help" "$pkgdir/usr/share/doc/lynx"
}
