# Maintainer: Grey Christoforo <first name [at] last name [dot] net>
# Contributer: Stefan Seemayer <stefan@seemayer.de>
pkgname=tsmclient
pkgver=7.1.4
pkgrel=1
pkgdesc="IBM Tivoli Storage Manager Client"
arch=('x86_64')
url="http://www-03.ibm.com/software/products/en/tivostormana/"
license=('proprietary')
depends=()
makedepends=(rpmextract)
checkdepends=()
optdepends=('jre8-openjdk: support for dsmj java gui')
provides=()
conflicts=()
install=
options=(!strip)

source=(ftp://public.dhe.ibm.com/storage/tivoli-storage-management/maintenance/client/v7r1/Linux/LinuxX86/BA/v${pkgver//.}/${pkgver}.0-TIV-TSMBAC-LinuxX86.tar
	dsmcad.service)

sha1sums=('acecc4cc3fbe0f3d5cf9bd2cd9339534214b091d'
          'd4702d06339da46e998980e0d145e1f3e92f30aa')

prepare() {
	cd "$srcdir/"
	for rpmfile in *.rpm; do
		echo "Extracting '$rpmfile'"
		rpmextract.sh $rpmfile
	done
}

package() {
	cd "$srcdir/"

	#cp -r "$srcdir/etc" "$pkgdir/"
	cp -r "$srcdir/opt" "$pkgdir/"
	cp -r "$srcdir/usr" "$pkgdir/"
        mv "$pkgdir/usr/lib64" "$pkgdir/usr/lib"

	ln -s "/opt/tivoli/tsm/client/lang/EN_US" "$pkgdir/opt/tivoli/tsm/client/ba/bin/EN_US"

	install -Dm 644 "$srcdir/dsmcad.service" "$pkgdir/usr/lib/systemd/system/dsmcad.service"

	# Install ld.so.conf.d file so that shared libraries can be found
	#install -Dm 644 "$srcdir/tsmclient.conf" "$pkgdir/etc/ld.so.conf.d/tsmclient.conf"
}
