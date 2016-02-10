# Maintainer: Iwan Timmer <irtimmer@gmail.com>
# Contributor: Mark Constable <markc@renta.net>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>

pkgname=cockpit
pkgver=0.94
pkgrel=2
pkgdesc='A systemd web based user interface for Linux servers'
arch=(i686 x86_64 armv6h armv7h)
url='http://www.cockpit-project.org/'
license=(LGPL2.1)
conflicts=(cockpit-git)
depends=(libssh krb5 sshpass accountsservice perl-json perl-locale-po json-glib pcp glib-networking)
makedepends=(git intltool python2-pyscss gtk-doc perl-javascript-minifier-xs gobject-introspection networkmanager libgsystem xmlto npm)
optdepends=(storaged udisks2 networkmanager)
source=(https://github.com/cockpit-project/cockpit/archive/${pkgver}.tar.gz)
sha1sums=('b4a7cd3831475a23332a5ddb2ce652cd322dd986')

build() {
  cd cockpit-${pkgver}

  # Build failed with --as-needed
  export LDFLAGS="${LDFLAGS//,--as-needed}"
  mkdir -p build
  cd build
  
  ../autogen.sh
  ../configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc --localstatedir=/var
  make
}

package() {
  cd cockpit-${pkgver}/build
  make DESTDIR="$pkgdir" install
}
