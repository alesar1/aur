# Maintainer: Stephen Argent <steve [at] tuxcon [dot] com>

pkgname=('byteball')
pkgver=2.5.0
pkgrel=1
pkgdesc="Byteball cryptocurrency wallet client."
arch=('x86_64')
url='byteball.org'
license=('MIT')
options=('!strip')
depends=('binutils'
	 'unzip'
	 'freetype2'
	 'nss'
	 'gconf'
	 'fontconfig'
	 'pango'
	 'libxi'
	 'libxcursor'
	 'libxss'
	 'libxcomposite'
	 'alsa-lib'
	 'libxdamage'
	 'libxtst'
	 'atk'
	 'libxrandr'
	 'libcups'
	 'gtk2'
	 'libexif')
source=(https://github.com/${pkgname}/${pkgname}/releases/download/v${pkgver}/byteball-linux64.zip)
sha256sums=('0165bbeedbe0c633b77db8bf7464faee57214b4649401c0bd9be25d52538961d')
install="$pkgname.install"
package() {
	unzip -o "${srcdir}/byteball-linux64.zip"
	install -dm755 "$pkgdir/usr/share/byteball"
	install -dm755 "$pkgdir/usr/share/applications"
	install -Dm644 "$srcdir/byteball-linux64/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
	cp -R ${srcdir}/byteball-linux64/* ${pkgdir}/usr/share/byteball/
	chmod -R o+r "$pkgdir/usr/share/"
	chmod 755 "$pkgdir/usr/share/byteball/Byteball"
}
