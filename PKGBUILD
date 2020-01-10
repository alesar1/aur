pkgname=xmr-stak-rx
pkgver=1.0.4
pkgrel=1
pkgdesc="Unified All-in-one Monero miner (no cuda)"
arch=('x86_64')
url="https://github.com/fireice-uk/xmr-stak"
license=('GPL3')
makedepends=('git' 'cmake' 'opencl-headers')
depends=('libmicrohttpd' 'openssl' 'hwloc' 'ocl-icd')
source=("$pkgname-$pkgver.tar.gz::https://github.com/fireice-uk/xmr-stak/archive/$pkgver-rx.tar.gz"
	'xmr-stak-rx.service')
sha256sums=('f2a84cbb0fa20dec71c59bcc7c3fa63ff119dc5d4c168b4ec5a5dba579b93f05'
            'a2feac52177bc7ac2f2f3cc846c19fd817b8962a2e4758b66c7954228536fd58')

build() {
    cd "$srcdir/xmr-stak-$pkgver-rx"
    rm -rf build
    mkdir build
    cd build
    cmake .. \
	-DCUDA_ENABLE=OFF \
	-DCMAKE_BUILD_TYPE=Plain
    make VERBOSE=1
}

package() {
    cd "$srcdir/xmr-stak-$pkgver-rx/build"

    install -D -m755 "bin/xmr-stak-rx" -t "$pkgdir/usr/bin/"
    install -D -m644 "bin/libxmrstakrx_opencl_backend.so" -t "$pkgdir/usr/lib"

    install -m755 -d ${pkgdir}/usr/lib/systemd/system
    install -m644  $startdir/xmr-stak-rx.service ${pkgdir}/usr/lib/systemd/system

    install -m755 -d ${pkgdir}/etc/xmr-stak-rx
}
