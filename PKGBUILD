# Maintainer: bkacjios < blackops7799 at gmail dot com >

pkgname=inav-configurator
pkgver=2.0.0.rc3
pkgrel=1
pkgdesc="Crossplatform configuration tool for the INAV flight control system"
arch=('i686' 'x86_64')
url="https://github.com/iNavFlight/inav-configurator"
source=(https://github.com/iNavFlight/inav-configurator/archive/2.0.0-rc3.zip
        inav-configurator.desktop)
md5sums=('06308ebaa5bce67fdfebcc6aa2ed7940'
         'a84590640d45f59f9710480a9ac78a84')
provides=('inav-configurator')
conflicts=('inav-configurator')
options=(!strip)
license=('GPL3')
makedepends=('yarn')

build() {
	cd $pkgname-2.0.0-rc3
	yarn install

	if [[ "$CARCH" == "i686" ]]; then
		./node_modules/.bin/gulp --platform=linux32 release
	elif [[ "$CARCH" == "x86_64" ]]; then
	   ./node_modules/.bin/gulp --platform=linux64 release
	fi
}

package() {
	cd $pkgname-2.0.0-rc3/apps/inav-configurator/linux64/
	install -d "$pkgdir/opt/inav/inav-configurator/"
	cp -r * "$pkgdir/opt/inav/inav-configurator/"

	install -Dm644 "$srcdir/inav-configurator.desktop" "$pkgdir/usr/share/applications/inav-configurator.desktop"
	install -Dm644 "$srcdir/$pkgname-2.0.0-rc3/images/inav_icon_128.png" "$pkgdir/opt/inav/inav-configurator/icon/inav_icon_128.png"

	install -d "$pkgdir/usr/bin/"
	ln -s /opt/inav/inav-configurator/inav-configurator "$pkgdir/usr/bin/inav-configurator"
}