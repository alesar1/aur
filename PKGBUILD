pkgname=pandoc-crossref-bin
pkgver=0.2.6.0
pandoc_pkgver=1-19
pkgrel=1
pkgdesc="Pandoc Cross References - executable only, without 750MB Haskell depends/makedepends"
url="https://hackage.haskell.org/package/pandoc-crossref"
license=("GPL2")
arch=('x86_64')
conflicts=("pandoc-crossref")
provides=("pandoc-crossref")
replaces=('pandoc-crossref-static' 'pandoc-crossref-lite')
depends=('pandoc')

source=(
    "https://github.com/lierdakil/pandoc-crossref/releases/download/v${pkgver}/linux-ghc8-pandoc-${pandoc_pkgver}.tar.gz"
)
sha256sums=(
    "78fec4867aeee470505c46b6e1ec986cbaef06588e0a8951fa1feb4e2b41d197"
)

package() {
    cd "${srcdir}"

    # To avoid having to download over a gigabyte of haskell makedepends (400-ish for ghc, plus 750 in libs), we
    # just yoink the binary from static compiled binary distributed by pandoc:
    tar -zxf "linux-ghc8-pandoc-${pandoc_pkgver}.tar.gz"
    mkdir -p "${pkgdir}/usr/bin"
    cp pandoc-crossref "${pkgdir}/usr/bin/"

}
