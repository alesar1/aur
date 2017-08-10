# Maintainer:  Lukas K. <lukas@carrotIndustries.net>

pkgname=bitstream
pkgver=1.2
pkgrel=1
pkgdesc="biTStream is a set of C headers allowing a simpler access to binary structures such as specified by MPEG, DVB, IETF, SMPTE, IEEE, SCTE, etc."
arch=('any')
url="http://www.videolan.org/developers/bitstream.html"
license=('MIT')
#depends=('libusb' 'readline' 'libusb-compat')
source=(https://get.videolan.org/bitstream/$pkgver/$pkgname-$pkgver.tar.bz2)

md5sums=('c4b2dbd84eb5799f1525eb9a4e01dc56')

package() {
	cd $srcdir/${pkgname}-${pkgver}
	make PREFIX=$pkgdir/usr install
}
