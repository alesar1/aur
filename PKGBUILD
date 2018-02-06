# Maintainer: juantascon <juantascon.aur@horlux.org>

pkgname=plantuml
pkgver=1.2018.1
pkgrel=2
pkgdesc="Component that allows to quickly write uml diagrams"
arch=(any)
url="http://plantuml.com/"
license=('GPL')
depends=("java-runtime" "graphviz")
makedepends=("apache-ant" "java-environment")
source=("http://downloads.sourceforge.net/project/$pkgname/$pkgver/$pkgname-$pkgver.tar.gz"
        "$pkgname.run")
sha256sums=('57ea4641cea6db9d2a0e6fd4a111f0f4baa44e1cf29af4698024583fc2c27595'
            'dff39e4d8dd8eedb58c1b0a0cf64ab2c404b713e3a42fa5fdf0b6792ca382ed5')
optdepends=('plantuml-ascii-math')

package() {
  install -m 755 -D "$pkgname.run" "$pkgdir/usr/bin/$pkgname"

  cd "$srcdir/$pkgname-$pkgver"
  sed 's/target="1.6"/target="1.8"/g' -i build.xml

  # assume ant defaults to UTF8 encoding.
  ant dist
  install -m 644 -D "$pkgname.jar" "$pkgdir/opt/$pkgname/$pkgname.jar"
}
