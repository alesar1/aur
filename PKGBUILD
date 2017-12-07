# Maintainer: Daniel M. Capella <polycitizen@gmail.com>

pkgname=procdump
pkgver=1.0
pkgrel=1
pkgdesc='Generate coredumps based of performance trigger'
arch=('x86_64')
url=https://github.com/Microsoft/ProcDump-for-Linux
license=('MIT')
depends=('gdb')
source=("procdump-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha512sums=('564def86f9d0539f2631f8a72914845e6cf3fbdd2bc8dbe949e181568cbcbdf79d4285c574a02475c68bac43847268353b2485ca142b131f3efdc12587dcd7b7')

build() {
  cd ProcDump-for-Linux-$pkgver
  make
}

package() {
  cd ProcDump-for-Linux-$pkgver
  install -Dm755 bin/procdump "$pkgdir"/usr/bin/procdump
  install -Dm644 procdump.1 "$pkgdir"/usr/share/man/man1/procdump.1
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/procdump/LICENSE
}

# vim:set ts=2 sw=2 et:
