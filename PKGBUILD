# Maintainer: JustKidding <jk@vin.ovh>

pkgname=gminer-bin
_pkgbasename=gminer
pkgver=2.90
pkgrel=1
pkgdesc="Multi currency GPU miner"
arch=("x86_64")
url="https://github.com/develsoftware/GMinerRelease"
source=("${_pkgbasename}-${pkgver}.tar.xz::https://github.com/develsoftware/GMinerRelease/releases/download/${pkgver}/gminer_${pkgver/\./_}_linux64.tar.xz")
sha256sums=('948a8beae6def3cc287d747c627019fdeaa03496780aee219948ac4efd755489')
options=('!strip')

package() {
	rm "${_pkgbasename}-${pkgver}.tar.xz"

	mkdir -p "$pkgdir/opt/${_pkgbasename}"
	mkdir -p "$pkgdir/usr/bin"

	cp -a "$srcdir/"* "$pkgdir/opt/${_pkgbasename}"
	ln -s "/opt/${_pkgbasename}/miner" "$pkgdir/usr/bin/miner"
}
