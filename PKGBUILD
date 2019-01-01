# Maintainer: bkacjios < blackops7799 at gmail dot com >

pkgname=inav-configurator-bin
pkgver=2.0.0
pkgrel=3
pkgdesc="Crossplatform configuration tool for the INAV flight control system"
arch=('i686' 'x86_64')
url="https://github.com/iNavFlight/inav-configurator"

source_x86_64=(https://github.com/iNavFlight/inav-configurator/releases/download/2.0.0/INAV-Configurator_linux64_2.0.0.zip
        inav-configurator.desktop
        inav_icon_128.png)

md5sums_x86_64=('c58670297d29951fc46ced8c1c5e904d'
         'SKIP'
         '2c94429c7b2fc0cc78ead5d840f3dd57')

source_i686=(https://github.com/iNavFlight/inav-configurator/releases/download/2.0.0/INAV-Configurator_linux32_2.0.0.zip
        inav-configurator.desktop
        inav_icon_128.png)

md5sums_i686=('75cc35c84743a8e7deb9c5a272351018'
         'SKIP'
         '2c94429c7b2fc0cc78ead5d840f3dd57')

provides=('inav-configurator')
conflicts=('inav-configurator')
options=(!strip)
license=('GPL3')

package() {
	mkdir -p "$pkgdir/opt/inav"
	mkdir -p "$pkgdir/usr/bin"
	install -Dm644 "$srcdir/inav-configurator.desktop" "$pkgdir/usr/share/applications/inav-configurator.desktop"
	cp -dpr --no-preserve=ownership "$srcdir/INAV Configurator" "$pkgdir/opt/inav/inav-configurator"
	install -Dm644 "$srcdir/inav_icon_128.png" "$pkgdir/opt/inav/inav-configurator/icon/inav_icon_128.png"
	chmod +x "$pkgdir/opt/inav/inav-configurator/inav-configurator"
	ln -s "$pkgdir/opt/inav/inav-configurator/inav-configurator" "$pkgdir/usr/bin/inav-configurator"
}