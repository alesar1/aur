# Maintainer: David Wu <xdavidwuph@gmail.com>

pkgname=intel-ipsec-mb
pkgver=0.54
pkgrel=1
pkgdesc='Intel(R) Multi-Buffer Crypto for IPsec Library'
url='https://github.com/intel/intel-ipsec-mb'
arch=('x86_64')
license=('BSD')
makedepends=('nasm')
source=("https://github.com/intel/intel-ipsec-mb/archive/v${pkgver}.tar.gz")
sha512sums=('9e19dee571f7dd72795154a954aa31e21cc5ddf595cb202b211a0c066826d2d4eb84a3297cb89d9cf00a311f256b8128ec54f828a1ab969956af53e6e8a508d9')

build() {
	cd "${pkgname}-${pkgver}"
	make
}

package() {
	cd "${pkgname}-${pkgver}"
	make install PREFIX="$pkgdir/usr" NOLDCONFIG=y
}
