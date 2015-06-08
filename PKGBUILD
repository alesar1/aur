# Maintainer: Jan Cholasta <grubber at grubber cz>

pkgname=slade
pkgver=3.1.0.3
pkgrel=1
pkgdesc="SLADE3 Doom editor."
arch=('i686' 'x86_64')
url="http://slade.mancubus.net/"
license=('GPL')
depends=('fluidsynth' 'freeimage' 'ftgl' 'libmodplug' 'sfml' 'webkitgtk2' 'wxgtk>=3.0')
makedepends=('cmake' 'imagemagick' 'zip')
source=(https://github.com/sirjuddington/SLADE/archive/$pkgver.tar.gz
        slade.desktop)
sha256sums=('4b5a9c6f668bc773d4e2e06757e01b760078c983b98710d1b610da30c5f469a4'
            '5d619cdae8a993b07bb72aed54c7e814db48e66aac61a809dd2c5ab1373cd811')

build() {
  cd SLADE-$pkgver

  cmake -DCMAKE_CXX_FLAGS=-DNDEBUG \
        .
  make

  convert "slade.ico[0]" slade.png
}

package() {
  cd SLADE-$pkgver

  install -Dm755 slade "$pkgdir/usr/bin/slade"
  install -Dm644 slade.pk3 "$pkgdir/usr/share/slade3/slade.pk3"

  install -Dm644 slade.png "$pkgdir/usr/share/pixmaps/slade.png"
  install -Dm644 "$srcdir/slade.desktop" "$pkgdir/usr/share/applications/slade.desktop"
}
