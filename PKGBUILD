# Maintainer: Jonathan Kirszling <jkirsz@gmail.com>
pkgname=upaste
pkgrel=1
pkgver=0.1.2
pkgdesc="Paste and upload files on x0.at"
arch=('any')
url="https://github.com/eoli3n/$pkgname"
license=('UNLICENSE')
optdepends=('wl-clipboard: Command-line copy/paste utilities for Wayland',
            'xclip: Command line interface to the X11 clipboard')
depends=('curl')
source=("up"
		"UNLICENSE")
sha256sums=("4e668585d0424b86aa98f7349177339966955adb1aeb39ca34205c468d5b3c1c"
"6b0382b16279f26ff69014300541967a356a666eb0b91b422f6862f6b7dad17e")

package() {
	install -Dm755 'up' "${pkgdir}/usr/bin/up"
	install -Dm644 'UNLICENSE' "${pkgdir}/usr/share/licenses/${pkgname}/UNLICENSE"
}
