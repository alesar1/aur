# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>
# Contributor: Andreas Hübner <andhu@gmx.de>

pkgname=unicode
pkgver=2.8
pkgrel=1
pkgdesc='Display unicode character properties on the command line'
url='https://github.com/garabik/unicode'
arch=('any')
license=('GPL3')
depends=('python')
source=("$pkgname-$pkgver.tar.gz::https://github.com/garabik/${pkgname}/archive/v${pkgver}.tar.gz"
        UnicodeData-${pkgver}-${pkgrel}.txt::'https://www.unicode.org/Public/UNIDATA/UnicodeData.txt'
        Blocks-${pkgver}-${pkgrel}.txt::'https://www.unicode.org/Public/UNIDATA/Blocks.txt')
sha256sums=('35637578fb6f0758366175951147ab753c95b005e371f9bb5ad21e5ac08c28d8'
            'bdbffbbfc8ad4d3a6d01b5891510458f3d36f7170422af4ea2bed3211a73e8bb'
            '81a82b6a9fcf1a9c12f588d7a1decd73a9afdc4cac95b0eb7e576e7942d6c19f')

package() {
  cd "$pkgname-$pkgver"

  install -Dm755 unicode "$pkgdir/usr/bin/unicode"
  install -Dm755 paracode "$pkgdir/usr/bin/paracode"

  install -Dm644 "unicode.1" "$pkgdir/usr/share/man/man1/unicode.1"
  install -Dm644 "paracode.1" "$pkgdir/usr/share/man/man1/paracode.1"

  install -Dm644 "$srcdir/UnicodeData-${pkgver}-${pkgrel}.txt" "$pkgdir/usr/share/unicode/UnicodeData.txt"
  install -Dm644 "$srcdir/Blocks-${pkgver}-${pkgrel}.txt" "$pkgdir/usr/share/unicode/Blocks.txt"
}
