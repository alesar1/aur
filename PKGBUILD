# Maintainer: Aleksandr Boyko <brdcom@yandex.ru>
pkgname=texlive-csltex
_pkgname=csltex
pkgver=1.0
pkgrel=1
pkgdesc="A LaTeX package for typing of Church Slavonic texts in the standard HIP (HIP-9)"
arch=('any')
url="https://sites.google.com/site/csltex"
license=('LPPL')
depends=('texlive-core')
install="${pkgname}".install
source=("${url}/${_pkgname}-public.zip")
md5sums=('717d9f4e4915646ab120556b6ffd6252')

package() {
    install -Dm644 "$srcdir/doc/latex/csltex/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 "$srcdir/doc/latex/csltex/csltex.pdf" "$pkgdir/usr/share/doc/$pkgname/csltex.pdf"
    install -dm755 "$pkgdir/usr/share/texmf/tex/latex"
    cp -rf "$srcdir/tex/latex/csltex" "$pkgdir/usr/share/texmf/tex/latex/"
    cp -rf "$srcdir/fonts" "$pkgdir/usr/share/texmf/"
}

