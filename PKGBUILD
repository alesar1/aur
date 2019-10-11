# Maintainer: changwoo
# Contributor: OctopusET
pkgname=hunspell-ko
pkgver=0.7.1
pkgrel=3
pkgdesc="Korean dictionary for hunspell"
arch=('any')
url='http://code.google.com/p/spellcheck-ko'
license=('LGPL3' 'MPL' 'GPL' 'CC BY-SA 4.0')
depends=('hunspell>=1.3.1')
makedepends=(
  'python>=3.5'
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/spellcheck-ko/hunspell-dict-ko/archive/${pkgver}.tar.gz")
sha1sums=('e93dd247b629acb3c33e062fa0153bb3188c9b86')

build() {
  cd "$srcdir/hunspell-dict-ko-$pkgver"
  make VERSION=$pkgver DESTDIR="$pkgdir" PREFIX=/usr
}

package() {
  cd "$srcdir/hunspell-dict-ko-$pkgver"
  install -dm755 "${pkgdir}"/usr/share/hunspell
  cp -p ko.aff "${pkgdir}"/usr/share/hunspell/ko_KR.aff
  cp -p ko.dic "${pkgdir}"/usr/share/hunspell/ko_KR.dic
}
