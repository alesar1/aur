# Maintainer: Iwan Timmer <irtimmer@gmail.com>
# Contributor: Mark Constable <markc@renta.net>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>

pkgname=cockpit
pkgver=0.115
pkgrel=1
pkgdesc='A systemd web based user interface for Linux servers'
arch=(i686 x86_64 armv6h armv7h)
url='http://www.cockpit-project.org/'
license=(LGPL2.1)
conflicts=(cockpit-git)
depends=(libssh krb5 sshpass accountsservice perl-json perl-locale-po json-glib pcp glib-networking)
makedepends=(git intltool python2-pyscss gtk-doc perl-javascript-minifier-xs gobject-introspection networkmanager libgsystem xmlto npm)
optdepends=(storaged udisks2 networkmanager)
source=(https://github.com/cockpit-project/cockpit/archive/${pkgver}.tar.gz)
sha1sums=('cf04723d20488c2af656936426f29c6920a2ead4')

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
