pkgname=scenic-view
pkgver=11.0.2
pkgrel=1
pkgdesc='A tool for analyzing the scenegraph of a JavaFX application'
arch=('i686' 'x86_64')
url='http://fxexperience.com/scenic-view/'
license=('GPL')
depends=('jre11-openjdk-headless' 'java11-openjfx')
source=("https://download.jonathangiles.net/downloads/scenic-view/scenicview-linux.zip"
        'scenic-view'
        'scenic-view.desktop')
sha256sums=('913cbbb3a86e4fa948a09247179eb0d740208a109f73316b135af0ebd938eedc'
            '8cf67647a28f2eb2a67bb48283f7b01c5ce866be402df4953b2a2af6d3d50844'
            '7d1fb4e5a06a081b604e10acef772e809b0aa6a7c56edbfba8bce8af47cabd96')

prepare() {
  unzip -o scenicview-linux.zip
}

package() {
  install -Dm644 "$srcdir/scenicview/lib/scenicview.jar" "$pkgdir/usr/share/java/scenic-view/scenicview.jar"

  install -Dm755 scenic-view "$pkgdir/usr/bin/scenic-view"
  install -Dm644 scenic-view.desktop "$pkgdir/usr/share/applications/scenic-view.desktop"

  #install -Dm644 org/scenicview/view/images/ui/mglass.png "$pkgdir/usr/share/pixmaps/scenic-view.png"
}
