# Contributor: Alex Suykov <axs@ukr.net>

pkgname=ttf-code2000
pkgver=1.174
pkgrel=1
pkgdesc="Unicode TT font with extensive glyph coverage"
arch=('any')
url="https://www.code2001.com/"
license=('custom')
source=('https://code2001.com/CODE2000.ZIP')
md5sums=('9b1f5b2df4e4d144daed3b0d6894a840')
sha256sums=('3ffff8a889d9a204439bf7fe727a7b6c4ade96db08de90b30af1a68923fc0dd6')
sha512sums=('4acefd47fb92001ae4ccec7ca9799739b94b5bb86821ce7c1307af5109ae445639bc491587427375137a110f89f25197e36719477344232c294a9f63c62a5a74')

package() {
  install -D -m644 CODE2000.TTF "$pkgdir/usr/share/fonts/TTF/Code2000.ttf"
  install -D -m644 CODE2000.HTM "$pkgdir/usr/share/licenses/ttf-code2000/Code2000.html"
}
