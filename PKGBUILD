# Maintainer: juantascon <juantascon.aur@horlux.org>
# Contributor : Jingbei Li <i@jingbei.li>

pkgname=plantuml
pkgver=1.2018.7
pkgrel=1
pkgdesc="Component that allows to quickly write uml diagrams"
arch=(any)
url="http://plantuml.com/"
license=('GPL')
depends=("graphviz")
makedepends=("apache-ant" "java-environment=8")
source=("http://downloads.sourceforge.net/project/$pkgname/$pkgver/$pkgname-$pkgver.tar.gz"
        "$pkgname.run")
sha256sums=('0273ef68e9f4834a300b51c629a6abddb022ba486a96e75c284c017b59c94461'
            'dff39e4d8dd8eedb58c1b0a0cf64ab2c404b713e3a42fa5fdf0b6792ca382ed5')
optdepends=('plantuml-ascii-math')

prepare(){
  cd "$srcdir/$pkgname-$pkgver"
  sed 's/target="1.6"/target="1.8"/g' -i build.xml
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  # assume ant defaults to UTF8 encoding.
  ant dist
}

package() {
  depends+=("java-runtime")
  install -m 755 -D "$pkgname.run" "$pkgdir/usr/bin/$pkgname"

  cd "$srcdir/$pkgname-$pkgver"
  install -m 644 -D "$pkgname.jar" "$pkgdir/opt/$pkgname/$pkgname.jar"
}
