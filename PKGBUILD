# Maintainer: Yuta Sakamoto <sksat@sksat.net>
pkgname=zen
pkgver=0.8.20200609LTS
pkgrel=1
pkgdesc="Reduce your stress with the C language. The first step to writing perfect software is Zen™"
arch=('x86_64')
url="https://zen-lang.org"
license=('ConnectFree Reference Source License (CF-RSL)')
depends=('bash')
install=
changelog=
source=("https://zen-lang.org/dist/$pkgver/$pkgname-linux-$arch-$pkgver.tar.xz")
sha256sums=('cb3a0cb76141c2d957fdcb6e8322462f06050e924e7e18f36d21a21770b19edf')

package() {
  cd "${srcdir}/$pkgname-linux-$arch-$pkgver"
  install -D zen "$pkgdir/usr/bin/zen"

  mv lib/zen "$pkgdir/usr/lib/"

  install -d "$pkgdir/usr/share/licenses/$pkgname"
  mv LICENSE "$pkgdir/usr/share/licenses/$pkgname/"
  mv EULA.md "$pkgdir/usr/share/licenses/$pkgname/"
  mv ACKNOWLEDGEMENTS.md "$pkgdir/usr/share/licenses/$pkgname/"
}

# vim:set ts=2 sw=2 et:
