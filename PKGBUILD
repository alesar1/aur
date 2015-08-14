# Maintainer: Benjamin Chrétien <chretien + aur [at] lirmm [dot] fr>
# Contributor: Eric Engestrom <aur [at] engestrom [dot] ch>
# Contributor: Rasi <rasi@xssn.at>
# Contributor: Sean Pringle <sean.pringle@gmail.com>
# Contributor: SanskritFritz (gmail)

pkgname=rofi
pkgver=0.15.7
pkgrel=2
pkgdesc="Popup window switcher roughly based on superswitcher, requiring only xlib and xft. DaveDavenport's fork"
arch=('i686' 'x86_64')
url="https://davedavenport.github.io/rofi/"
license=('MIT')
makedepends=()
depends=('libx11' 'libxft' 'freetype2' 'libxdg-basedir' 'libxinerama' 'pango')
optdepends=('i3-wm: use as a window switcher')
source=("https://github.com/DaveDavenport/${pkgname}/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('63979c59f76bf405113531e76036696797883682a935e67771769ef00b7ef00a')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  # Fix automake version mismatch
  autoreconf -i

  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make install install-man DESTDIR="$pkgdir"

  # Install examples to /usr/share/doc/rofi/examples
  install -dm755 "$pkgdir/usr/share/doc/rofi/examples"
  install -Dm755 Examples/*.sh "$pkgdir/usr/share/doc/rofi/examples"
}
