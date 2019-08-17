# Maintainer: Jiří Prokop <jprokop@synaptiko.cz>

pkgname=zsa-wally
pkgver=1.1.1
pkgrel=1
pkgdesc="Wally: Flash your ZSA Keyboard the EZ way."
arch=('i686' 'x86_64')
url="https://github.com/zsa/wally"
license=('MIT')
depends=('gtk3' 'webkit2gtk' 'libusb')
provides=('wally' 'wally-cli')
source=('https://github.com/zsa/wally/releases/download/1.1.1-linux/wally'
	'https://github.com/zsa/wally/releases/download/1.1.1-linux/wally-cli'
	'50-wally.rules'
)
sha256sums=('ef3c743bb3d15f6f5b01f6cddd189a4761be12175d63e852651dbb6653e21d0f'
	'b968aeba6f17d0873b26371307179dc02cd360a4cfa74732ab5c814607479d82'
	'SKIP'
)

package() {
	install -Dm644 50-wally.rules "$pkgdir"/etc/udev/rules.d/50-wally.rules
	install -Dm755 wally "$pkgdir"/usr/bin/wally
	install -Dm755 wally-cli "$pkgdir"/usr/bin/wally-cli
}
