# former Maintainer: Bjoern Franke <bjo@nord-west.org>
pkgname=hibiscus
pkgver=2.10.2
_pkgver=2.10
pkgrel=1
pkgdesc="HBCI banking plugin for jameica."
arch=('x86_64' 'i686')
url="https://www.willuhn.de/projects/hibiscus/"
license=("GPL2")
depends=('java-runtime>=1.5' 'jameica>=2.8' 'libstdc++5')
makedepends=('unzip')
optdepends=('pcsclite')
options=('!strip')
install=hibiscus.install
source=("https://www.willuhn.de/products/hibiscus/releases/$_pkgver/hibiscus-${pkgver}.zip"
"https://www.willuhn.de/products/hibiscus/releases/$_pkgver/hibiscus-${pkgver}.zip.asc"
"hibiscus.desktop")
validpgpkeys=("7314FBDE7D38EE5610D291B65A8ED9CFC0DB6C70") # Olaf Willuhn <info@willuhn.de>
sha512sums=('dc32eba0cf2d764e9fa88e789ea4c292d288f549f68a9b8c13b2e7da87c0f3a0c31d31e25d3546fb1cfd99dd515668afc52ccb5808e179458ab6a2fc0d98e2b5'
            'SKIP'
            'ceea9cc5cf438893b2f5dfe46f46840448353f35719216ccca0b8dd12369d4e3c91d393c7c8b5b842a64537c61864ce8ca48e1895bb3f41c5083794399a21925')

package() {
  mkdir -p "$pkgdir/opt/jameica/plugins"
  cp -r "$pkgname" "$pkgdir/opt/jameica/plugins"
  install -Dm 644 "$srcdir/hibiscus.desktop" "$pkgdir/usr/share/applications/hibiscus.desktop"
}
