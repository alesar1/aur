# Maintainer: Ysblokje <ysblokje at gmail dot com>
pkgname=('lib32-gamemode')
_pkgname=('gamemode')
pkgver=1.3.1
pkgrel=3
pkgdesc="A daemon/lib combo for Linux that allows games to request a set of optimisations be temporarily applied to the host OS"
arch=('x86_64')
url="https://github.com/FeralInteractive/gamemode.git"
license=('BSD 3-Clause License (Revised)')
depends=('gamemode' 'lib32-glibc')
makedepends=('meson' 'ninja' 'pkg-config' 'lib32-systemd')
source=("https://github.com/FeralInteractive/gamemode/releases/download/$pkgver/$_pkgname-$pkgver.tar.xz")
sha256sums=('fa0797ab61c255206ec90eec7d404b760ac92c932b6550296ced8686c532e67e')

build() {
  export CFLAGS=-m32
  export CXXFLAGS=-m32
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  
  meson ${_pkgname}-$pkgver build --prefix /usr \
    -Dwith-daemon=false -Dwith-examples=false -Dwith-systemd=false --libdir lib32
  ninja -C build
}

package() {
  DESTDIR=$pkgdir ninja -C build install
  rm -rf $pkgdir/usr/include 
  install -m644 -Dt "${pkgdir}/usr/share/licenses/${pkgname}" ${_pkgname}-${pkgver}/LICENSE.txt
}

