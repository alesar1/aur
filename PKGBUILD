#Maintainer: Neve Laughery <RewoundVHS@protonmail.com>

pkgname=otb-scientifica
_gitname=scientifica
pkgver=2.5
pkgrel=0
pkgdesc='Tall and condensed bitmap font for geeks.'
arch=('any')
url="https://github.com/NerdyPepper/scientifica"
license=('SIL')
depends=()
makedepends=('git' 'xorg-font-utils')
source=('git+https://github.com/NerdyPepper/scientifica.git')
sha256sums=('SKIP')

package() {
    install -D -m644 "$srcdir/$_gitname/regular/scientifica.otb" "$pkgdir/usr/share/fonts/misc/scientifica.otb"
    install -D -m644 "$srcdir/$_gitname/bold/scientificaBold.otb" "$pkgdir/usr/share/fonts/misc/scientificaBold.otb"
    install -D -m644 "$srcdir/$_gitname/italic/scientificaItalic.otb" "$pkgdir/usr/share/fonts/misc/scientificaItalic.otb"
    install -D -m644 "$srcdir/$_gitname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
