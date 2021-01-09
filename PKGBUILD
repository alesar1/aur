# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=fontship
pkgver=0.7.5
pkgrel=1
pkgdesc='A font development toolkit and collaborative work flow'
arch=('any')
url="https://github.com/theleagueof/$pkgname"
license=('AGPL3')
depends=('diffutils'
         'entr'
         'font-v'
         'gftools'
         'git'
         'libarchive'
         'libgit2'
         'make'
         'python'
         'python-babelfont'
         'python-brotli' # fonttools optdepends
         'python-cffsubr' # ufo2ft optdepends
         'python-fontmake'
         'python-fonttools'
         'python-fs' # fonttools optdepends
         'python-lxml' # fonttools optdepends
         'python-skia-pathops' # ufo2ft optdepends
         'python-ufo2ft>=2.19.1'
         'python-ufonormalizer'
         'python-unicodedata2' # fonttools optdepends
         'python-vttlib'
         'python-zopfli' # fonttools optdepends
         'sfdnormalize'
         'sfnt2woff-zopfli'
         'ttfautohint'
         'woff2'
         'zsh')
makedepends=('cargo' 'rust')
source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tar.xz")
sha256sums=('e18824486031b454268d92def21f0dc97b85dac2d15de022d3a67418224a5689')

prepare() {
    cd "$pkgname-$pkgver"
    cargo fetch --locked
}

build() {
    cd "$pkgname-$pkgver"
    ./configure --prefix="/usr"
    make
}

check() {
    cd "$pkgname-$pkgver"
    make check
}

package() {
    cd "$pkgname-$pkgver"
    make DESTDIR="$pkgdir" install
}
