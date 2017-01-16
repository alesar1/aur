# Maintainer: Gui||aume <michaudg@gmail.com>

pkgname=rocketchat-client
pkgver=2.2.0
pkgrel=3
pkgdesc="The Ultimate Open Source Web Chat Platform"
arch=('x86_64')
license=('The MIT License (MIT)')
url="https://rocket.chat"
options=()

source_x86_64=("https://github.com/RocketChat/Rocket.Chat.Electron/releases/download/${pkgver}/rocketchat_${pkgver}_amd64.deb")
md5sums_x86_64=('497d01b354fd05ab69d317e82e91d63b')

depends=('libnotify' 'gconf')
optdepends=()

package() {
	cd "${srcdir}"

	tar xf data.tar.xz -C "${pkgdir}"

	chmod 755 $pkgdir/opt
	chmod 755 $pkgdir/usr
	chmod 755 $pkgdir/usr/share
	chmod 755 $pkgdir/usr/share/applications

	mkdir -p "$pkgdir/usr/local/bin"
	ln -s /opt/Rocket.Chat+/rocketchat ${pkgdir}/usr/local/bin
}

