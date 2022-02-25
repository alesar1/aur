# Maintainer: iohzrd <iohzrd at gmail dot com>

pkgname=pktd
pkgver=1.5.0
pkgrel=1
pkgdesc="The PKT full node and wallet (Github binary release)"
arch=("x86_64")
url="https://pkt.cash"
license=("ISC")
depends=()
provides=("checksig" "pktctl" "pktd" "pktwallet" "pld" "pldctl")
conflicts=("checksig" "pktctl" "pktd" "pktwallet" "pld" "pldctl")
source=("https://github.com/pkt-cash/pktd/releases/download/pktd-v${pkgver}/pktd-v${pkgver}-linux.deb")
sha256sums=("ca1a4e9fbfdba63d4018115d0258c4234ed13f2cc4abb1af63a687ebad820918")

package() {
	echo "  -> Extracting the data.tar.gz..."
	bsdtar -xf data.tar.gz -C "$pkgdir/"

    mv "$pkgdir/bin/" "$pkgdir/usr/bin/"
}