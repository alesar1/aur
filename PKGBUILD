# Maintainer: hashworks <mail@hashworks.net>

pkgname=prismatik
pkgver=5.11.2
pkgrel=1
pkgdesc="A controller for usb driven LED backlights"
arch=('x86_64')
url="https://github.com/woodenshark/Lightpack"
license=('GPL3')
depends=('qt5-serialport' 'hicolor-icon-theme')
provides=('lightpack')
install=prismatik.install
source=("${url}/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        "fix_includes.patch")
sha256sums=('5f3662086965270476b8ea2c014aa0b958afb15b58b5f3000e5f7280386b3022'
            '14c688737d8ba5f128492380c21f9b78c351e59b99375fdc143df52bc2a98781')

prepare() {
	cd "Lightpack-${pkgver}"
	patch --forward --strip=1 --input="${srcdir}/fix_includes.patch"
	cd Software
	qmake -r
}

build() {
	cd "Lightpack-${pkgver}/Software"
	make
}

package() {
	cd "Lightpack-${pkgver}/Software"
	install -Dm755 src/bin/Prismatik "${pkgdir}/usr/bin/prismatik"
	install -Dm644 dist_linux/deb/etc/udev/rules.d/93-lightpack.rules "${pkgdir}/etc/udev/rules.d/93-lightpack.rules"
	install -Dm644 dist_linux/deb/usr/share/icons/hicolor/22x22/apps/prismatik-on.png "${pkgdir}/usr/share/icons/hicolor/22x22/apps/prismatik-on.png"
	install -Dm644 dist_linux/deb/usr/share/icons/Prismatik.png "${pkgdir}/usr/share/icons/Prismatik.png"
	install -Dm644 dist_linux/deb/usr/share/applications/prismatik.desktop "${pkgdir}/usr/share/applications/prismatik.desktop"
	install -Dm644 dist_linux/deb/usr/share/pixmaps/Prismatik.png "${pkgdir}/usr/share/pixmaps/Prismatik.png"
	install -Dm644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
