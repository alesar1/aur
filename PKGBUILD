# Maintainer: yjun <jerrysteve1101@gmail.com>

pkgname=nodemcu-pyflasher
pkgver=4.0
pkgrel=2
pkgdesc="Self-contained NodeMCU flasher with GUI based on esptool.py and wxPython."
arch=("x86_64")
url="https://github.com/marcelstoer/nodemcu-pyflasher"
license=('MIT')
depends=('pyinstaller'
		 'python-wxpython'
		 'esptool')
source=("${pkgname}.tar.gz::https://github.com/marcelstoer/${pkgname}/archive/v${pkgver}.tar.gz"
		"remove-create-dmg.patch"
		"NodeMCU-PyFlasher.desktop")
sha256sums=('728dcad6264bce7a4dddfdd627a95557e0e779ed6bd48d9773766eb6b9af4790'
            '260d5e1f6aa887680dfd0d00d248ecac70d7251f511049e0f0c745447b009975'
            'd91b21677f659e5ea009a27796938e31517a1ecf281a0b1d9a523834e41ceb0b')
prepare() {
	cd "$pkgname-$pkgver"
	patch --forward --strip=1 --input="$srcdir/remove-create-dmg.patch"
}
build() {
	cd "$pkgname-$pkgver"
	./build.sh
}
package() {
	cd "$pkgname-$pkgver"
	install -Dm755 dist/NodeMCU-PyFlasher ${pkgdir}/usr/bin/NodeMCU-PyFlasher
	install -Dm644 images/icon-64.png  ${pkgdir}/usr/share/pixmaps/NodeMCU-PyFlasher.png
	install -Dm644 ${srcdir}/NodeMCU-PyFlasher.desktop  ${pkgdir}/usr/share/applications/NodeMCU-PyFlasher.desktop
}
