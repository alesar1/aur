#

pkgname=neru-icon-newyear-theme
pkgver=1.0
pkgrel=1
pkgdesc="Christmas theme icons Neru"
arch=('any')
url="https://github.com/chistota/neru-icon-newyear-theme/"
license=('LGPLv3')
depends=()
replaces=(neru-icon-newyear-theme)
conflicts=()
source=("https://github.com/chistota/"${pkgname}"/archive/v"${pkgver}".tar.gz")
sha512sums=('bccacbdd05de2ee4fd50c6bd842c8266ccae3fc120d624aae7bbdebd9b3f5ac7ca8bb123a34d085a5c35d5e141d62eb79a55a2c052d39d5f84a0a3bf1f2833a8')


package() {
tar -xzf v${pkgver}.tar.gz -C ${srcdir}
	cd "$srcdir"/"${pkgname}-${pkgver}"
	install -d "$pkgdir/usr/share/icons"
	install -d "$pkgdir/usr/share/doc/${pkgname}"
	install -d "$pkgdir/usr/share/licenses/${pkgname}"

	cp -r {'neru-newyear-dark','neru-newyear-light'} "$pkgdir"/usr/share/icons/

	cp -r LICENSE "$pkgdir"/usr/share/licenses/"${pkgname}"/
	cp -r {README.md,AUTHORS,screenshot.svg} "$pkgdir"/usr/share/doc/"${pkgname}"/
}