# Maintainer:  twa022 <twa022 at gmail dot com>

_pkgname=basilisk
pkgname=${_pkgname}-bin
epoch=1
pkgver=52.9.2018.05.15
pkgrel=1
pkgdesc="Basilisk Browser from the makers of Pale Moon"
url="http://www.basilisk-browser.org"
arch=('x86_64')
license=('GPL')
depends=('gtk2' 'gtk3' 'dbus-glib' 'libxt' 'mime-types' 'nss' 'alsa-lib' 'icu')
optdepends=('hunspell: spell checker and morphological analyzer'
            'hyphen: library for hyphenation and justification'
            'ffmpeg: record, convert, and stream audio and video')
source=("http://us.basilisk-browser.org/release/basilisk-latest.linux64.tar.bz2"
        'basilisk.desktop')
sha256sums=('59823780471a4d3f2f23700a12b727d7437c2fde41ab19c3e5688eb2b5ffefbe'
            'c4223e966bc404467fece4a524cc2db3e99c12455087da2ade9a47b8d99d3a45')

pkgver() {
	cd "${srcdir}"/basilisk
	./basilisk --version | grep -o -E '[0-9\.]+$'
}

package() {
	mkdir -p "$pkgdir"/opt
	cp -ar --no-preserve=ownership "$srcdir"/basilisk "$pkgdir"/opt
	mkdir -p "${pkgdir}"/usr/bin
	cat > "${pkgdir}"/usr/bin/basilisk <<- __EOF__
		#!/bin/bash
		/opt/basilisk/basilisk "\$@"
	__EOF__
	chmod 755 "${pkgdir}"/usr/bin/basilisk
	install -Dm644 "${srcdir}"/basilisk.desktop "${pkgdir}"/usr/share/applications/basilisk.desktop
	install -Dm644 "${srcdir}"/basilisk/browser/icons/mozicon128.png "${pkgdir}"/usr/share/pixmaps/basilisk.png
}
