# Maintainer: favonia <favonia@gmail.com>

pkgname=lhs2tex
pkgver=1.23
pkgrel=1
pkgdesc="Preprocessor for typesetting Haskell sources with LaTeX"
url="https://www.andres-loeh.de/lhs2tex/"
license=("GPL")
source=("https://hackage.haskell.org/package/$pkgname/$pkgname-$pkgver.tar.gz"
        "force-dynamic.diff")
makedepends=('ghc')
depends=('ghc-libs' 'haskell-regex-compat' 'texlive-latexextra')
arch=('x86_64')
md5sums=('fa05dab9b4cb770d056104d6a9c82e90'
         '7b3687d3b7143e3b18abdf2926696189')

build() {
    cd ${srcdir}/${pkgname}-${pkgver}
    patch < "../../force-dynamic.diff"
    ./configure --prefix=/usr
    make
}

package(){
    cd ${srcdir}/${pkgname}-${pkgver}
    make DESTDIR=${pkgdir} install
}
