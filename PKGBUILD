# Maintainer: Douglas Chimento <dchimento @ gmail.com>
pkgname=pro-bitcoin-git
pkgver=v22.0.r4.g9a1c9405a
pkgrel=1
arch=('aarch64' 'armv6h' 'armv7h' 'i686' 'x86_64')
url="https://pro-bitcoin.io"
depends=('boost' 'boost-libs' 'zeromq' 'libevent')
optdepends=('bitcoin-core' 'bitcoin-daemon')
checkdepends=('python')
makedepends=('autoconf' 'automake' 'binutils' 'libtool' 'm4' 'make' 'pkg-config' 'systemd' 'prometheus-cpp-git')
pkgdesc="Prometheus enabled bitcoin node"
url="https://github.com/dougEfresh/pro-bitcoin.git"
license=('MIT')
makedepends=('cmake' 'clang')
backup=('etc/bitcoin/pro-bitcoin.conf')
source=("${pkgname}::git+https://github.com/dougEfresh/pro-bitcoin.git"
	pro-bitcoin.conf
        pro-bitcoind.service
        pro-bitcoin-sysusers.conf
        pro-bitcoin-core-01-systemd-sysusers.hook
	pro-bitcoin-core-02-chown.hook)
sha256sums=('SKIP'
	    '413b478091bfb75c9221ae0a219618796be9f2ef06cec69252e473190074d85b'
            '3612464934304423ad190802174992982b30c1c179cfea01d49389c0179fb77b'
            'f126b4824e43d9760ab2021460a37d859986f07e1ac9245ee4938e832739f73a'
            '0ebed82d37ea78cbfc6fbbb3e5f38419efffded16d0e98b5d4d1bb0d75071f56'
            'c1341e6cf6c511c3f1f91a39c5cccabd72549f8e064902f5f35b1f6fe8dff128')
_nproc=$(($(nproc)-1))

build() {
  msg2 'Building...'
  cd "$srcdir/${pkgname}"
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib/bitcoin \
    --sysconfdir=/etc \
    --sharedstatedir=/usr/share/bitcoin \
    --localstatedir=/var/lib/bitcoin \
    --enable-hardening \
    --with-gui=no \
    --disable-wallet \
    --disable-tests \
    --disable-gui-tests \
    --disable-bench \
    --without-miniupnpc \
    --with-gnu-ld
  make -j$_nproc
}


pkgver() {
  cd "$srcdir/${pkgname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

check() {
  cd "$srcdir/${pkgname}"
  make -j$_nproc check
}

package() {
  cd "$srcdir/${pkgname}"
  msg2 'Installing essential directories'
  install -dm 700 "$pkgdir/etc/bitcoin"

  msg2 'Installing bitcoin.conf...'
  install -Dm 600 "$srcdir/pro-bitcoin.conf" -t "$pkgdir/etc/bitcoin"

  msg2 'Installing bitcoind.service...'
  install -Dm 644 "$srcdir/pro-bitcoind.service" -t "$pkgdir/usr/lib/systemd/system"

  msg2 'Installing bitcoin-sysusers.conf...'
  install -Dm 644 "$srcdir/pro-bitcoin-sysusers.conf" "$pkgdir/usr/lib/sysusers.d/pro-bitcoin.conf"
    
  msg2 'Installing bitcoin...'
  install -Dm 755 "$srcdir/$pkgname/src/bitcoind" "$pkgdir/usr/bin/pro-bitcoind"

  msg2 'Installing pacman hooks...'
  install -Dm 644 "$srcdir"/*.hook -t "$pkgdir/usr/share/libalpm/hooks"
}
