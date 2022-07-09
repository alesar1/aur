# Maintainer: neeshy <neeshy@tfwno.gf>
pkgname=pcf-unifont-extra
pkgver=14.0.04
pkgrel=1
pkgdesc="GNU Unifont Glyphs (bold and italic versions)"
arch=('any')
url="http://unifoundry.com/unifont.html"
license=('GPL2' 'custom:OFL')
makedepends=('mkbold-mkitalic' 'xorg-bdftopcf')
source=("https://ftp.gnu.org/gnu/unifont/unifont-$pkgver/unifont-$pkgver.bdf.gz"{,.sig}
        "http://unifoundry.com/LICENSE.txt")
sha256sums=('0bad2b8a46fcc4864c7b4cee4072653a58b9f36e2f54a5a395c7d6dc97766526'
            'SKIP'
            '1e74cb82bf476843e97c2596297b04219b1a7e51f7238944a8c031cb9401fa87')
validpgpkeys=('95D2E9AB8740D8046387FD151A09227B1F435A33') # Paul Hardy <unifoundry@unifoundry.com>

build() {
  cd "$srcdir"
  local _type
  for _type in bold italic bolditalic; do
    "mk$_type" "unifont-$pkgver.bdf" | bdftopcf | gzip -c >"unifont-$_type-$pkgver.pcf.gz"
  done
}

package() {
  cd "$srcdir"
  local _type
  for _type in bold italic bolditalic; do
    install -Dm644 "unifont-$_type-$pkgver.pcf.gz" \
      "$pkgdir/usr/share/fonts/misc/unifont-$_type.pcf.gz"
  done
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
