# Maintainer: lukas <lukas <dot> graetz <at> web <dot>  de>
# Maintainer: Graham Edgecombe <graham@grahamedgecombe.com>
pkgname=cfr
pkgver=0.140
pkgrel=1
pkgdesc='Another Java decompiler'
arch=('any')
url='http://www.benf.org/other/cfr/'
license=('MIT')
depends=('java-runtime')
source=("http://www.benf.org/other/cfr/cfr_${pkgver}.jar"
        'cfr' 'LICENSE')
noextract=("cfr_${pkgver}.jar")
sha256sums=('871569de5fb0fd144a82d0f36b52f16053ac7b5e36ddbedf3153f0f05bcce431'
            '0cb60b0fa08a507b696f8a637f1ef7910ab6c5ab90348de6d920b334d19d79af'
            '7d3ca327a39d6177be9c960b2864b39314343cd18bdc1445776b7aef9fcf2d83')

package() {
  install -D cfr "$pkgdir/usr/bin/cfr"
  install -Dm644 "cfr_${pkgver}.jar" "$pkgdir/usr/share/java/cfr/cfr.jar"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/cfr/LICENSE"
}
