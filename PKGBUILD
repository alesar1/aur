# Maintainer: David Barri <japgolly@gmail.com>
pkgname=atomicwallet
pkgver=2.31.1
pkgrel=1
_pkgver_suffix=150
pkgdesc="Atomic Wallet is a decentralized Cryptocurrency wallet that supports more than 500 coins and tokens, providing simplicity, safety, and convenience for its users."
arch=('x86_64')
url="https://atomicwallet.io"
license=('unknown')
source=("https://get.atomicwallet.io/download/atomicwallet-$pkgver-$_pkgver_suffix.rpm")
sha256sums=('fd8090948eb810902ed74cd4b0f9622836b16af239e92feecc464b6ccdbd638e')

package() {
  set -e

  mv opt usr "$pkgdir"

  cd "$pkgdir/usr"
  mkdir bin
  cd bin
  ln -s "../../opt/Atomic Wallet/atomic" atomicwallet
}
