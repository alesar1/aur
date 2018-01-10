# Maintainer: Can Celasun <can[at]dcc[dot]im>
pkgname=netsniff-ng
pkgver=0.6.4
pkgrel=1
pkgdesc='A high performance Linux network sniffer for packet inspection.'
arch=('i686' 'x86_64')
url='http://netsniff-ng.org/'
license=('GPL2')
makedepends=('cmake' 'flex' 'bison')
depends=('ncurses' 'geoip' 'zlib' 'libnetfilter_conntrack' 'libpcap' 'liburcu' 'libnl' 'libcli' 'libnet' 'libsodium')
source=(http://pub.netsniff-ng.org/netsniff-ng/netsniff-ng-${pkgver}.tar.gz)
md5sums=('2892bc5b96fe287814061f189221a9ac')
build() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  NACL_INC_DIR=/usr/include/sodium NACL_LIB=sodium ./configure --prefix=/usr
  make DISTRO=1 all
}

package() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  make PREFIX="/usr" DESTDIR="${pkgdir}" SBINDIR="/usr/bin" install_all
}
