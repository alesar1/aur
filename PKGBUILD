#Maintainer: ovi chis <ovi@ovios.org>

pkgname=corosync
pkgver=2.4.4
pkgrel=1
pkgdesc="Cluster engine for nodal communication systems with additional features for implementing high availability within applications."
arch=('i686' 'x86_64')
url="http://www.corosync.org/"
license=('BSD')
depends=('nss' 'libstatgrab' 'net-snmp' 'libdbus' 'libqb')
source=("$pkgname-$pkgver.tar.gz::https://github.com/corosync/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('8d561538e26f734a165d4d1710816cc3')

prepare() {
  cd ${pkgname}-${pkgver}
  echo ${pkgver} >.tarball-version
  GIT_DIR=`pwd`/.git ./autogen.sh
}
build() {
  cd ${pkgname}-${pkgver}
  GIT_DIR=`pwd`/.git ./configure --sbindir=/usr/bin \
              --sysconfdir=/etc \
              --libdir=/usr/lib \
              --localstatedir=/var \
              --enable-dbus \
              --enable-monitoring \
              --enable-watchdog \
              --enable-systemd \
              --disable-upstart \
              --enable-snmp \
              --enable-xmlconf \
              --with-systemddir=/usr/lib/systemd/system \
              --with-tmpfilesdir=/usr/lib/tmpfiles.d
  make V=0
}

package() {
  cd ${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
  rm -fr "${pkgdir}/var/log"
  install -Dm644 /dev/null "${pkgdir}/usr/lib/tmpfiles.d/corosync.conf"
  echo "d /var/log/cluster 0755 root root -" \
    >"${pkgdir}/usr/lib/tmpfiles.d/corosync.conf"
}

# vim: set sw=2 et:
