# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=aminal-bin
pkgver=Nightly.develop.2020.01.26.4033a8b
pkgrel=2
pkgdesc='A modern cross-platform terminal emulator in Go'
arch=('x86_64')
url="https://github.com/liamg/aminal"
license=('GPL-3.0')
provides=('aminal')
source=("https://github.com/liamg/aminal/releases/download/Nightly-develop-2020-01-26-4033a8b/aminal-linux-amd64")
md5sums=('0b70ba41a242118af25ba48313b27c6b')

package() {
	install -Dm755 "${srcdir}"/aminal-* "${pkgdir}/usr/bin/aminal"
}
# vim:set ts=2 sw=2 et: