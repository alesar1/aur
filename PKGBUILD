pkgname=python2-arpeggio
_srcname=Arpeggio
pkgver=1.9.0
pkgrel=1
pkgdesc="Recursive descent parser with memoization based on PEG grammars (aka Packrat parser)."
arch=('any')
url="http://igordejanovic.net/Arpeggio/"
license=('MIT')
depends=('python2')
source=(https://github.com/igordejanovic/$_srcname/archive/v$pkgver.tar.gz)
md5sums=('dd06e3765aca66535947c8c4da088673')

package() {
  cd "$srcdir/$_srcname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
