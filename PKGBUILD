# Maintainer: piernov <piernov@piernov.org>

pkgname=ambiqsuite
pkgver=2.5.1
pkgrel=2
pkgdesc='SDK for Ambiq MCU'
arch=('any')
url='https://ambiq.com/'
license=('unknown')
options=(!strip)
source=("https://ambiq.com/wp-content/uploads/2020/09/AmbiqSuite-R${pkgver}.zip")
md5sums=('83643c29b5e42c670009194b70791b71')

package() {
	cd "AmbiqSuite-R${pkgver}"
	install -dm755 "$pkgdir/opt/$pkgname"
	cp -dpr --no-preserve=ownership * "${pkgdir}/opt/$pkgname"

	chmod +x "$pkgdir/opt/$pkgname/tools/apollo3_scripts/create_cust_image_blob.py"
	chmod +x "$pkgdir/opt/$pkgname/tools/apollo3_scripts/create_cust_wireupdate_blob.py"
	cp "$pkgdir/opt/$pkgname/tools/apollo3_scripts/keys_info0.py" "$pkgdir/opt/$pkgname/tools/apollo3_scripts/keys_info.py"


	install -Dm644 docs/licenses/* -t "$pkgdir/usr/share/licenses/${pkgname}"
	install -m644 AM-BSD-EULA.txt "$pkgdir/usr/share/licenses/${pkgname}"
}
