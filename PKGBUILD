# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=ispc-bin
pkgver=1.13.0
pkgrel=1
pkgdesc="Intel SPMD program compiler"
arch=('x86_64')
url="https://ispc.github.io/"
license=('BSD')
depends=('glibc')
provides=('ispc')
conflicts=('ispc')
source=("ispc-v$pkgver-linux.tar.gz::https://github.com/ispc/ispc/releases/download/v$pkgver/ispc-v$pkgver-linux.tar.gz")
sha256sums=('8ab1189bd5db596b3eee9d9465d3528b6626a7250675d67102761bb0d284cd21')


package() {
  cd "ispc-v$pkgver-linux"

  install -Dm755 "bin/ispc" -t "$pkgdir/usr/bin"

  install -dm755 "$pkgdir/usr/share/doc/ispc"
  mv *.html "$pkgdir/usr/share/doc/ispc"
  mv "css" "$pkgdir/usr/share/doc/ispc"
  mv "examples" "$pkgdir/usr/share/doc/ispc"
  install -Dm644 "ReleaseNotes.txt" -t "$pkgdir/usr/share/doc/ispc"

  install -Dm644 "contrib/ispc.vim" -t "$pkgdir/usr/share/vim/vimfiles/syntax"

  install -Dm644 "LICENSE.txt" -t "$pkgdir/usr/share/licenses/ispc"
}
