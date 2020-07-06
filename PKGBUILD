# Maintainer: Étienne Deparis <etienne@depar.is>

pkgname=boston-icon-theme
pkgver=0.7
pkgrel=2
_gitname=Boston-Icons
_gitrel=f0c21b8548650b53187d553a197c8ae33b5cc6f4
_upname=Boston
pkgdesc="A highly minimalist icon theme, with a sober color palette inspired on basic hues and forms."
arch=('any')
url="https://www.opendesktop.org/p/1012402"
license=('CCPL:by-sa')
source=("https://github.com/heychrisd/$_gitname/archive/$_gitrel.tar.gz")
sha256sums=('47f763711481ad8ff9f999cf62973f5a2ea7f1b308f59e99ece4a46b75227d06')
options=(!emptydirs)

package() {
    cd "$srcdir/${_gitname}-${_gitrel}"

    install -d -m755 $pkgdir/usr/share/licenses/$pkgname
    install -D -m644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
    install -D -m644 "THIRD PARTY" $pkgdir/usr/share/licenses/$pkgname/THIRD_PARTY
    install -D -m644 PATRONS.md $pkgdir/usr/share/licenses/$pkgname/PATRONS

    install -d -m755 $pkgdir/usr/share/icons/$_upname
    for size in 16 48 128 legacy symbolic; do
        mv $size "$pkgdir/usr/share/icons/${_upname}/$size"
    done
    install -D -m644 index.theme "$pkgdir/usr/share/icons/${_upname}/index.theme"
}
