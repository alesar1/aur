# Maintainer: Felix Yan <felixonmars@archlinux.org>

pkgname=shadowvpn
pkgver=0.1.6
pkgrel=1
pkgdesc="A fast, safe VPN based on libsodium"
arch=('i686' 'x86_64')
url="https://github.com/clowwindy/ShadowVPN"
license=('MIT')
depends=('sh' 'libsodium')
makedepends=('git')
options=('!emptydirs')
backup=('etc/shadowvpn/client.conf'
        'etc/shadowvpn/client_down.sh'
        'etc/shadowvpn/client_up.sh'
        'etc/shadowvpn/server.conf'
        'etc/shadowvpn/server_down.sh'
        'etc/shadowvpn/server_up.sh')
source=("git+https://github.com/clowwindy/ShadowVPN.git#tag=$pkgver")
md5sums=('SKIP')

prepare() {
  cd ShadowVPN
  rmdir libsodium

  sed -e 's|SUBDIRS = ../libsodium||' \
      -e 's|AM_CFLAGS = .*libsodium.*$|AM_CFLAGS = -lsodium|' \
      -e 's|libshadowvpn_la_LIBADD = ../libsodium/src/libsodium/libsodium.la||' \
      -i src/Makefile.am
  
  sed -e 's|AC_CONFIG_SUBDIRS([libsodium])||' \
      -i configure.ac 
}

build() {
  cd ShadowVPN
  ./autogen.sh
  ./configure --sysconfdir=/etc --disable-static --prefix=/usr
  make
}

package() {
  cd ShadowVPN
  make DESTDIR="$pkgdir" install

  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
