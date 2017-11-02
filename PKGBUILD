# Maintainer: Giorgio Wicklein <giowckln@gmail.com>
pkgname=passiflora
pkgver=2.2
pkgrel=1
pkgdesc="Spagyrik Datenbank Passiflora"
arch=('i686' 'x86_64')
url="https://github.com/joshirio/passiflora"
license=('BSD')
depends=('qt5-base' 'qt5-svg' 'qt5-imageformats' 'sqlite')
source=("http://passiflora.enmed.de/files/$pkgname-$pkgver-src.tar.gz")
md5sums=('23581947b47ad6f64e713439d577ccf7')

build() {
  qmake-qt5 -config release
  make
}

package() {
  cd "$srcdir"

  # Binary
  install -Dm755 "$srcdir/passiflora" "${pkgdir}/usr/bin/passiflora"

  # Icons and desktop files
  install -d "${pkgdir}/usr/share/"
  cp -R "$srcdir/stuff/installers/deb/usr/share/applications/" "${pkgdir}/usr/share/"
  cp -R "$srcdir/stuff/installers/deb/usr/share/pixmaps/" "${pkgdir}/usr/share/"

  # Copy license
  install -Dm644 "$srcdir/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

