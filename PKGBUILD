# Maintainer: juantascon <juantascon.aur@horlux.org>
# Contributor : Jingbei Li <i@jingbei.li>

pkgname=plantuml
pkgver=1.2019.11
pkgrel=1
pkgdesc="Component that allows to quickly write uml diagrams"
arch=(any)
url="http://plantuml.com/"
license=('GPL')
depends=("graphviz")
makedepends=("apache-ant" "java-environment>=8")
source=("http://downloads.sourceforge.net/project/$pkgname/$pkgver/$pkgname-$pkgver.tar.gz"
        "$pkgname.run")
sha256sums=('432c5b1f2a96a7a8195c04f99d11fe95a9d5f2b179788e34abec6b49456f2b37'
            'a3fb528f4c719cfd0ff6154c60fd54ce341011d132caf950cc30af4989f6aac8')
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
  install -m 644 -D "$pkgname.jar" "$pkgdir/usr/share/java/$pkgname/$pkgname.jar"
}
