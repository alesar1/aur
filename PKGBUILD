# Maintainer:  Caleb Maclennan <caleb@alerque.com>

pkgname=fontship
pkgver=0.3.0
pkgrel=1
pkgdesc='A font development toolkit and collaborative work flow'
arch=('any')
url="https://github.com/theleagueof/$pkgname"
license=('AGPL3')
depends=('entr'
         'font-v'
         'gftools'
         'git'
         'libarchive'
         'make'
         'python'
         'python-babelfont'
         'python-brotli' # fonttools optdepends
         'python-click'
         'python-cffsubr' # ufo2ft optdepends
         'python-fontmake'
         'python-fonttools'
         'python-fs' # fonttools optdepends
         'python-lxml' # fonttools optdepends
         'python-skia-pathops' # ufo2ft optdepends
         'python-ufo2ft'
         'python-ufonormalizer'
         'python-unicodedata2' # fonttools optdepends
         'python-zopfli' # fonttools optdepends
         'sfnt2woff-zopfli'
         'ttfautohint'
         'woff2'
         'zsh')
source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tar.xz")
sha256sums=('a85c98c0262e190b337768b0f2391af6225092682fdce453b3b0a4de9c37d0ef')

build() {
    cd "$pkgname-$pkgver"
    ./configure --prefix="/usr"
    make
}

package() {
    cd "$pkgname-$pkgver"
    make DESTDIR="$pkgdir" install
}
