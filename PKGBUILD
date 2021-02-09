# Maintainer: Tom Zander

pkgname=flowee
pkgver=2021.01.1
pkgrel=1
pkgdesc="Flowee provides the shortest path to Bitcoin Cash"
arch=('x86_64' 'aarch64')
url="https://flowee.org/"
license=('GPL3')
depends=('boost-libs' 'libevent' 'openssl')
makedepends=('boost' 'cmake' 'pkgconf')
optdepends=('miniupnpc')
provides=('flowee-hub' 'flowee-libs')
backup=("etc/flowee/flowee.conf" "etc/flowee/rest-service.conf")
install=flowee.install
source=("https://gitlab.com/FloweeTheHub/thehub/-/archive/$pkgver/thehub-$pkgver.tar.gz"
    "flowee.logrotate"
    "flowee.conf")

sha256sums=("935615a9c278f5ee70b164aa0d4a76b991a94ada717a12ca0daeb76d50b1cc3d"
    "0438e1a44523aeb3bbecd60fd920ca7b2aacd267b5cf988ab77a44eb7c03929e"
    "59c1928ddb33fed1d4bf35df8fecd1dbdda0b308eac943503a2e3afb8c64bc89")

build() {
  mkdir -p build
  cd build
  cmake -Denable_gui=false -Dbuild_tests=true -DCMAKE_BUILD_TYPE=release -DCMAKE_INSTALL_PREFIX=$pkgdir/usr/ ../thehub-$pkgver
  make
}

check() {
    cd build/testing
    make check
}

package() {
  cd build
  make install
  cd "$pkgdir"
  mv usr/etc .
  chmod 775 etc/flowee
  mv etc/flowee/flowee.conf etc/flowee/flowee-example.conf
  install -Dm 664 "$srcdir/flowee.conf" -t "$pkgdir/etc/flowee"
  install -Dm 644 "$srcdir/flowee.logrotate" "$pkgdir/etc/logrotate.d/flowee"
  install -Dm 664 "$srcdir/thehub-$pkgver/support/logs.conf" -t "$pkgdir/etc/flowee"
  install -Dm 644 "$srcdir/thehub-$pkgver/support/thehub.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm 644 "$srcdir/thehub-$pkgver/support/indexer.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm 664 "$srcdir/thehub-$pkgver/support/indexer.conf" -t "$pkgdir/etc/flowee"
  install -Dm 644 "$srcdir/thehub-$pkgver/support/indexer.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm 644 "$srcdir/thehub-$pkgver/support/rest-service.conf" -t "$pkgdir/etc/flowee"
  install -Dm 644 "$srcdir/thehub-$pkgver/support/rest-service.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm 644 "$srcdir/thehub-$pkgver/support/bitcore-proxy.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm 644 "$srcdir/thehub-$pkgver/support/bitcore-proxy.conf" -t "$pkgdir/etc/flowee"
}
