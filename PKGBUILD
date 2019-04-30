# Maintainer: Frederic Van Assche <frederic@fredericva.com>

pkgname=sigasi
pkgver=4.3.2
pkgrel=1
pkgdesc='IDE for VHDL editing and browsing'
arch=('x86_64')
url='http://www.sigasi.com/'
license=('custom')
source=('http://download.sigasi.com/updates/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip'
        'sigasi.desktop')
depends=('glib2')
makedepends=('unzip')
options=('!strip')
sha256sums=('81f8c3ff1b8e5537b7e1243e921689b0e7fac42b33ea8e7da9513a5837176ec2'
            'a8084b3146904c2accd5946e2aa493e133c56e4f8f0d7f582a0edcb080a7958c')

package() {
	cd "${srcdir}/"

	install -d -m755 "${pkgdir}/opt/"
	install -d -m755 "${pkgdir}/usr/share/applications/"
	install -d -m755 "${pkgdir}/usr/share/icons/hicolor/128x128/apps/"
	install -d -m755 "${pkgdir}/usr/bin/"
	cp -a sigasi "${pkgdir}/opt/"

	unzip -qjo "sigasi/plugins/com.sigasi.hdt.product.plugin_${pkgver}*.jar" icons/si128.png
	install -m644 si128.png "${pkgdir}/usr/share/icons/hicolor/128x128/apps/sigasi.png"
	install -m644 "${srcdir}/sigasi.desktop" "${pkgdir}/usr/share/applications/"

	install -D -m644 sigasi/license.txt "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"

	rm -rf "${pkgdir}/opt/sigasi/jre"

	cd "${pkgdir}/usr/bin/"
	ln -s ../../opt/sigasi/sigasi sigasi
}
