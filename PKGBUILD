# Maintainer: David Barri <japgolly@gmail.com>
pkgname=atomicwallet
pkgver=2.41.0
pkgrel=1
_pkgver_suffix=200
pkgdesc="Atomic Wallet is a decentralized Cryptocurrency wallet that supports more than 500 coins and tokens, providing simplicity, safety, and convenience for its users."
arch=('x86_64')
url="https://atomicwallet.io"
license=('unknown')
source=("https://get.atomicwallet.io/download/atomicwallet-$pkgver-$_pkgver_suffix.rpm")
sha256sums=('e905d5681be74df7d6792363e70acf83f86c0d8d2f5fd95aaed91a8e3a3da810')

package() {
  set -e

  mv opt usr "$pkgdir"

  cd "$pkgdir/usr"
  mkdir bin
  cd bin
  ln -s "../../opt/Atomic Wallet/atomic" atomicwallet
}
