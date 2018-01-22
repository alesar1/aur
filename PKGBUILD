pkgname=rippled
pkgrel=1
pkgver=0.81.0
pkgdesc="Ripple peer-to-peer network daemon"
arch=('i686' 'x86_64')
url="https://github.com/ripple/rippled"
license=('custom:ISC')
backup=("etc/ripple/rippled.cfg" "etc/ripple/validators.txt")
depends=('protobuf' 'boost-libs<1.66')
makedepends=('scons' 'boost<1.66')
source=("https://github.com/ripple/rippled/archive/$pkgver.tar.gz"
	"rippled.service")
sha256sums=('88ede97c5d31b18cd51dad2d2ebf8fe9dad5b8ab98e0eca3e4226b88d8fab34f'
	'907d131e32cadef5b3b6a4095ff1b3a7cbd1af240e147fe64f92eba663d15836')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	scons
}

check() {
	cd "$srcdir/$pkgname-$pkgver"
	build/rippled --unittest
}

package() {
	install -D -m644 rippled.service "${pkgdir}/usr/lib/systemd/system/rippled.service"
	cd "$srcdir/$pkgname-$pkgver"
	install -D -m644 LICENSE "${pkgdir}/usr/share/lice1nses/$pkgname/LICENSE"
	install -D build/rippled "${pkgdir}/usr/bin/rippled"
	install -D -m644 doc/rippled-example.cfg "${pkgdir}/etc/ripple/rippled.cfg"
	install -D -m644 doc/validators-example.txt "${pkgdir}/etc/ripple/validators.txt"
}
