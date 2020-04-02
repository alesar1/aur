# Maintainer: acxz <akashpatel2008 at yahoo dot com>
# Contributor: Jakub Okoński <jakub@okonski.org>
# Contributor: Olaf Leidinger <oleid@mescharet.de>
# Contributor: Ranieri Althoff <ranisalt+aur at gmail.com>

pkgname=hsakmt-roct
pkgver=3.3.0
pkgrel=1
pkgdesc="Radeon Open Compute Thunk Interface"
arch=('x86_64')
url='https://github.com/RadeonOpenCompute/ROCT-Thunk-Interface'
license=('MIT')
depends=('numactl' 'pciutils')
makedepends=('cmake')
provides=("roct-thunk-interface=$pkgver")
replaces=('roct-thunk-interface')
source=("$pkgname.tar.gz::$url/archive/roc-$pkgver.tar.gz")
sha256sums=('2cabe9d2cfa72031c05d11290837c476182e72d8dec2049298f691143fdd212b')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/opt/rocm "ROCT-Thunk-Interface-roc-$pkgver"
  make all build-dev
}

package() {
  make DESTDIR="$pkgdir" install install-dev

  install -Dm644 "ROCT-Thunk-Interface-roc-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -d "$pkgdir/etc/ld.so.conf.d"
  cat << EOF > "$pkgdir/etc/ld.so.conf.d/$pkgname.conf"
/opt/rocm/lib
EOF
}
