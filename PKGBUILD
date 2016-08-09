# Maintainer: Peter Weber <peter.weber@ttyhoney.com>
# Contributor: Manuel Hüsers <manuel.huesers@uni-ol.de>
# Contributor: Fernando Fernandez <fernando@softwareperonista.com.ar>
# Contributor: Jan de Groot <jgc@archlinux.org>

pkgname=gnome-terminal-transparency
_pkgname=gnome-terminal
pkgver=3.20.2
pkgrel=2
pkgdesc="The GNOME Terminal Emulator, with background transparency"
url="https://wiki.gnome.org/Apps/Terminal"
arch=(i686 x86_64)
license=(GPL)
depends=(vte3 gsettings-desktop-schemas dconf)
makedepends=(intltool itstool docbook-xsl libnautilus-extension appdata-tools
             gnome-shell gconf vala yelp-tools)
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
options=(!emptydirs)
groups=(gnome)
changelog=$pkgname.changelog
source=(https://download.gnome.org/sources/$_pkgname/${pkgver:0:4}/$_pkgname-$pkgver.tar.xz
        dnd-crash.patch
        palette-color.patch
        gnome-terminal-transparency.patch)
sha256sums=('f5383060730f1de70af35e917f82d5b6a14d963ad9cfd6a0e705f90011645a23'
            '0bb1021b01ed0cdc1b598289de707221ebea0be46cba32301c32477dfd4cb166'
            '1d98a84fa8ce0e93e2e3e36c6cd50d86965d3fb120d2d6a42305b402be1df573'
            'b28361f4606f495ade3035fcabb5525d4561f2dd2458e25a7e79da8b8634c20d')

prepare () {
  cd $_pkgname-$pkgver
  patch -Np1 -i ../dnd-crash.patch
  patch -Np1 -i ../palette-color.patch
  patch -Np1 -i ../gnome-terminal-transparency.patch
  autoreconf -f -i
}

build() {
  cd $_pkgname-$pkgver
  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var \
    --libexecdir=/usr/lib/$_pkgname --disable-static --with-nautilus-extension
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

check() {
  cd $_pkgname-$pkgver
  make check
}

package() {
  cd $_pkgname-$pkgver
  make DESTDIR="$pkgdir" install
}
