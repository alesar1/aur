# Maintainer: Vain <aurmaint1 on host: uninformativ dot de>
# Based on PKGBUILD for iscan-plugin-gt-x770.

if [ "$CARCH" = "x86_64" ]
then
	_arch=$CARCH
	md5sums=('9e36fd80b1f8ffa3f658b6a025d5e186')
else
	_arch=i386
	md5sums=('0a3a83dbbb2630c5e9453cc78983ab81')
fi

pkgname=iscan-plugin-gt-s600
pkgver=2.1.2_1
pkgrel=2
pkgdesc="iscan plugin for Epson Perfection V10."
arch=('i686' 'x86_64')
url="http://www.avasys.jp/lx-bin2/linux_e/spc/DL2.do"
license=('custom:AVASYS')
depends=('iscan')
makedepends=('rpmextract')
install=gt-s600.install
source=(http://linux.avasys.jp/drivers/iscan-plugins/$pkgname/${pkgver%_*}/$pkgname-${pkgver//_/-}.$_arch.rpm)

build() {
	cd "$srcdir"
	rpmextract.sh "$pkgname-${pkgver//_/-}.$_arch.rpm"
	mv usr "$pkgdir"

	if [ "$CARCH" = "x86_64" ]
	then
		mv "$pkgdir"/usr/lib{64,}
	fi

	install -m 644 -D \
		"$pkgdir"/usr/share/doc/iscan-plugin-gt-s600-2.1.2/AVASYSPL.en.txt \
		"$pkgdir"/usr/share/licenses/"$pkgname"/COPYING
}
