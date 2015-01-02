# Contributor: Leonidas <marek@xivilization.net>
pkgname=homeshick-git
pkgver=0.0.r372.dd9a0fd
pkgrel=2
pkgdesc="bash stand-in for homesick by technicalpickles"
arch=(any)
url="https://github.com/andsens/homeshick"
license=('BSD')
depends=('git')
source=("$pkgname"::'git+https://github.com/andsens/homeshick.git')
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  printf "0.0.r%d.%s\n" $(git rev-list HEAD --count) $(git rev-parse --short HEAD)
}

build() {
  # patch the location of the library scripts
  sed -i 's|homeshick="\$repos/homeshick"|homeshick=/usr/lib/homeshick|' "$srcdir"/$pkgname/bin/homeshick
}

package() {
  # copy the 'binary' *ahem* script
  install -D "$srcdir"/$pkgname/bin/homeshick "$pkgdir"/usr/bin/homeshick
  # copy the utils scripts
  mkdir -p "$pkgdir"/usr/lib/homeshick/lib/
  cp -r "$srcdir"/$pkgname/lib "$pkgdir"/usr/lib/homeshick/
  # copy the licenses
  mkdir -p "$pkgdir"/usr/share/licenses/$pkgname/
  install -m=644 -t "$pkgdir"/usr/share/licenses/$pkgname/ "$srcdir"/$pkgname/LICENSE*
}
