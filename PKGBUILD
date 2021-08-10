# Maintainer: Pellegrino Prevete <pellegrinoprevete@gmail.com>

pkgname=dbus-python2
pkgver=1.2.18
pkgrel=1
pkgdesc="Python 2.7 bindings for DBUS"
url="https://www.freedesktop.org/wiki/Software/DBusBindings"
arch=(x86_64)
license=('GPL' 'LGPL')
depends=('dbus' 'glib2')
makedepends=('python2' 'autoconf-archive' 'python-sphinx_rtd_theme' 'python2-sphinx')
source=(https://dbus.freedesktop.org/releases/${pkgname}/${pkgname}-${pkgver}.tar.gz{,.asc})
sha256sums=('92bdd1e68b45596c833307a5ff4b217ee6929a1502f5341bae28fd120acf7260'
            'SKIP')
validpgpkeys=('DA98F25C0871C49A59EAFF2C4DE8FF2A63C7CC90')
replaces=('python2-dbus' 'python2-dbus-common')
conflicts=('python2-dbus' 'python2-dbus-common')
provides=("python2-dbus=$pkgver" "python2-dbus-common=$pkgver")

prepare() {
  cd $pkgname-$pkgver
  PYTHON_VERSION=2.7 autoreconf -vfi
}

build() {
  cd $pkgname-$pkgver
  PYTHON_VERSION=2.7 ./configure --prefix=/usr
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package() {
  cd $pkgname-$pkgver
  make DESTDIR="${pkgdir}" install
}
