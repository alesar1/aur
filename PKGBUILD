# Maintainer: Edouard Lafon <dev+arch@elafon.98.wf>

pkgname=license-wtfpl
pkgver=2
pkgrel=1
pkgdesc="The WTFPL license template"
arch=('any')
url="http://www.wtfpl.net/"
license=('custom:none')
source=("wtfpl.txt")
sha512sums=('29dc31d0b0365f8b5037c846eb7f441f38249d25cf7aeba134777dddc422ff9faff92aded93bc03b21b4390153568543b2be0c92d09c667559dd78390654e70e')

package() {
  cd "$pkgdir"
  mkdir -p usr/share/licenses/common/WTFPL
  cp "$srcdir"/wtfpl.txt usr/share/licenses/common/WTFPL/license.txt
}
