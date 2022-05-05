# Maintainer: Stuart Cardall <developer__at__it-offshore.co.uk>
pkgname=arch-sign-modules
_pkgname=Arch-SKM
pkgver=0.3.3
pkgrel=0
pkgdesc="Signed (In Tree & Out of Tree) Kernel Modules for linux linux-lts linux-hardened linux-zen + AUR kernels"
arch=(x86_64)
url="https://github.com/itoffshore/Arch-SKM"
license=(GPL)
depends=('asp' 'rsync' 'python-zstandard')
optdepends=('pacman-contrib')
makedepends=()
install="$pkgname.install"
source=($pkgname-$pkgver.tar.gz::https://github.com/itoffshore/$_pkgname/archive/$pkgver.tar.gz)
md5sums=('eb7f817bcdbc1d460c189b7a37a6a6f4')

build() {
  return 0
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  mkdir -p $pkgdir/usr/{src,bin,share/$pkgname}

  cp -rf certs-local $pkgdir/usr/src/
  cp scripts/* $pkgdir/usr/bin/
  cp Arch-Linux-PKGBUILD-example $pkgdir/usr/share/$pkgname/PKGBUILD.example
  cp -rf patches $pkgdir/usr/share/$pkgname/patches
  cp README.scripts.md $pkgdir/usr/share/$pkgname/README.scripts.md
}
