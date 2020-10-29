# Contributor: Gen2ly         <toddrpartridge@gmail.com>
# Contributor: Anton Bazhenov <anton.bazhenov at gmail>
# Contributor: Nathan Owe     <ndowens04 at gmail>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=arachnophilia
_pkgname=Arachnophilia
pkgver=5.5.2947
pkgrel=2
pkgdesc="A web page development workshop and general programming tool"
arch=('any')
url="http://www.arachnoid.com/arachnophilia/index.php"
license=('GPL' 'custom:careware')
depends=('java-environment' 'bash' 'desktop-file-utils')
makedepends=('curl')
source=("$_pkgname-$pkgver.jar::http://www.arachnoid.com/$pkgname/$_pkgname.jar"
        "http://www.arachnoid.com/lutusp/old_articles/careware.rtf"
	"http://www.arachnoid.com/arachnophilia/index.php"
        "${pkgname}.desktop"
        "${pkgname}.sh")
sha256sums=('e4fccb6fed127a87fce6bd9073e670ef0270684c8a054a8396f27d8f2aa29a39'
            'b170b0beb4fee26fb9f60529cf87d418396571459b95210b19437596407d3426'
            '179fe52b3daecf5edba1af8104a9f0bcec52c7f07a7eb4fe232453bcbadc1a7d'
            'e1ae7e1cdfcf66011fae5f4e2e1c46b4f00fb2ea58edf74ba146896f04d70c98'
            '6b772081e74eb9551102f6331bc3f4114d1dcfdea7798b9cc1a5ff8c2d73a422')
DLAGENTS=('http::/usr/bin/curl -A "Mozilla/4.0" -kfLC - --retry 3 --retry-delay 3 -o %o %u')
noextract=("$_pkgname-$pkgver.jar")

package() {
  cd "${srcdir}"

  # Install program files
  install -Dm755 ${pkgname}.sh "$pkgdir"/usr/bin/${pkgname}
  install -Dm644 $_pkgname-$pkgver.jar "$pkgdir"/usr/share/${pkgname}/$_pkgname.jar

  # Install a desktop entry
  bsdtar -xf $_pkgname-$pkgver.jar $_pkgname.png
  install -Dm644 $_pkgname.png  "$pkgdir"/usr/share/pixmaps/${pkgname}.png
  install -Dm644 ${pkgname}.desktop \
   "$pkgdir"/usr/share/applications/${pkgname}.desktop

  # Install a license file
  install -Dm644 careware.rtf \
   "$pkgdir"/usr/share/licenses/${pkgname}/careware.rtf
}
