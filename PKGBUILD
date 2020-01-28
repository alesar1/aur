# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Corax <cor dot ax26 at gmail dot com>
pkgname=caja-mediainfo-tab
pkgver=1.0.1
pkgrel=1
pkgdesc="View media information from the properties tab"
arch=('any')
url="https://github.com/linux-man/caja-mediainfo-tab"
license=('GPL3')
depends=('python-mediainfodll' 'python-caja')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('86a6bec3be90c60fd514dec18068dd50f8465035969baf7ee5aa6681b5b7d971')

package() {
	cd "$pkgname-$pkgver"
    install -d "$pkgdir/usr/share/caja-python/extensions/$pkgname"
    cp -a "caja-extension/$pkgname/locale/." \
    	"$pkgdir/usr/share/caja-python/extensions/$pkgname/locale"

    install -Dm644 "caja-extension/$pkgname.py" -t \
    	"$pkgdir/usr/share/caja-python/extensions"
}
