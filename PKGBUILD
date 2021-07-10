# Maintainer: Bruno Jacquet <maxijac at free dot fr>

pkgname=teamredminer-bin
_pkgbasename=teamredminer
pkgver=0.8.3
pkgrel=1
pkgdesc="Optimized miner for AMD GPUs"
arch=("x86_64")
url="https://github.com/todxx/teamredminer"
source=("${_pkgbasename}-${pkgver}.tgz::https://github.com/todxx/teamredminer/releases/download/v${pkgver}/teamredminer-v${pkgver}-linux.tgz")
sha256sums=("7e5404e6214eedab906abe7971e40de56c2d05dfcb1ddf6dacb434c10cbc1039")
options=('!strip')

package() {
	mkdir -p "$pkgdir/opt/${_pkgbasename}"
	mkdir -p "$pkgdir/usr/bin"

	cp -a "$srcdir/teamredminer-v$pkgver-linux/"* "$pkgdir/opt/${_pkgbasename}"
	ln -s "/opt/${_pkgbasename}/teamredminer" "$pkgdir/usr/bin/teamredminer"
}
