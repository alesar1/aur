# Maintainer: David Barri <japgolly@gmail.com>
pkgname=verthash-miner-bin
pkgver=0.6.1
pkgrel=1
pkgdesc="GPU miner for the Verthash algorithm"
arch=('x86_64')
url="https://github.com/CryptoGraphics/VerthashMiner"
license=('GPL-3.0')
source=("https://github.com/CryptoGraphics/VerthashMiner/releases/download/$pkgver/VerthashMiner-$pkgver-CUDA11-linux.tar.gz")
sha256sums=('67649a4dfe71d1f106aa1e98ed2245f1ea01c11759499dc2b29c5ba91da85597')
provides=('verthash-miner')
conflicts=('verthash-miner')

package() {
	set -eu

	cd VerthashMiner-$pkgver-CUDA11-linux

	mkdir -p "$pkgdir/opt"
	cp -r . "$pkgdir/opt/verthash-miner"

	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

	mkdir -p "$pkgdir/usr/bin"
	cd "$pkgdir/usr/bin"
	ln -s ../../opt/verthash-miner/VerthashMiner verthash-miner
}
