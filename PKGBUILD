# Maintainer: Florent Thiéry <fthiery@gmail.com>

pkgname=cockpit-minimal
pkgver=193
pkgrel=1
pkgdesc='A systemd web based user interface for Linux servers (minimal setup with system graphs, journalctl, storage, network, user accounts, systemd services and terminal)'
arch=(i686 x86_64 armv6h armv7h)
url='http://www.cockpit-project.org/'
license=(LGPL2.1)
conflicts=(cockpit-git cockpit)
depends=(libssh krb5 sshpass accountsservice perl-json perl-locale-po json-glib glib-networking networkmanager packagekit)
# udisks support disables some features
#http://cockpit-project.org/guide/latest/feature-storaged.html
optdepends=('udisks2: disk stats support')
makedepends=(git intltool python2-pyscss gtk-doc perl-javascript-minifier-xs gobject-introspection networkmanager libgsystem xmlto npm tar)
source=(
    https://github.com/cockpit-project/cockpit/releases/download/${pkgver}/cockpit-${pkgver}.tar.xz
	https://github.com/cockpit-project/cockpit/releases/download/${pkgver}/cockpit-cache-${pkgver}.tar.xz
    cockpit-pam
)
noextract=(cockpit-${pkgver}.tar.xz)
sha1sums=('8185745f3e0f0f19c69f4031f9fa06687e03953e'
          '2838cdae3c5d604ac6144ecc1b35c15815ac7b08'
          '69b899b034e981cf217c2f8d61264caa2015c0e6')

prepare() {
  cd $srcdir

  #bsdtar can't extract cockpit
  tar -xf cockpit-${pkgver}.tar.xz
}

build() {
  cd cockpit-${pkgver}
  ./configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc --localstatedir=/var --disable-pcp --disable-doc
  make
}

package() {
  cd cockpit-${pkgver}
  make DESTDIR="$pkgdir" install
  cd $pkgdir

  mkdir -p etc/pam.d
  cp ../../src/cockpit-pam etc/pam.d/cockpit

  rm usr/lib/firewalld/services/cockpit.xml  # owned by firewalld
  for d in docker kubernetes tuned kdump selinux ovirt pcp playground realmd sosreport subscriptions; do
      rm -r usr/share/cockpit/$d;
      rm -rf usr/src/debug/usr/share/cockpit/$d;
  done
}
