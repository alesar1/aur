# Maintainer: bkacjios < blackops7799 at gmail dot com >

pkgname=inav-configurator
pkgver=2.2.0
pkgrel=1
pkgdesc="Crossplatform configuration tool for the INAV flight control system"
arch=('i686' 'x86_64')
url="https://github.com/iNavFlight/inav-configurator"
source=(https://github.com/iNavFlight/inav-configurator/archive/2.2.0.zip
        inav-configurator.desktop)
md5sums=('edf3cd2c9c228a90159f98d766e2ceae'
         'SKIP')
provides=('inav-configurator')
conflicts=('inav-configurator')
options=(!strip)
license=('GPL3')
makedepends=('yarn')

build() {
	cd $pkgname-$pkgver
	yarn install

	if [[ "$CARCH" == "i686" ]]; then
		./node_modules/.bin/gulp --platform=linux32 release
	elif [[ "$CARCH" == "x86_64" ]]; then
	   ./node_modules/.bin/gulp --platform=linux64 release
	fi
}

package() {
	cd $pkgname-$pkgver/apps/inav-configurator/linux64/
	install -d "$pkgdir/opt/inav/inav-configurator/"
	cp -r * "$pkgdir/opt/inav/inav-configurator/"

	install -Dm644 "$srcdir/inav-configurator.desktop" "$pkgdir/usr/share/applications/inav-configurator.desktop"
	install -Dm644 "$srcdir/$pkgname-$pkgver/images/inav_icon_128.png" "$pkgdir/opt/inav/inav-configurator/icon/inav_icon_128.png"

	install -d "$pkgdir/usr/bin/"
	ln -s /opt/inav/inav-configurator/inav-configurator "$pkgdir/usr/bin/inav-configurator"

	echo 'Dont forget to add your user into uucp group "sudo usermod -aG uucp YOUR_USERNAME" for serial access'
}