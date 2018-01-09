# Maintainer: Tomas Rychlik <tom@avocode.com>

pkgname=avocode
pkgrel=1
pkgver=2.17.2
pkgdesc="Export code, specs and images from PSD & Sketch designs"
url="http://avocode.com/"
provides=('avocode')
arch=('i686' 'x86_64')
license=('custom')
depends=(libxtst libnotify alsa-lib gtk2 gconf)
optdepends=('imagemagick: Preview generation')
makedepends=()
backup=()
install=avocode.install
source=("Avocode.desktop" "avocode-app-icon.png")
source_i686=("https://media.avocode.com/download/avocode-app/${pkgver}/avocode-${pkgver}-ia32-linux.zip")
source_x86_64=("https://media.avocode.com/download/avocode-app/${pkgver}/avocode-${pkgver}-linux.zip")
md5sums=('f1a87052b2356b2d4eede22cfc1eb2af'
         '96c2dd65a4a3ac5bcdba7426ade1960e')
md5sums_i686=('a7a80c7e0f18eafd25d70179491ecef9')
md5sums_x86_64=('5f7f41da93cde57e94545aa190853678')
package() {
	install -d "$pkgdir"/opt
	
	cp -R "$srcdir"/ "$pkgdir"/opt/avocode
	
	find "$pkgdir"/opt/avocode/ -type f -exec chmod 644 {} \;
	
	rm "${pkgdir}/opt/avocode/Avocode.desktop" "${pkgdir}/opt/avocode/avocode-app-icon.png" "${pkgdir}"/opt/avocode/avocode-*.zip
	
	chmod 755 "$pkgdir"/opt/avocode/avocode

	install -d "$pkgdir"/usr/bin
	ln -s ../../opt/avocode/avocode "$pkgdir"/usr/bin/avocode

    install -D -m644 "Avocode.desktop"           "${pkgdir}/usr/share/applications/Avocode.desktop"
    install -D -m644 "avocode-app-icon.png"      "${pkgdir}/usr/share/pixmaps/avocode-app-icon.png"
}
