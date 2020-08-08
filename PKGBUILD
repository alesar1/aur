# Maintainer: DingYuan Zhang <justforlxz@gmail.com>
# Contributor: DingYuan Zhang <justforlxz@gmail.com>

pkgname=deepin-qt-dbus-factory-git
pkgver=5.3.0.1.r0.g23a7936
pkgrel=1
pkgdesc='A repository stores auto-generated Qt5 dbus code (libdframeworkdbus)'
arch=('x86_64')
url="https://github.com/linuxdeepin/dde-qt-dbus-factory"
license=('GPL3')
depends=('qt5-base')
makedepends=('git' 'dtkcore-git' 'python')
conflicts=('deepin-qt-dbus-factory')
replaces=('deepin-qt-dbus-factory')
provides=('deepin-qt-dbus-factory')
groups=('deepin-git')
source=("git://github.com/linuxdeepin/dde-qt-dbus-factory.git")
sha512sums=('SKIP')

pkgver() {
    cd dde-qt-dbus-factory
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd dde-qt-dbus-factory
  qmake-qt5 PREFIX=/usr
  make
}

package() {
  cd dde-qt-dbus-factory
  make INSTALL_ROOT="$pkgdir" install
}
