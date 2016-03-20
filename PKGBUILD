# Maintainer: superlex


# Based on Parabola GNU/Linux-libre iceweasel-libre PKGBUILD :

# Maintainer: André Silva <emulatorman@parabola.nu>
# Contributor: Márcio Silva <coadde@parabola.nu>
# Contributor: Luke Shumaker <lukeshu@sbcglobal.net>
# Contributor: fauno <fauno@kiwwwi.com.ar>
# Contributor: Figue <ffigue@gmail.com>

_lang=it
_language=Italian
_url=https://ftp.mozilla.org/pub/mozilla.org/firefox/releases

pkgname=iceweasel-i18n-it
pkgver=45.0.1
pkgrel=1
pkgdesc="$_language language pack for Iceweasel"
arch=('any')
url="https://wiki.debian.org/it/Iceweasel"
license=('MPL' 'GPL')
depends=("iceweasel>=$pkgver")
makedepends=('unzip' 'zip')
source=("$_url/$pkgver/linux-$CARCH/xpi/$_lang.xpi"
		'brand.dtd'
		'brand.properties')

if [ "$CARCH" = "x86_64" ]; then
    sha512sums=('71fdd7b40cc90097f60d286b1d1f28e04340f88c960edff8c79955431c46b505f20c32f5e2ae7d8ea141f1116c0e2f72af0ca00d44999940cb4486311a291a1f'
				'ce454355d904384381e35c390dbad634d617d17387debeb00b4e737a7b4fa665b94d40762a415236519b7a44f8b2066aeab9a50a34f1155c4b272e263ce19027'
           		'1148215c777fde594362393751e9ac3c1a0c2cf6c87e1bb48bdea6eafd35ab027e357357ee8bdef143fae78c01471561724fe33ee86453ae2f36db3be2f52829')
else
    sha512sums=('3c658789207ff383c3040145a163745493858425703716930941d8c0439b119c6a0ff2e14a9cafac45d8c86e198dee3aa7b4f9d8c7a9df2d0f6be562d0b462cd'
				'ce454355d904384381e35c390dbad634d617d17387debeb00b4e737a7b4fa665b94d40762a415236519b7a44f8b2066aeab9a50a34f1155c4b272e263ce19027'
          	 	'1148215c777fde594362393751e9ac3c1a0c2cf6c87e1bb48bdea6eafd35ab027e357357ee8bdef143fae78c01471561724fe33ee86453ae2f36db3be2f52829')
fi

package() {
	cd "$srcdir"
	rm "$_lang.xpi"
	install -vDm644 "$srcdir/brand.dtd" "$srcdir/browser/chrome/$_lang/locale/branding"
	rm "$srcdir/brand.dtd"
	install -vDm644 "$srcdir/brand.properties" "$srcdir/browser/chrome/$_lang/locale/branding"
	rm "$srcdir/brand.properties"
  
	sed -i -e 's/firefox/iceweasel/' "$srcdir/install.rdf"
	sed -i 's|Firefox|Iceweasel|
         ' "$srcdir/browser/chrome/$_lang/locale/$_lang/devtools/client/sourceeditor.properties" \
           "$srcdir/browser/chrome/$_lang/locale//$_lang/devtools/client/toolbox.dtd" \
           "$srcdir/browser/chrome/$_lang/locale/$_lang/devtools/client/webide.dtd" \
           "$srcdir/browser/chrome/$_lang/locale/$_lang/devtools/client/webide.properties"
	rm -rv "$srcdir/chrome/$_lang/locale/$_lang/global-platform"/{mac,win}

	zip -r "langpack-$_lang@iceweasel.mozilla.org.xpi" .
	install -vDm644 "langpack-$_lang@iceweasel.mozilla.org.xpi" "$pkgdir/usr/lib/iceweasel/browser/extensions/langpack-$_lang@iceweasel.mozilla.org.xpi"
}
