# Maintainer: Anatoly Rugalev <anatoly.rugalev gmail com>

pkgname=kube-commander
pkgver=0.3.0
pkgrel=1
pkgdesc="Browse your kubernetes clusters in a casual way"
url="https://github.com/AnatolyRugalev/kube-commander"
license=('MIT')
arch=('x86_64')
depends=('kubectl')

source=("https://github.com/AnatolyRugalev/kube-commander/releases/download/${pkgver}/kube-commander_${pkgver}_Linux_x86_64.tar.gz")
sha256sums=('86ba2ba5529548138ca96daa3cd130474c45d611453809e72e240f8d1a97c359')
package() {
  cd "$srcdir"
  install -d "$pkgdir/usr/bin"
  install -m755 kube-commander "$pkgdir/usr/bin/kube-commander"
}
