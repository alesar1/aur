# Maintainer: BeyondMagic <koetemagie@gmail.com>
pkgname=nincat-git
pkgver=2.0.r64.474e248.r64.474e248.r66.d588171.r66.d588171
pkgrel=1
pkgdesc="This a simple script that loads an ASCII art centered in your terminal."
arch=(any)
url="https://github.com/BeyondMagic/nincat"
license=('GPL3')
makedepends=(git)
checkdepends=(coreutils)
optdepends=(c-lolcat)
provides=(nincat)
conflicts=(nincat)
source=("$pkgname::git+$url")
md5sums=('SKIP')


pkgver() {
  cd "$srcdir/$pkgname"
  printf "$pkgver.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/$pkgname"
  make PREFIX=/usr DESTDIR="$pkgdir" install

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}
