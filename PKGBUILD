# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Bjorn Lindeijer <bjorn lindeijer nl>
pkgname=sofia-sip
pkgver=1.13.3
pkgrel=1
pkgdesc="An open-source SIP User-Agent library"
arch=('x86_64' 'i686')
url="http://sofia-sip.sourceforge.net"
license=('LGPL')
depends=('glib2' 'openssl' 'gawk')
source=($pkgname-$pkgver.tar.gz::https://github.com/freeswitch/$pkgname/archive/refs/tags/v$pkgver.tar.gz)
md5sums=('f6805ecb2d46c04ef51efddd8a991fff')

prepare() {
  cd $pkgname-$pkgver
  ./autogen.sh
}

build() {
  cd $pkgname-$pkgver
  ./configure --prefix=/usr --with-openssl
  # Fight unused direct deps
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0 /g' -e 's/    if test "$export_dynamic" = yes && test -n "$export_dynamic_flag_spec"; then/      func_append compile_command " -Wl,-O1,--as-needed"\n      func_append finalize_command " -Wl,-O1,--as-needed"\n\0/' libtool
  make
}

package() {
  cd $pkgname-$pkgver
  make DESTDIR="$pkgdir" install
}
