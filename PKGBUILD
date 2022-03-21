# Maintainer: Matthew Geskey <vitrvvivs.architectus@gmail.com>

pkgname=oasis-node
pkgver=22.0.2
pkgrel=1
pkgdesc="Node for Oasis Network blockchain"
arch=('any')
url=https://github.com/oasisprotocol/oasis-core
source=("https://github.com/oasisprotocol/oasis-core/releases/download/v${pkgver}/oasis_core_${pkgver}_linux_amd64.tar.gz")
md5sums=('d580802c95979c80c0ed7b3e931e1b2c')
depends=()
makedepends=()
provides=('oasis-node')

package() {
  cd "$srcdir/oasis_core_${pkgver}_linux_amd64"

  install -Dm644 LICENSE -t"$pkgdir/usr/share/licenses/$_pkgname/"
  install -Dm755 oasis-node -t"$pkgdir/usr/bin/"
  install -Dm755 oasis-net-runner -t"$pkgdir/usr/bin/"
  install -Dm755 oasis-remote-signer -t"$pkgdir/usr/bin/"
  install -Dm755 oasis-core-runtime-loader -t"$pkgdir/usr/bin/"
}

# vim:set ts=2 sw=2 et:

