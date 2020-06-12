# Maintainer: Tom Wambold <tom5760@gmail.com>
pkgname=core
pkgver=6.5.0
pkgrel=1
pkgdesc="Common Open Research Emulator"
arch=('i686' 'x86_64')
url="https://github.com/coreemu/core/"
license=('BSD')
depends=('bridge-utils' 'ebtables' 'ethtool' 'fabric' 'iproute2' 'libev'
  'openvswitch' 'procps-ng' 'python3' 'python-future' 'python-grpcio'
  'python-lxml' 'python-mako' 'python-netaddr' 'python-pillow' 'python-pyproj'
  'python-yaml' 'tkimg' 'util-linux' 'xterm')
makedepends=('help2man' 'imagemagick' 'python-grpcio-tools' 'openvswitch')
optdepends=('openvswitch: Open vSwitch support')
backup=('etc/core/core.conf')
source=("https://github.com/coreemu/core/archive/release-$pkgver.tar.gz")
md5sums=('a2d29adb499f35a2d9a1ef0e31409160')

build() {
  cd "$srcdir/core-release-$pkgver"

  ./bootstrap.sh
  ./configure              \
    --prefix=/usr          \
    --with-startup=systemd
  make
}

package() {
  cd "$srcdir/core-release-$pkgver"
  make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
