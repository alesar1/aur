# Maintainer: Daniel M. Capella <polycitizen@gmail.com>

pkgname=procdump
pkgver=1.0.1
pkgrel=1
pkgdesc='Generate coredumps based off performance triggers'
arch=('x86_64')
url=https://github.com/Microsoft/ProcDump-for-Linux
license=('MIT')
depends=('gdb')
source=("procdump-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha512sums=('730fe4c16913fe853ac8b67ab7d79161f38b8051d4e02f9285ba7a35eb7f3ab1c6872ff8955f074213876bf08bdfadfaccf5e06275eb3a747607245e6bf33818')

build() {
  cd ProcDump-for-Linux-$pkgver
  make -j1
}

package() {
  cd ProcDump-for-Linux-$pkgver
  install -Dm755 bin/procdump "$pkgdir"/usr/bin/procdump
  install -Dm644 procdump.1 "$pkgdir"/usr/share/man/man1/procdump.1
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/procdump/LICENSE
}

# vim:set ts=2 sw=2 et:
