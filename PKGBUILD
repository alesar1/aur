# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: ovi chis <sonekken@gmail.com>

pkgname=corosync-git
_pkgname=corosync
pkgver=2.4.4.r8.g9c2a97f4
pkgrel=1
pkgdesc="Cluster engine for nodal communication systems with additional features for implementing high availability within applications."
arch=('i686' 'x86_64')
url="http://www.corosync.org/"
license=('BSD')
makedepends=('git')
depends=('nss' 'libstatgrab' 'net-snmp' 'libdbus' 'libqb-git' 'libcgroup')
provides=(${_pkgname})
conflicts=(${_pkgname})
source=("$pkgname::git+https://github.com/corosync/${_pkgname}.git#branch=needle")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed -E 's/^[^0-9]*//;s/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  cd $pkgname
  ./autogen.sh
}

build() {
  cd $pkgname
  ./configure --sbindir=/usr/bin \
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
              --enable-qdevices \
              --enable-qnetd \
              --enable-libcgroup \
              --with-systemddir=/usr/lib/systemd/system \
              --with-tmpfilesdir=/usr/lib/tmpfiles.d
  make V=0
}

package() {
  cd $pkgname
  make DESTDIR="${pkgdir}" install
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
  rm -fr "${pkgdir}/var/log"
  rm -fr "${pkgdir}/var/run"
  install -Dm644 /dev/null "${pkgdir}/usr/lib/tmpfiles.d/corosync.conf"
  cat >>"${pkgdir}/usr/lib/tmpfiles.d/corosync.conf" <<EOF
d /var/log/cluster 0755 root root -
d /run/corosync-qdevice 0755 root root -
d /run/corosync-qnetd 0755 root root -
EOF
}

# vim: set sw=2 et:
