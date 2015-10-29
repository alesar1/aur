# Maintainer: Seishinryohosha <seishinryohosha @ googlemail . com>
# Contributor: even
pkgname=greenfoot
pkgver=3.0.0
pkgrel=1
pkgdesc="Allows easy development of two-dimensional graphical applications, such as simulations and interactive games."
arch=('any')
url="http://www.greenfoot.org"
license=('GPL2' 'BSD')
depends=('sh' 'java-runtime' 'java-environment')
makedepends=('libarchive')
source=(http://www.greenfoot.org/download/files/Greenfoot-generic-${pkgver//.}.jar
        greenfoot
        greenfoot.desktop)
sha256sums=('5e764e5e8fbdd7cbae15591dd12a0599dde58be26aa3772028ddd19e8b1bb1b5'
            '16f8bf45c11bd5abe50a672082ed0b3e6da2cb09b89c91a5cdde6459f500475b'
            'd302cfba475646f7030c8353be8637e1601b1ec512a07cbdf936793ff67338d8')

package() {
  cd "$srcdir"
  bsdtar -x -f "greenfoot-dist.jar"
  mkdir -p "$pkgdir"/usr/share/{java,greenfoot}
  cp -r lib "$pkgdir/usr/share/java/greenfoot/"
  cp -r scenarios "$pkgdir/usr/share/greenfoot/"
  cp -r doc "$pkgdir/usr/share/greenfoot/"
  install -Dm644 greenfoot.desktop "$pkgdir/usr/share/applications/greenfoot.desktop"
  install -Dm755 greenfoot "$pkgdir/usr/bin/greenfoot"
}
