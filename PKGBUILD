# Maintainer: Vlad M. <vlad@archlinux.net>

pkgname=rusty-tags
pkgver=2.1.0
pkgrel=1
pkgdesc="Create ctags/etags for a cargo project and all of its dependencies"
url="https://github.com/dan-t/rusty-tags"
depends=('ctags')
makedepends=('cargo')
arch=('i686' 'x86_64')
license=('BSD')
source=("https://github.com/dan-t/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('f744ea5d1f5996a258f360dc90ec63444b2b67a8ff37c62a9f1fdb0ff3eb63cd')

build() {
  cd "$pkgname-$pkgver"
  cargo build --release
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
