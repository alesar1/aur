# Maintainer: Ckat <ckat@teknik.io>

pkgname=dina-font-ttf
pkgver=1
pkgrel=1
pkgdesc="A monospace bitmap font, primarily aimed at programmers, in ttf format"
arch=('any')
url="https://sites.google.com/site/rickard234/filecabinet"
license=('custom')
depends=('xorg-font-utils' 'fontconfig')
source=("DinaTTF.rar::https://sites.google.com/site/rickard234/filecabinet/DinaTTF.zip?attredirects=0&d=1")
md5sums=('7e9d1d8b1de309d54743ac53eaea2eef')

package() {
    cd "$srcdir"
    for f in *.ttf; do
        install -Dm644 $f "$pkgdir/usr/share/fonts/misc/$f"
    done
    install -Dm644 "$srcdir/Licence.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
