#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=ecryptfs-simple
pkgver=2016.11.15.1
pkgrel=1
pkgdesc='A very simple utility for working with eCryptfs.'
arch=(i686 x86_64)
license=(GPL)
url="http://xyne.archlinux.ca/projects/ecryptfs-simple"
depends=(ecryptfs-utils util-linux)
makedepends=(cmake)
source=(
  http://xyne.archlinux.ca/projects/ecryptfs-simple/src/ecryptfs-simple-2016.11.15.1.tar.xz
  http://xyne.archlinux.ca/projects/ecryptfs-simple/src/ecryptfs-simple-2016.11.15.1.tar.xz.sig
)
sha512sums=(
  ad6fcd83b1e4da7b92c87a2082e304d12f85a7d1ec68bfede10f701d7c582aaf71504c7afe093954f780900727294a64e6a58d0ce7d855537ce94d623b11d5ff
  ef41a966e62112da25f1a07b81d92da451f591a240c7a46cf9060d064670d0f7f22f3d5ce8fc44e0fdcb71d9cd284650ceb7363051dae89b808698bb1781d90e
)
md5sums=(
  6bc854342576478f311e3f14e4ab221f
  d0e1028d156f25f77c8969a77195a0c4
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

build ()
{
  mkdir -p "$srcdir/build"
  cd -- "$srcdir/build"
  cmake ../"$pkgname-$pkgver" -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package ()
{
  cd -- "$srcdir/build"
  make install DESTDIR="$pkgdir"
}
# vim: set ts=2 sw=2 et:
