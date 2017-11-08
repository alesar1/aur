# Maintainer: Giorgio Wicklein <giowckln@gmail.com>
pkgname=symphytum
pkgver=2.2
pkgrel=1
pkgdesc="Personal database software"
arch=('i686' 'x86_64')
url="http://giowck.github.io/symphytum/"
license=('BSD')
depends=('qt5-base' 'qt5-svg' 'qt5-imageformats' 'sqlite' 'python3' 'python-setuptools' 'python-six' 'python-certifi' 'python-chardet' 'python-idna' 'python-requests' 'python-urllib3')
source=("https://github.com/giowck/symphytum/releases/download/v$pkgver/$pkgname-$pkgver-src.tar.gz")
md5sums=('8f139f45f4b1f85fd44f4198bdbca580')

build() {
  qmake-qt5 -config release
  make
}

package() {
  cd "$srcdir"

  # Binary
  install -Dm755 "$srcdir/symphytum" "${pkgdir}/usr/bin/symphytum"

  # Icons and desktop files
  install -d "${pkgdir}/usr/share/"
  cp -R "$srcdir/stuff/installers/deb/usr/share/applications/" "${pkgdir}/usr/share/"
  cp -R "$srcdir/stuff/installers/deb/usr/share/pixmaps/" "${pkgdir}/usr/share/"

  # Sync framework files
  install -d "${pkgdir}/usr/share/symphytum/"
  cp -R "$srcdir/stuff/installers/deb/usr/share/symphytum/" "${pkgdir}/usr/share/"

  # Copy license
  install -Dm644 "$srcdir/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

